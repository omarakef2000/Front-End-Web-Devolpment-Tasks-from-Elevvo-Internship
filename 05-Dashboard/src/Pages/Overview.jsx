
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale } from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale);

export default function Overview() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Earnings",
        data: [1200, 1900, 3000, 2500, 4000],
        backgroundColor: "#6366F1"
      }
    ]
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow p-4 rounded">Total Projects: 12</div>
        <div className="bg-white shadow p-4 rounded">Earnings: LE 12,400</div>
        <div className="bg-white shadow p-4 rounded">Tasks Due: 5</div>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Monthly Earnings</h2>
        <Bar data={data} />
      </div>
    </div>
  );
}
