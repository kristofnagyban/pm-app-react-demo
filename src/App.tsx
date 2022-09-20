import { Button, CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import ProjectCard from "./components/ProjectCard";
import { Project } from "./data/project";

const projectsDb = [
  {
    id: 1,
    name: "projekt szuper",
    description: "nagyon j ó projekt",
    members: [
      { id: 1, name: "nagy jános", role: "vezető" },
      { id: 2, name: "nagy jános", role: "vezető" },
    ],
    links: [],
  },
  {
    id: 2,
    name: "projekt szuper",
    description: "nagyon j ó projekt",
    members: [
      { id: 1, name: "nagy jános", role: "vezető" },
      { id: 2, name: "nagy jános", role: "vezető" },
    ],
    links: [],
  },
  {
    id: 3,
    name: "projekt szuper",
    description: "nagyon j ó projekt",
    members: [
      { id: 1, name: "nagy jános", role: "vezető" },
      { id: 2, name: "nagy jános", role: "vezető" },
    ],
    links: [],
  },
  {
    id: 4,
    name: "projekt szuper",
    description: "nagyon j ó projekt",
    members: [
      { id: 1, name: "nagy jános", role: "vezető" },
      { id: 2, name: "nagy jános", role: "vezető" },
    ],
    links: [],
  },
  {
    id: 5,
    name: "projekt szuper",
    description: "nagyon j ó projekt",
    members: [
      { id: 1, name: "nagy jános", role: "vezető" },
      { id: 2, name: "nagy jános", role: "vezető" },
    ],
    links: [],
  }
];

function App() {
  const [projects, setProjects] = useState<Project[] | null>(null);


  const loadProjects = () => {
    setTimeout(() => setProjects(projectsDb), 5000);
  }

  useEffect(() => {loadProjects()}, []);

  return (
    <div className="App">
      <header>
        <h1>Starting project</h1>
      </header>
      <Button variant="contained">Új projekt</Button>
      <main>
      {!projects && (
        <div className="center-progress">
          <CircularProgress />
        </div>
      )}
      {projects && (
        <Grid className="muiGrid" container spacing={8}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Grid>
      )}
      </main>
    </div>
  );
}

export default App;
