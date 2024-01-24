import { RandomFox } from "@/components/RandomFox";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const FOX_API_URL = "https://randomfox.ca/images/";
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Hola</h1>
      <RandomFox image={FOX_API_URL} />
    </main>
  );
}
