import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Card = ({
  title,
  desc,
  imgUrl,
  href = "",
  pills = "NextJs, Tailwind Css, Redux, CSS, asdas, asd,asd,asd,asd,asd",
}: {
  title: string;
  desc: string;
  imgUrl: string;
  href: string;
  pills?: string;
}) => {
  const splitPills = pills.split(",");
  return (
    <div className="sm:max-w-[246px] w-full cursor-pointer rounded-2xl overflow-hidden hover:scale-[1.01] dark:bg-blue-950/40  bg-gray-100  drop-shadow-lg">
      <Link href={href} target="_blank">
        <div className="w-full h-full flex flex-col justify-between">
          <Image
            src={imgUrl}
            height={300}
            width={150}
            className="w-full! h-full!"
            alt={title}
          />
          <div className="px-2  pb-5">
            <h2 className="text-md mt-4">{title}</h2>
            <p
              className="text-muted-foreground text-xs pt-1 text-wrap text-ellipsis line-clamp-3"
              title="asd"
            >
              {desc}
            </p>
            <div className="flex gap-1 flex-wrap mt-2">
              {splitPills.slice(0, 2).map((item) => {
                return (
                  <Badge
                    className="text-[10px] font-normal bg-foreground/80"
                    key={item}
                    title={item}
                  >
                    <p className="max-w-12 truncate">{item}</p>
                  </Badge>
                );
              })}
              {splitPills.length > 3 ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge className="text-[10px] font-normal bg-foreground/80">
                      {" "}
                      <p className="max-w-12 truncate">
                        +{splitPills.slice(2, splitPills.length).length}
                      </p>
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[120px]">
                    {splitPills.slice(2, splitPills.length).join(", ")}
                  </TooltipContent>
                </Tooltip>
              ) : null}
            </div>
            <Button className="w-full h-8 mt-4 text-base bg-blue-500  hover:bg-blue-600 cursor-target">
              View Project
              <ExternalLinkIcon />
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
