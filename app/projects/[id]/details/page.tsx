import { Table } from "@/components/Table/Table";
import { TableHeader } from "@/components/TableHeader";
import { capilatiseFirstLetter } from "@/lib/capitaliseFirstLetter";
import { getProjectDetails } from "@/lib/getAllProjects";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const { projectNumbers } = await getProjectDetails(params.id);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Link
        className="bg-[#F62960] text-white py-2 px-4 rounded hover:bg-[#813146] z-11 relative"
        href="/projects"
      >
        Return to projects
      </Link>

      <TableHeader
        description={`A list of all the details related to project ${capilatiseFirstLetter(
          params.id
        )}. Top 10 entries are displayed`}
        title="Entries table"
        projectNumbers={projectNumbers}
      />
      <Table projectName={params.id} />
    </div>
  );
}
