import Image from "next/image";
import { technologies } from "./technologies";

function TechnologyItems() {
  return (
    <div className="flex shrink-0 items-center gap-3 pr-3">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="flex h-11 shrink-0 items-center gap-2 rounded-full border border-gray-200 bg-white px-4 text-sm font-medium text-gray-800 shadow-sm"
        >
          <Image
            src={technology.icon}
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
          />
          <span>{technology.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function TechnologyMarquee() {
  return (
    <section
      aria-label="Technologies utilisées"
      className="relative w-full overflow-hidden"
    >
      <div className="technology-marquee flex w-max">
        <TechnologyItems />
        <div aria-hidden="true" className="shrink-0">
          <TechnologyItems />
        </div>
      </div>
    </section>
  );
}
