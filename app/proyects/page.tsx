import ProjectsGrid from "@/components/Projects/ProjectsGrid";
import TechCategories from "@/components/TechStack/TechCategories";

function ProjectsPage() {
  return (
    <div className="mt-4 mx-4">
      <section id="skills" className="my-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Skills
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Throughout my career, I have developed a strong proficiency in a
          diverse set of technologies and tools that enable me to deliver
          high-quality software solutions. Below is a selection of the key
          skills that I bring to every project I work on:
        </p>
        <TechCategories />
      </section>
      <section className="my-16">
        <ProjectsGrid />
      </section>
    </div>
  );
}

export default ProjectsPage;
