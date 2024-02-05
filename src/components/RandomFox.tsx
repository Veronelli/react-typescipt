import { useEffect, useRef, useState } from "react";
type TProps = {
  image: string;
};

export const RandomFox = ({ image }: TProps): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [src, setSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );
  useEffect(() => {
    const observable = new IntersectionObserver((entries) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setSrc(image);
        }
      });
    });
    if (node.current) observable.observe(node.current);
  }, []);
  return (
    <>
      <img
        ref={node}
        src={src}
        alt="Random fox"
        className="w-96 h-64 bg-cover object-cover mb-2 bg-gray-300"
      />
    </>
  );
};
