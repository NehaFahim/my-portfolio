import React from 'react';

interface Project {
  image: string;
  title: string;
  description: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-xl border-solid  border-blue-300 bg-slate-50 hover:shadow-2xl hover:scale-105 transition transform duration-300 ">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4 hover:shadow-2xl ">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="mt-2">{project.description}</p>

<a href={project.link} target="/link"  className="bg-blue-500 text-white px-4 py-2 mt-10 flex items-end justify-center rounded-lg hover:bg-cyan-400">
  <button>View Project</button>
</a>
        
      </div>
    </div>
  );
};

export default ProjectCard;



