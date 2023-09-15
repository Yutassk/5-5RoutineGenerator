import React from "react";
import Header from "../component/Header";
import RMTabs from "../component/RMTabs";

const RmCalc = () => {
  return (
    <div className="w-full m-auto text-slate-900">
      <Header />
      <div className="mx-4">
        <h1 className="font-bold border-b-2 border-slate-900 mt-8 mb-14">RM換算表</h1>
        <h2 className="border-b border-slate-200 font-semibold mb-8">王道のRM換算表を使いこなそう</h2>
        <p className="mb-6">
          RM（Repetition
          Maximum）は、ボディビルディングやパワーリフティングで非常に重要な概念です。RMは、あなたが特定の重量を持って何回リフトできるかを示す指標です。これは、筋肉の強度や持久力を評価し、トレーニングプログラムを設計する際に役立ちます。例えば、ベンチプレスで60kgを1回だけ持ち上げることができる場合、あなたの1RMは60kgです。
        </p>
        <div className="border border-slate-200 px-2">
          <RMTabs />
        </div>
        {/* <BpRMConversion /> */}
      </div>
    </div>
  );
};

export default RmCalc;
