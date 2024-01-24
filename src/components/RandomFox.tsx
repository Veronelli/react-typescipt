import { useState } from "react";
type TProps = {
  image: string;
};
const RANDOM_IMAGE_NUMBER =()=> Math.floor(Math.random() * 123) + 1;

export const RandomFox = ({ image }: TProps): JSX.Element => {
  const [images, setImages] = useState<string[]>([
    `${image}${RANDOM_IMAGE_NUMBER()}.jpg`,
    `${image}${RANDOM_IMAGE_NUMBER()}.jpg`,
    `${image}${RANDOM_IMAGE_NUMBER()}.jpg`,
    `${image}${RANDOM_IMAGE_NUMBER()}.jpg`,
  ]);
  return (
    <>
      {images.map((image, index) => (
        <img key={index} src={image} alt="Random fox" />
      ))}
    </>
  );
};
