import Image from "next/image";
import { BenchPress } from "./component/BenchPress";
import Header from "./component/Header";

export default function Home() {
  return (
    <div className="w-full m-auto">
      <div className="mx-2">
        <Header />
        <BenchPress />
      </div>
    </div>
  );
}
