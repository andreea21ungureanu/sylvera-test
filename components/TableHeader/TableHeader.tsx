import React from "react";

type TableHeaderProps = {
  title: string;
  description: string;
  projectNumbers: number;
};

export const TableHeader: React.FC<TableHeaderProps> = ({
  title,
  description,
  projectNumbers,
}) => {
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
