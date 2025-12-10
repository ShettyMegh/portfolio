import { Button } from "@/components/ui/button";
import { BriefcaseBusinessIcon, DownloadIcon, ScanEyeIcon } from "lucide-react";
import Link from "next/link";
import ProfileDetails from "./profile-details";

const HomeContent = () => {
  return (
    <div className="min-h-[calc(100vh-132px)] flex flex-col  w-full justify-center items-center">
      <ProfileDetails />
      <div className="text-center mt-6">
        <div className="flex justify-center items-center text-foreground/60 text-5xl sm:text-6xl md:text-7xl">
          <h1>Crafting Pix</h1>
          <ScanEyeIcon strokeWidth={1.2} size={64} className="text-blue-500" />
          <h1>l</h1>
        </div>
        <h1 className="text-foreground text-5xl sm:text-6xl md:text-7xl">
          Perfect Frontends
        </h1>
      </div>
      <p className="text-center text-md sm:text-lg mt-4 text-foreground/50">
        Frontend engineer focused on crafting fast, reliable, and user-centric
        web applications.
      </p>

      <div className="flex item-center justify-center gap-4 mt-12">
        <Link href="/projects">
          <Button
            size="lg"
            className="h-10 text-base bg-blue-500 rounded-xl hover:bg-blue-600"
          >
            <BriefcaseBusinessIcon />
            View Projects
          </Button>
        </Link>
        <Button size="lg" className="h-10 text-base rounded-xl">
          <DownloadIcon />
          Download Resume
        </Button>
      </div>
    </div>
  );
};

export default HomeContent;
