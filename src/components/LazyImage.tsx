import { useEffect, useRef, useState } from "react";
import type {ImgHTMLAttributes} from "react";

type TSrc = {
  src: string;
  onLazyLoad: (imageDom: HTMLImageElement) => void;
};
type TImageNativeProps = ImgHTMLAttributes<HTMLImageElement>;
type TProps = TSrc & TImageNativeProps;

export const LazyImage = ({ src, onLazyLoad, ...imgAttributes }: TProps): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [isLazyLoad, setIsLazyLoad] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );
  useEffect(() => {
    if(isLazyLoad) return;
    const observable = new IntersectionObserver((entries) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src);
        }
          if (typeof onLazyLoad === "function"){
          onLazyLoad(node.current!);
        }
      });

      setIsLazyLoad(true);
    });
    if (node.current) observable.observe(node.current);
    return () => {
      observable.disconnect();
    };
  }, [src, onLazyLoad, isLazyLoad]);
  return (
    <>
      <img
        ref={node}
        src={currentSrc}
        className="w-96 h-64 bg-cover object-cover mb-2 bg-gray-300"
        {...imgAttributes}
      />
    </>
  );
};
