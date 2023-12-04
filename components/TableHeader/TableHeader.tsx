type TableHeaderProps = {
  title: string;
  description: string;
};

export const TableHeader = ({ description, title }: TableHeaderProps) => {
  return (
    <div className="sm:flex sm:items-center mt-8">
      <div className="sm:flex-auto">
        <h1 className="text-base font-semibold leading-6 ">{title}</h1>
        <p className="mt-2 text-sm ">{description}</p>
      </div>
    </div>
  );
};
