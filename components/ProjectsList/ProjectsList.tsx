import { capilatiseFirstLetter } from "@/lib/capitaliseFirstLetter";
import { getAllProjects } from "@/lib/getAllProjects";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export async function ProjectsList() {
  const projects = await getAllProjects();
  return (
    <ul
      role="list of projects"
      className="min-w-[50%] divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl mt-8"
    >
      {projects.map((project) => (
        <li
          key={project}
          className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
        >
          <div className="flex min-w-0 gap-x-4">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              <Link href={`projects/${project}/details`}>
                <span className="absolute inset-x-0 -top-px bottom-0" />
                {capilatiseFirstLetter(project)}
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-x-4">
            <ChevronRightIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
