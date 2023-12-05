import { getProjectDetails } from "@/lib/getAllProjects";

type TableHeaderProps = {
  title: string;
  description: string;
  projectName: string;
};

export const TableHeader = async ({
  description,
  title,
  projectName,
}: TableHeaderProps) => {
  const { projectNumbers } = await getProjectDetails(projectName);
  if (projectNumbers === 0)
    return (
      <div className="flex mt-8 justify-center" aria-label="Error">
        {`There are ${projectNumbers} entries on this page`}
      </div>
    );

  return (
    <div className="sm:flex sm:items-center mt-10" aria-label="Table Header">
      <div className="sm:flex-auto">
        <h1 className="text-base font-semibold leading-6 ">{`${title} contains ${projectNumbers} entires.`}</h1>
        <p className="mt-2 text-sm ">{description}</p>
      </div>
    </div>
  );
};
