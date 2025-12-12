import MainWrapper from "@/features/common/components/main-content-wrapper";
import HomeContent from "@/features/home/components/home";

export default function Home() {
  return (
    <MainWrapper>
      <HomeContent />
      <div id="skills" className="flex min-h-screen mt-32">
        Skills
      </div>
    </MainWrapper>
  );
}
