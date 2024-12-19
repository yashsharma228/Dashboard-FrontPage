import React from "react";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";
import SalesDistribution from "./cards/SalesDistribution";

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        <div className="p-6 bg-gray-50">
          <SalesDistribution />

          <h2 className="text-xl font-semibold">Dashboard Content</h2>
        </div>
      </div>
    </div>
  );
};

export default App;

