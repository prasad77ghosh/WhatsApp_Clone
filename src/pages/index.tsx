import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <main className="h-screen">
      <button
        className="bg-green-300 px-2 text-center"
        onClick={() => router.push("/chat")}
      >
        chat
      </button>
    </main>
  );
}
