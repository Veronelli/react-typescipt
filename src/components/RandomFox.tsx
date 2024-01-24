"use client";

type TProps = {
    image: string
}

export const RandomFox = ({image}:TProps): JSX.Element => {
    const RANDOM_IMAGE_NUMBER = Math.floor(Math.random() * 123) + 1;
    const imageURL = `${image}${RANDOM_IMAGE_NUMBER}.jpg`;
  return <img src={imageURL} />;
};
