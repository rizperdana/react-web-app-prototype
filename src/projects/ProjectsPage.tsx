import React from "react";
import { PROJECTS } from './MockProjects';

function ProjectsPage () {
  return (
    <>
      <h1>Project Page</h1>
      <pre>
        {JSON.stringify(PROJECTS, null, ' ')}
      </pre>
    </>
  )
}

export default ProjectsPage;
