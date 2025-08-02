
import React from "react";

const projects = [
  { name: "Website Redesign", status: "In Progress", deadline: "2025-08-10" },
  { name: "Mobile App", status: "Completed", deadline: "2025-07-25" },
  { name: "SEO Audit", status: "Pending", deadline: "2025-08-15" },
  { id: 4, name: "NEW Brand Website",  status: "Pending",     deadline: "2025-09-05" },
  { id: 5, name: "Social Media Website",  status: "Completed",   deadline: "2025-07-30" },
  { id: 6, name: "CRM Integration",   status: "Pending",     deadline: "2025-10-01" },
];

export default function Projects() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4">Project Name</th>
              <th className="p-4">Status</th>
              <th className="p-4">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="border-t">
                <td className="p-4">{project.name}</td>
                <td className="p-4">{project.status}</td>
                <td className="p-4">{project.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
