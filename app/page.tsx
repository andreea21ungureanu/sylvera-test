import { ProjectsList } from "@/components/ProjectsList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <header className="flex justify-center	items-end w-full h-64 relative">
        <Image
          src="/Banner-test.png"
          alt={"Banner image of an abtract map"}
          fill
          className="object-cover"
        />
        <h1 className="z-10 text-7xl text-white">Projects</h1>
      </header>
      <ProjectsList />
    </main>
  );
}
