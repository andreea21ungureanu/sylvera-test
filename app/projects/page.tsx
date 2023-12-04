import { ProjectsList } from "@/components/ProjectsList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <ProjectsList />
    </main>
  );
}
