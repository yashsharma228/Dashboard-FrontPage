import React from "react";

const SalesDistribution = () => {
  const metrics = [
    { label: "Total Sales", value: "$34,343.00" },
    { label: "By Website", value: "$4.5k (40%)" },
    { label: "By Mobile", value: "$2.8k (25%)" },
    { label: "By Market", value: "$2.2k (20%)" },
    { label: "By Agent", value: "$1.7k (15%)" },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Sales Distribution
      </h3>
      <p className="text-center text-gray-600 mb-6">
        Overview of platform-wide sales performance.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="relative bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-300"
          >
            <div className="absolute -top-2 -right-2 bg-blue-200 w-6 h-6 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 bg-purple-200 w-6 h-6 rounded-full animate-pulse"></div>
            <p className="font-extrabold text-xl text-gray-800">{metric.value}</p>
            <p className="text-sm text-gray-500 mt-1">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesDistribution;
