import React from "react";
import Header from "../component/Header";
import { BpRMConversion } from "../component/BpRMConversion";

const RmCalc = () => {
  return (
    <div className="w-full m-auto text-slate-900">
      <div className="mx-4">
        <Header />
        <h1 className="font-bold border-b-2 border-slate-900 mt-8 mb-14">RM換算表</h1>
        <h2 className="border-b border-slate-200 font-semibold mb-8">王道のRM換算表を使いこなそう</h2>
        <BpRMConversion />
      </div>
    </div>
  );
};

export default RmCalc;
