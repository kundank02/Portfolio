import Image from "next/image";
import Link from "next/link";
import React from "react";
import carHub from "../public/assets/projects/carhub.png";
import youtube from "../public/assets/projects/youtube-clone.png";
import netflixImg from "../public/assets/projects/netflix.jpg";
import goldsgym from "../public/assets/projects/goldsgym.png";
import ProjectItem from "./ProjectItem";
import redpost from "../public/assets/projects/redpost.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="RedPost"
            backgroundImg={redpost}
            projectUrl="/redpost"
            tech="React JS"
          />
          <ProjectItem
            title="CarHub"
            backgroundImg={carHub}
            projectUrl="/carhub"
            tech="Next JS"
          />
          <ProjectItem
            title="Youtube Clone"
            backgroundImg={youtube}
            projectUrl="/youtube"
            tech="React JS"
          />

          <ProjectItem
            title="Golds Gym"
            backgroundImg={goldsgym}
            projectUrl="/goldsgym"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
