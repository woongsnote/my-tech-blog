import React from "react";
import Layout from "../components/Layout";
import ProjectItem from "../components/projects/ProjectItem";

export default function Projects() {
  return (
    <Layout>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
          </div>
        </div>
      </div>
    </Layout>
  );
}
