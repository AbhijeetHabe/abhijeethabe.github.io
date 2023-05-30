import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, url, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
    >
      <a href={url} target="_blank">
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      </a>
      <h1> {name} </h1>

    </div>
  );
}

export default ProjectItem;
