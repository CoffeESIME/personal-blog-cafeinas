import Resume from "@/components/Cards/ResumeCard";
import { StatusWork } from "@/components/StatusWork/StatusWork";

export default function Home() {
  const isAvailable = true
  return (
    <main className="mt-16 sm:mt-32 relative px-4 sm:px-8 lg:px-12">
      <div className="max-w-xl"> <h1 className="sr-only">Fabian Romero</h1>
        <span className="text-2xl font-bold text-neutral-900 dark:text-white">
          Fabian Romero
        </span>
        <br></br>Software Engineer from Mexico
        <br></br>
        Working on 3PillarGlobal and as Freelance.
        <StatusWork isAvailable={isAvailable}></StatusWork>
      </div>
      <div className="mt-24 md:mt-28">
        <div className="grid grid-cols-6 gap-4 mb-2 text-left grid-rows-12 sm:grid-rows-7 md:grid-rows-6 lg:grid-rows-2 ">
          <Resume></Resume></div>   </div>
    </main>
  );
}
