"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Card, CardHeader } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  location: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: readonly string[];
  technologies?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  location,
  subtitle,
  href,
  badges,
  period,
  description,
  technologies,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Mengatur toggle ekspansi tanpa memeriksa deskripsi
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="flex cursor-pointer" onClick={handleClick}>
      <Link href={href || "#"} className="block flex-none">
        <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </Link>

      <div className="flex-grow ml-4 items-center flex-col group">
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
              {title}
              <ChevronRightIcon
                className={cn(
                  "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                  isExpanded ? "rotate-90" : "rotate-0"
                )}
              />
            </h3>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              {period}
            </div>
          </div>
          {location && (
            <div className="font-sans text-xs italic">{location}</div>
          )}
          {subtitle && <div className="font-sans text-xs ">{subtitle}</div>}
        </CardHeader>

        <div>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
              display: isExpanded ? "block" : "none",
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-2 text-xs sm:text-sm"
          >
            {description && (
              <ul className="pl-4 list-disc">
                {description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            )}
            {technologies && (
              <div className="mt-2">
                <div className="font-semibold">Technologies:</div>
                <div className="flex flex-wrap gap-1">
                  {technologies.split(" ").map((tech) => (
                    <span key={tech} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </Card>
  );
};
