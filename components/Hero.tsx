"use client";
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <div>
      {/* Light Gradient Orbs for Depth */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[60rem] h-[60rem] bg-gradient-to-tr from-[#a1c4fd] to-[#c2e9fb] rounded-full opacity-30 blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-[40rem] h-[40rem] bg-gradient-to-br from-[#d4fc79] to-[#96e6a1] rounded-full opacity-20 blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-[10rem] py-20">
        <div className="grid lg:grid-cols-2 gap-5 items-center min-h-[80vh]">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e0f2fe] text-[#0369a1] text-sm">
                <Sparkles className="w-4 h-4" />
                Aura Digital Labs
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Digital Dreams
                <br />
                Into Reality
              </h1>

              <p className="text-lg text-gray-600 max-w-lg">
                We specialize in turning your digital vision into reality
                through innovative solutions, cutting-edge technology, and
                expert implementation. Let us guide your journey from concept to
                success.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-[#3b82f6] text-white rounded-lg font-medium hover:bg-[#2563eb] transition-colors flex items-center gap-2">
                Try Demo
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
