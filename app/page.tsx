import MainWrapper from "@/features/common/components/main-content-wrapper";
import HomeContent from "@/features/home/components/home";
import Skills from "@/features/home/components/skills";
import ProjectsContent from "@/features/projects/components/projects";

export default function Home() {
  return (
    <>
      <MainWrapper>
        <HomeContent />
        <Skills />
        <ProjectsContent />
      </MainWrapper>
    </>
  );
}
