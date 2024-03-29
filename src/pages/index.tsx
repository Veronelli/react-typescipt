import { LazyImage } from "@/components/LazyImage";
import { Inter } from "next/font/google";
import { MouseEventHandler, useState } from "react";
import {random} from "lodash";

const inter = Inter({ subsets: ["latin"] });
const getRandomImageNumber = () => random(0,123);
const getRandomID = () => Math.floor(Math.random() * 1000000) + 1;
type TImageItem = {
  id: number;
  url: string;
};
export default function Home() {
  const FOX_API_URL = "https://randomfox.ca/images/";
  const [images, setImages] = useState<TImageItem[]>([]);
  const addNewFox: MouseEventHandler<HTMLButtonElement> | undefined = ()=>{
    const newFox: TImageItem = { id: getRandomID(), url: `${FOX_API_URL}${getRandomImageNumber()}.jpg` };
    window.plausible('Signup');
    setImages([...images, newFox]);
    
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Hola</h1>
      <button onClick={addNewFox}>Add new Fox</button>
      {images.map((image, index) => (
        <LazyImage
          key={image.id}
          alt="Random fox"
          src={image.url}
          onLazyLoad={() => console.log(`Lazy Load ${index}`)} />
      ))}
    </main>
  );
}
