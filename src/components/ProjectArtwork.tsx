import Image from "next/image";

const projectScreenshots = {
  muzak: {
    src: "/images/pagine-siti/Screenshot%202026-09-26%20121413.png",
    alt: "Anteprima della homepage di MUZAK Glam Eventi",
  },
  preluded: {
    src: "/images/pagine-siti/Screenshot%202026-09-26%20121440.png",
    alt: "Anteprima della homepage di Preluded",
  },
  offly: {
    src: "/images/offly/Screenshot%202026-09-26%20122628.png",
    alt: "Anteprima della homepage di Offly, progetto No Phone Zone",
  },
} as const;

export default function ProjectArtwork({ variant }: { variant: keyof typeof projectScreenshots }) {
  const screenshot = projectScreenshots[variant];

  return (
    <Image
      className="project-screenshot"
      src={screenshot.src}
      alt={screenshot.alt}
      fill
      sizes="(max-width: 720px) 100vw, (max-width: 1000px) 90vw, 48vw"
    />
  );
}
