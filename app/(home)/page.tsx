import MainWrapper from "@/features/common/components/main-content-wrapper";
import Image from "next/image";

export default function Home() {
  return (
    <MainWrapper>
      <div className="min-h-[calc(100vh-132px)] flex column w-full justify-center items-center">
        <div className="text-center">
          <h1 className="text-foreground/60 text-5xl sm:text-6xl md:text-7xl">
            Turning Ideas
          </h1>
          <h1 className="text-foreground  text-5xl sm:text-6xl md:text-7xl">
            Into Interfaces
          </h1>
          <p className="text-lg mt-4 text-foreground/50">
            Frontend engineer focused on crafting fast, reliable, and
            user-centric web applications.
          </p>
        </div>
      </div>
      <div id="skills" className="flex min-h-screen">
        Skills
      </div>
    </MainWrapper>
  );
}
