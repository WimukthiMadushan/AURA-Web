'use client';
import React from 'react';
import CardSwap, { Card } from './CardSwap';
import {
  ArrowRight,
  Sparkles,
  Code2,
  Brain,
  Cpu,
  Wifi,
  Cloud,
  CircuitBoard,
} from 'lucide-react';
import { useTheme } from './../app/Context/ThemeContext';

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={`min-h-screen relative ${
      theme === 'dark'
      ? 'bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-gray-100'
      : 'bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] text-gray-800'
      }`}
    >
      <button
    onClick={toggleTheme}
    className="fixed top-4 right-4 z-50 px-3 py-1 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition shadow-md"
  >
    {theme === 'light' ? '🌙 Night Mode' : '☀️ Light Mode'}
  </button>

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
                We specialize in turning your digital vision into reality through innovative solutions, cutting-edge technology, and
                expert implementation. Let us guide your journey from concept to success.
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

          {/* Card Swap Animation */}
          <div className="relative flex items-center justify-center mt-[10rem]">
            <CardSwap
              width={460}
              height={340}
              cardDistance={40}
              verticalDistance={50}
              delay={4000}
              pauseOnHover={true}
              easing="elastic"
            >
              {/* Software Development */}
              <Card className="p-6 text-center space-y-3 rounded-xl shadow-lg backdrop-blur-md bg-white/70 border border-gray-200 transition-transform duration-500 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Software Development</h3>
                <p className="text-sm text-gray-600">Custom applications that bring ideas to life with robust architecture and modern stacks.</p>
              </Card>

              {/* Artificial Intelligence */}
              <Card className="p-6 text-center space-y-3 rounded-xl shadow-lg backdrop-blur-md bg-white/70 border border-gray-200 transition-transform duration-500 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Artificial Intelligence</h3>
                <p className="text-sm text-gray-600">Empowering systems to think, learn, and adapt intelligently for real-world impact.</p>
              </Card>

              {/* Machine Learning */}
              <Card className="p-6 text-center space-y-3 rounded-xl shadow-lg backdrop-blur-md bg-white/70 border border-gray-200 transition-transform duration-500 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Machine Learning</h3>
                <p className="text-sm text-gray-600">Data-driven models that predict, automate, and optimize complex decisions.</p>
              </Card>

              {/* IoT */}
              <Card className="p-6 text-center space-y-3 rounded-xl shadow-lg backdrop-blur-md bg-white/70 border border-gray-200 transition-transform duration-500 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">IoT Solutions</h3>
                <p className="text-sm text-gray-600">Smart devices connected and managed seamlessly to enhance everyday operations.</p>
              </Card>

              {/* Electronics */}
              <Card className="p-6 text-center space-y-3 rounded-xl shadow-lg backdrop-blur-md bg-white/70 border border-gray-200 transition-transform duration-500 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CircuitBoard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Electronics Design</h3>
                <p className="text-sm text-gray-600">Prototyping and building electronics systems tailored for performance and innovation.</p>
              </Card>

              {/* DevOps */}
              <Card className="p-6 text-center space-y-3 rounded-xl shadow-lg backdrop-blur-md bg-white/70 border border-gray-200 transition-transform duration-500 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-700 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">DevOps & Cloud</h3>
                <p className="text-sm text-gray-600">CI/CD pipelines and scalable cloud architecture for seamless development and delivery.</p>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
