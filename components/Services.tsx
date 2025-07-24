import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Brain,
  Bot,
  Zap,
  Server,
  Cpu,
  Cloud,
  Shield,
} from "lucide-react";
import softwareDevImage from "./../app/Images/software-dev_50.jpg";
import mlAiImage from "./../app/Images/ml-ai_50.jpg";
import roboticsImage from "./../app/Images/robotics_50.jpg";
import electronicsImage from "./../app/Images/electronics_50.jpg";
import devopsImage from "./../app/Images/devops_50.jpg";
import cloudImage from "./../app/Images/cloud.jpg";
//import cybersecurityImage from "./../app/Images/cybersecurity.jpg";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom web and mobile applications built with cutting-edge technologies and best practices.",
    image: softwareDevImage,
  },
  {
    icon: Brain,
    title: "Machine Learning & AI",
    description:
      "Intelligent solutions that learn, adapt, and transform your business operations.",
    image: mlAiImage,
  },
  {
    icon: Bot,
    title: "Robotics",
    description:
      "Advanced robotic systems for automation, manufacturing, and innovative applications.",
    image: roboticsImage,
  },
  {
    icon: Cpu,
    title: "Electronics",
    description:
      "Electronic design and embedded systems for IoT, automotive, and industrial applications.",
    image: electronicsImage,
  },
  {
    icon: Server,
    title: "DevOps",
    description:
      "Streamlined deployment pipelines, cloud infrastructure, and continuous integration.",
    image: devopsImage,
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Scalable, secure cloud solutions tailored for performance, flexibility, and global reach.",
    image: cloudImage,
  },
  //{
  //  icon: Shield,
  //  title: "Cybersecurity",
  //  description:
  //    "Robust security strategies to protect your digital assets from threats and vulnerabilities.",
  //  image: cybersecurityImage,
  //},
];

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver comprehensive digital solutions across multiple
            technology domains, bringing innovation to every aspect of your
            business.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {services.map((service, index) => {
            const gridSpans = [
              "col-span-2 row-span-2", // Software Development
              "col-span-1 row-span-2", // ML & AI
              "col-span-1 row-span-1", // Robotics
              "col-span-2 row-span-1", // Electronics
              "col-span-1 row-span-1", // DevOps
              "col-span-1 row-span-1", // Cloud Computing
              "col-span-1 row-span-1", // Cybersecurity
            ];

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] ${gridSpans[index]}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image.src}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-foreground/90"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative h-full p-6 flex flex-col justify-end text-white">
                  <div className="mb-4">
                    <service.icon className="h-8 w-8 lg:h-12 lg:w-12 text-primary-light drop-shadow-lg" />
                  </div>
                  <h3 className="text-lg lg:text-2xl font-bold mb-2 drop-shadow-lg">
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm lg:text-base text-white/90 leading-relaxed drop-shadow ${
                      index < 2 ? "block" : "hidden lg:block"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
