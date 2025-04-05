import Image from "next/image";

const partners = [
  { src: "/United_Nations.png", alt: "United Nations", width: 120, height: 60 },
  { src: "/Maskgroup.png", alt: "Kings College London", width: 63, height: 40 },
  { src: "/toronto.png", alt: "University of Toronto", width: 120, height: 60 },
  {
    src: "/London_school_of_economics_logo.png",
    alt: "London School of Economics",
    width: 120,
    height: 60,
  },
  { src: "/bocconi.png", alt: "Bocconi University", width: 120, height: 60 },
];

export default function Testimonials() {
  return (
    <div className="py-12 text-center">
      <p className="text-xl text-gray-700 mb-8">
        Loved by over 3 million Students and Academics across the world
      </p>

      <div className="flex flex-wrap justify-center items-center gap-10 px-6 max-w-5xl mx-auto">
        {partners.map((partner) => (
          <Image
            key={partner.alt}
            src={partner.src}
            alt={partner.alt}
            width={partner.width}
            height={partner.height}
          />
        ))}
      </div>
    </div>
  );
}
