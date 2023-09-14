import Image from "next/image";
import { TrainingGenerator } from "./component/TrainingGenerator";
import Header from "./component/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full m-auto">
      <div className="mx-2">
        <Header />
        <TrainingGenerator />
        <p>
          RMって何？という方は
          <Link href={"/RmCalcBp"}>こちら</Link>で解説しています。
        </p>
      </div>
    </div>
  );
}
