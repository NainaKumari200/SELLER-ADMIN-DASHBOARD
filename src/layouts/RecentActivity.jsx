import React from "react";

const Box = () => {
    const recent = [
    { time: "08:25", color:"#4F46E5",activity: "Product name is Delivered" },
    { time: "08:00", color:"#DC2626",activity: "Product name is Shipped" },
    { time: "03:44", color:"#9333EA",activity: "Product name is Shipped" },
    { time: "01:17", color:"#16A34A",activity: "Product name is Shipped" },
    { time: "00:05", color:"#EAB308",activity: "Product name is Shipped" },
    { time: "00:13", color:"#16A34A",activity: "Product name is Shipped" },
    { time: "01:11", color:"#9333EA",activity: "Product name is Shipped" },
    { time: "17:33", color:"#DC2626",activity: "Product name is Shipped" },
    { time: "02:45", color:"#16A34A",activity: "Product name is Shipped" },
    { time: "12:34", color:"#9333EA",activity: "Product name is Shipped" },
    { time: "11:54", color:"#DC2626",activity: "Product name is Shipped" },
    { time: "09:09", color:"#16A34A",activity: "Product name is Shipped" }
  ];

  return (
    <>
    <div className="p-4 mr-4 bg-white rounded-md shadow-lg text-sm">
        <strong>Recent Activity</strong>
        {recent.map((d, index) => (
        <div className="flex text-xs pt-2 items-center">
            <strong className="pr-3">{d.time}</strong>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14" cy="14" r="11" stroke={d.color} stroke-width="5"/>
</svg>
            <p className="pl-3">{d.activity}</p>      
        </div>
))}
    </div>
    </>
  );
};

export default Box;
