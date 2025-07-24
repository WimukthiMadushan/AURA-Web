"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronDown,
} from "lucide-react";

const ContactUs = () => {
  return (
    <section className="py-30 bg-gradient-to-b from-white to-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          <span className="text-blue-600">Contact</span> Us
        </h2>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info + Socials */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Get in Touch
              </h3>
              <p className="text-gray-600">
                We'd love to hear from you. Whether you have a question about
                services, pricing, or anything else – our team is ready to help.
              </p>
            </div>

            <div className="space-y-4 text-gray-600">
              <div>
                <p className="font-medium text-gray-800">Address</p>
                <p>123 Innovation Drive, Tech Valley, California, USA</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Phone</p>
                <p>+1 (800) 123-4567</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Email</p>
                <p>support@yourcompany.com</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Working Hours</p>
                <p>Mon - Fri: 9am - 6pm (PST)</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="pt-4">
              <p className="font-medium text-gray-800 mb-2">Follow us</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <Facebook />
                </a>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <Twitter />
                </a>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <Linkedin />
                </a>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Email Form */}
          <Card className="p-8 border-0 shadow-xl bg-white/70 backdrop-blur-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input type="text" placeholder="Your Name" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input type="email" placeholder="you@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input type="text" placeholder="Subject" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  rows={5}
                  placeholder="Type your message..."
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does it take to get a response?",
                answer:
                  "We typically respond within 24 hours during working days.",
              },
              {
                question: "Can I book a free consultation?",
                answer:
                  "Absolutely! Just fill out the contact form and mention you'd like a consultation.",
              },
              {
                question: "Do you offer support after project delivery?",
                answer:
                  "Yes, we provide ongoing support and maintenance for all our clients.",
              },
              {
                question: "Which industries do you specialize in?",
                answer:
                  "We serve clients across tech, healthcare, finance, and education sectors.",
              },
            ].map((faq, i) => (
              <Card
                key={i}
                className="p-6 bg-white/80 border-0 shadow hover:shadow-lg transition duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start space-x-3">
                  <ChevronDown className="mt-1 text-blue-600" />
                  <div>
                    <h4 className="text-md font-semibold text-gray-800 mb-1">
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
