import { useEffect, useRef, useState } from "react";
type TProps = {
  image: string;
};

export const RandomFox = ({ image }: TProps): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [src, setSrc] = useState("");
  useEffect(() => {
    const observable = new IntersectionObserver((entries) => {
      entries.forEach((entry:IntersectionObserverEntry) => {
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
        className="w-96 h-64 bg-cover object-cover mb-2"
      />
    </>
  );
};
