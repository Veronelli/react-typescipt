import { useRef, useState } from "react";
type TProps = {
  image: string;
};

export const RandomFox = ({ image }: TProps): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  return (
    <>
      <img
        ref={node}
        src={image}
        alt="Random fox"
        className="w-96 h-64 bg-cover object-cover mb-2"
      />
    </>
  );
};
