'use client';
import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  ReactElement,
  ReactNode,
} from "react";
import gsap from "gsap";

// --- Card Component ---
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`p-6 text-center space-y-3 rounded-xl shadow-lg backdrop-blur-md bg-white/70 border border-gray-200 transition-transform duration-500 hover:scale-105 hover:shadow-xl  hover:shadow-glow absolute top-1/2 left-1/2 shadow-card hover:shadow-light [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
    />
  )
);
Card.displayName = "Card";

// --- Slot Calculation ---
interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (
  i: number,
  distX: number,
  distY: number,
  total: number
): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement | null, slot: Slot, skew: number) => {
  if (!el) return;
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });
};

// --- CardSwap Props ---
interface CardSwapProps {
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (index: number) => void;
  skewAmount?: number;
  easing?: "elastic" | "linear" | "power";
  children: ReactNode;
}

const CardSwap: React.FC<CardSwapProps> = ({
  width = 400,
  height = 280,
  cardDistance = 50,
  verticalDistance = 60,
  delay = 4000,
  pauseOnHover = true,
  onCardClick,
  skewAmount = 4,
  easing = "elastic",
  children,
}) => {
  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);

  const refs = useMemo(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    [childArr.length]
  );

  const order = useRef<number[]>(
    Array.from({ length: childArr.length }, (_, i) => i)
  );

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number | null>(null);
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const total = refs.length;
  
    // Set all cards offscreen with opacity 0 for entrance animation
    refs.forEach((r, i) => {
      if (r.current) {
        gsap.set(r.current, {
          y: 200,
          xPercent: -20,
          yPercent: -20,
          opacity: 0,
          rotateX: 20,
          scale: 0.9,
          zIndex: total - i,
        });
      }
    });
  
    // Animate each card into place (sequentially)
    refs.forEach((r, i) => {
      const slot = makeSlot(i, cardDistance, verticalDistance, total);
      if (!r.current) return;
  
      gsap.to(r.current, {
        delay: i * 0.05,
        duration: 0.5,
        y: slot.y,
        x: slot.x,
        z: slot.z,
        opacity: 1,
        rotateX: 0,
        scale: 1,
        ease: "power3.out",
        onComplete: () => {
          placeNow(r.current, slot, skewAmount); // Final static positioning
        },
      });
    });
  
    // Then start regular animation
    const swap = () => {
      if (order.current.length < 2) return;
  
      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline();
      tlRef.current = tl;
  
      if (!elFront) return;
  
      // Drop front card
      tl.to(elFront, {
        y: "+=200",
        opacity: 0,
        duration: config.durDrop,
        ease: config.ease,
      });
  
      tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
  
      // Bring rest forward
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        if (!el) return;
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            opacity: 1,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${i * 0.1}`
        );
      });
  
      const backSlot = makeSlot(
        refs.length - 1,
        cardDistance,
        verticalDistance,
        refs.length
      );
  
      tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      tl.call(() => {
        if (elFront) gsap.set(elFront, { zIndex: backSlot.zIndex });
      }, undefined, "return");
  
      tl.set(elFront, { x: backSlot.x, z: backSlot.z, opacity: 1 }, "return");
      tl.to(
        elFront,
        {
          y: backSlot.y,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return"
      );
  
      tl.call(() => {
        order.current = [...rest, front];
      });
    };
  
    // Kickstart regular swap after small delay to allow entrance animation
    setTimeout(() => {
      swap();
      intervalRef.current = window.setInterval(swap, delay);
    }, refs.length * 200 + 300); // Wait for initial animation to finish
  
    // Pause on hover logic
    if (pauseOnHover && container.current) {
      const node = container.current;
  
      const pause = () => {
        tlRef.current?.pause();
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
  
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
  
      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);
   

  const rendered = childArr.map((child, i) => {
    if (
      isValidElement(child) &&
      typeof child.type === "object" &&
      child.type !== null &&
      "displayName" in (child.type as any) &&
      (child.type as any).displayName === "Card"
    ) {
      const typedChild = child as ReactElement<any>;
      return cloneElement(typedChild, {
        key: i,
        ref: refs[i],
        style: { width, height, ...(typedChild.props.style ?? {}) },
        onClick: (e: React.MouseEvent<HTMLDivElement>) => {
          if (
            isValidElement(typedChild) &&
            (typedChild.props as React.HTMLAttributes<HTMLDivElement>)?.onClick
          ) {
            (typedChild.props as React.HTMLAttributes<HTMLDivElement>).onClick!(e);
          }
          onCardClick?.(i);
        },
      });
    } else if (isValidElement(child)) {
      const typedChild = child as ReactElement<any>;
      return cloneElement(typedChild, {
        key: i,
        ref: refs[i],
        style: { width, height, ...(typedChild.props.style ?? {}) },
        onClick: (e: React.MouseEvent<HTMLDivElement>) => {
          (typedChild.props as React.HTMLAttributes<HTMLDivElement>).onClick?.(e);
          onCardClick?.(i);
        },
      });
    } else {
      return child;
    }
  });

  return (
    <div
      ref={container}
      className="relative w-full h-full flex items-center justify-center [perspective:1000px] overflow-visible"
      style={{ width, height }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;