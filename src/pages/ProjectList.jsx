import React from "react";  
import useStore from "../store";

export default function ProjectList() {
  const projectOrder = useStore((state) => state.projectOrder);
  const projectsMap = useStore((state) => state.projects);
  const addProject = useStore((state) => state.addProject);

  const projects = projectOrder.map((id) => projectsMap[id]);

  return (
    <div>
      <button
        onClick={() =>
          addProject({
            id: Date.now().toString(),
            name: "New Project",
            columns: [],
          })
        }
      >
        Add Project
      </button>

      <ul>
        {projects.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}