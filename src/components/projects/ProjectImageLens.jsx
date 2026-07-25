import { useState } from "react";
import ProjectPlaceholder from "./ProjectPlaceholder.jsx";

export default function ProjectImageLens({
  src,
  alt,
  projectTitle,
  captureIndex = 1,
  className = "",
  frameClassName = "aspect-[16/10]"
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure
      className={`group relative ${frameClassName} overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] ${className}`}
    >
      <div
        tabIndex={0}
        className="flex h-full w-full items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-portfolio-softBlue"
        aria-label={alt}
      >
        {hasError ? (
          <ProjectPlaceholder
            title={projectTitle}
            captureLabel={`Captura 0${captureIndex}`}
          />
        ) : (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setHasError(true)}
            className="h-full w-full object-contain"
          />
        )}
      </div>
    </figure>
  );
}