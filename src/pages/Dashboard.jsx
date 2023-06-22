import React from "react";
import Topbar from "../layouts/Topbar";
import DashboardStatsGrid from "../layouts/DashboardStatsGrid";
import SalesChart from "../layouts/SalesChart";
import RecentOrders from "../layouts/RecentOrders";

const Dashboard = () => {
  return (
    <>
      <Topbar />
      <div className="flex flex-col gap-4">
        <DashboardStatsGrid />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
          <SalesChart />
          <RecentOrders />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
