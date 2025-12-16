import { Button } from "@/components/ui/button";
import { BriefcaseBusinessIcon, DownloadIcon, ScanEyeIcon } from "lucide-react";
import Link from "next/link";
import ProfileDetails from "./profile-details";
// import TargetCursor from "@/features/common/components/react-bits/target-cursor";

const HomeContent = () => {
  return (
    <div className="min-h-[calc(100vh-132px)] flex flex-col  w-full justify-center items-center relative z-1">
      {/* <TargetCursor spinDuration={2} parallaxOn={true} /> */}
      <ProfileDetails />
      <div className="text-center mt-8">
        <div className="inline-flex flex-wrap justify-center items-center text-foreground/60 text-4xl sm:text-6xl md:text-7xl">
          <h1>Crafting Pix</h1>
          <ScanEyeIcon
            strokeWidth={1.2}
            size={64}
            className="text-blue-500 w-10 h-10 sm:w-16 sm:h-16"
          />
          <h1>l</h1>
        </div>
        <h1 className="text-foreground text-4xl sm:text-6xl md:text-7xl">
          Perfect Frontends
        </h1>
      </div>
      <p className="text-center text-md sm:text-lg mt-4 text-foreground/50">
        Frontend engineer focused on crafting fast, reliable, and user-centric
        web applications.
      </p>

      <div className="flex item-center justify-center gap-4 mt-12 flex-wrap">
        <Link className="flex-1 w-full sm:w-max sm:flex-none" href="/projects">
          <Button
            size="lg"
            className="w-full h-10 text-base bg-blue-500 rounded-xl hover:bg-blue-600 cursor-target"
          >
            <BriefcaseBusinessIcon />
            View Projects
          </Button>
        </Link>
        <Link
          className="flex-1 sm:flex-none w-full sm:w-max cursor-target"
          href="/Meghanath_Shetty_Resume.pdf"
          download
        >
          <Button size="lg" className="h-10 text-base rounded-xl w-full">
            <DownloadIcon />
            Download Resume
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeContent;
