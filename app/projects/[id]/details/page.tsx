import { Table } from "@/components/Table/Table";
import { TableHeader } from "@/components/TableHeader";

export default function Page() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <TableHeader
        description=" A list of all the details related to project xxxxxx"
        title="Entries table"
      />
      <Table />
    </div>
  );
}
