import Image from "next/image";
import { TrainingGenerator } from "./component/TrainingGenerator";
import Header from "./component/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full m-auto max-w-3xl">
      <Header />
      <div className="mx-2">
        <TrainingGenerator />
        <p>
          RMって何？という方は
          <Link href={"/RmCalcBp"} className="underline font-bold text-blue-900 hover:text-blue-600">
            こちら
          </Link>
          で解説しています。
        </p>
      </div>
    </div>
  );
}
