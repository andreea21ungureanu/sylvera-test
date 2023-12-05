import React, { useEffect, useState } from "react";
import { getProjectDetails } from "@/lib/getAllProjects";

type TableHeaderProps = {
  title: string;
  description: string;
  projectName: string;
};

export const TableHeader: React.FC<TableHeaderProps> = ({
  title,
  description,
  projectName,
}) => {
  const [projectNumbers, setProjectNumbers] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { projectNumbers } = await getProjectDetails(projectName);
        setProjectNumbers(projectNumbers);
      } catch (error) {
        console.error("Error fetching project details", error);
        setProjectNumbers(0);
      }
    };

    fetchData();
  }, [projectName]);

  if (projectNumbers === null) {
    return <div>Loading...</div>;
  }

  if (projectNumbers === 0) {
    return (
      <div className="flex mt-8 justify-center" aria-label="Error">
        {`There are ${projectNumbers} entries on this page`}
      </div>
    );
  }

  return (
    <div className="sm:flex sm:items-center mt-10" aria-label="Table Header">
      <div className="sm:flex-auto">
        <h1 className="text-base font-semibold leading-6">{`${title} contains ${projectNumbers} entries.`}</h1>
        <p className="mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
};
