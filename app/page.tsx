import MainWrapper from "@/features/common/components/main-content-wrapper";
import HomeContent from "@/features/home/components/home";
import Skills from "@/features/home/components/skills";

export default function Home() {
  return (
    <MainWrapper>
      <HomeContent />
      <Skills />
    </MainWrapper>
  );
}
