import React from "react";

const Stat = () => {
  return (
    <div className="mb-20 mx-auto">
      <div className="rounded-2xl border border-transparent bg-white/20 dark:bg-gray-800/30 backdrop-blur-md p-1">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 overflow-hidden text-center shadow-xl">
          {[
            { number: "100+", label: "Projects Completed", icon: "🚀" },
            { number: "10+", label: "Awards Won", icon: "🏆" },
            { number: "50+", label: "Happy Clients", icon: "😊" },
            { number: "24/7", label: "Support", icon: "🛠️" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 group hover:bg-gradient-to-br hover:from-gray-100 hover:to-white dark:hover:from-gray-800 dark:hover:to-gray-900 transition-all duration-300"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h4 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600">
                {stat.number}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stat;
