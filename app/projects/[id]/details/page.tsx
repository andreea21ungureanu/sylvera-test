import { Table } from "@/components/Table/Table";
import { TableHeader } from "@/components/TableHeader";
import { capilatiseFirstLetter } from "@/lib/capitaliseFirstLetter";
import { getProjectDetails, getTableDetails } from "@/lib/getAllProjects";

export default async function Page({ params }: { params: { id: string } }) {
  const projectDetails = await getProjectDetails(params.id);
  const tableDetails = await getTableDetails(projectDetails);

  if (!tableDetails.length) throw Error("No records on this page");

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <TableHeader
        description={`A list of all the details related to project ${capilatiseFirstLetter(
          params.id
        )}`}
        title="Entries table"
      />
      <Table tableDetails={tableDetails} />
    </div>
  );
}
