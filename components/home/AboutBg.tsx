import Image from "next/image";

function AboutBg() {
  return (
    <div className="absolute inset-0 z-0 opacity-95">
      <Image
        src="/images/about/skillsBg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}

export default AboutBg;
