import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import createPlaceholderImg from "../utils/create-placeholder-img";
import PlaceholderImage from "./PlaceholderImage";
import "./ProjectCard.css";
import { Project } from "../data/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = (project: ProjectCardProps) => {
  return (
    <Card className="card" sx={{ maxWidth: 345 }}>
      <PlaceholderImage name={project.project.name} />
      <CardContent className="card">
        <Typography gutterBottom variant="h5" component="div">
          {project.project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
