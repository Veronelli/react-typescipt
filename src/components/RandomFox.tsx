import { useState } from "react";
type TProps = {
  image: string;
};
const getRandomImageNumber = () => Math.floor(Math.random() * 123) + 1;
const getRandomID = () => Math.floor(Math.random() * 1000000) + 1;
type TImageItem = {
  id: number;
  url: string;
};

export const RandomFox = ({ image }: TProps): JSX.Element => {
  const [images, setImages] = useState<TImageItem[]>([
    { id: getRandomID(), url: `${image}${getRandomImageNumber()}.jpg` },
    { id: getRandomID(), url: `${image}${getRandomImageNumber()}.jpg` },
    { id: getRandomID(), url: `${image}${getRandomImageNumber()}.jpg` },
    { id: getRandomID(), url: `${image}${getRandomImageNumber()}.jpg` },
  ]);
  return (
    <>
      {images.map((image, index) => (
        <img
          key={image.id}
          src={image.url}
          alt="Random fox" />
      ))}
    </>
  );
};
