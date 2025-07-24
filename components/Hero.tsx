import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "./../app/Images/hero-bg_50.jpg";

const Hero = () => {
  return (
    <section
      id="dark-background-trigger"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage.src}
          alt="Aura Digital Labs Technology"
          className="w-[100vw] h-[100%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Transforming Digital Dreams
            <span className="block bg-gradient-to-r from-primary-light to-primary bg-clip-text text-[#5492f7]">
              into Powerful Reality
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl leading-relaxed">
            Aura Digital Labs transforms your ideas into cutting-edge digital
            solutions. From AI and machine learning to robotics and software
            development, we build the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Button
              variant="default"
              size="lg"
              className="group text-lg px-8 py-4"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="group text-lg px-8 py-4 cursor-pointer"
            >
              <Play className="mr-2 h-5 w-5 cursor-pointer" />
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
