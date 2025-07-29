import React from "react";

const Solutions = () => {
  return (
    <div className="space-y-8 p-8 bg-gray-50 pt-[8rem]">
      <div className="space-y-6">
        {/* Decorative Lines */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="h-1 w-14 bg-gradient-to-r from-gray-800 to-blue-600 rounded-full"></div>
          <div className="h-0.5 w-6 bg-blue-600 rounded-full"></div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800">
          Our <span className="text-blue-600">Solutions</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600">
          We are a leading technology company dedicated to delivering innovative
          solutions that transform businesses and empower organizations to
          achieve their goals. With over a decade of experience, we combine
          cutting-edge technology with deep industry expertise.
        </p>
      </div>
    </div>
  );
};

export default Solutions;
