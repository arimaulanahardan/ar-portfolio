import React from "react";
import { Instagram, Linkedin, MessageCircleMore } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardHeader } from "./ui/Card";
import Markdown from "react-markdown";

interface ReferenceCardProps {
  description: string;
  image: string;
  name: string;
  position: string;
  instagram?: string;
  whatsapp?: string;
  linkedin?: string;
}
const ReferenceCard = ({
  description,
  image,
  name,
  position,
  instagram,
  whatsapp,
  linkedin,
}: ReferenceCardProps) => {
  const svgPath =
    "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

  return (
    <Card className="bg-brown-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100 p-2 flex flex-col h-full">
    <div className="flex-grow">
      <Markdown className="text-xs text-justify italic w-full">
          {description}
        </Markdown>
      </div>

      <CardHeader className="space-y-4 mt-4">
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              className="w-4 h-4 text-[#FDB241]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d={svgPath} />
            </svg>
          ))}
        </div>

        <div className="flex space-x-3 animate-bounce w-4 cursor-pointer">
          <a href={instagram}>
            <Instagram />
          </a>
          <a href={whatsapp}>
            <MessageCircleMore />
          </a>
          <a href={linkedin}>
            <Linkedin />
          </a>
        </div>

        <div className="flex items-center">
          <Avatar>
            <AvatarImage
              src={image}
              alt={name}
              className="w-16 object-contain"
            />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-2">
            <p className="text-xs font-bold">{name}</p>
            <p className="text-xs italic">{position}</p>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ReferenceCard;
