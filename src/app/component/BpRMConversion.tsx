import React from "react";

export const BpRMConversion = () => {
  const rmTables = [];

  const titleRow = {
    title: "重量/回数",
    reps: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  };
  //   rmTables.push(titleRow);

  for (let weight = 40; weight <= 300; weight += 2.5) {
    let rmValue = [];
    for (let rm = 2; rm < 13; rm++) {
      const calc = (weight * rm) / 40 + weight;
      rmValue.push(Math.ceil(calc));
    }
    rmTables.push({ weights: weight, rms: rmValue });
  }

  return (
    <div className="border border-slate-200 px-2">
      <h3 className="border-l-8 border-slate-900 ps-2 my-6 font-bold">ベンチプレス</h3>
      <p className="font-bold  decoration-yellow-200 decoration-8 underline-offset-[-2px] underline mb-6 ">最大挙上重量 = 重量 × 回数 ÷ 40 + 重量</p>
      <p className="mb-6">
        カラダづくりの基本と言われる「ベンチプレス」「スクワット」「デッドリフト」の『BIG3』における、最大挙上重量（いわゆる1RM [Repetition Maximum] =
        1回しか反復できない重さ）の合計値を算出しよう。下記【RM換算表】最左列の「重量」を選び、その重さを挙げられる「回数」を計測すると、両者が交差する欄の数値が各種目のRMを表している。
      </p>
      <div className="h-[calc(100vh/3)] overflow-scroll">
        <table className="border border-slate-200 text-center m-auto ">
          <thead className="">
            <tr className="">
              <th className=" py-2 border-2 border-slate-200 font-medium text-sm sticky top-0 left-0 z-50 bg-slate-600 text-white">{titleRow.title}</th>
              {titleRow.reps.map((rep, index) => (
                <th className="px-4 border-2 border-slate-200 font-medium text-sm sticky top-0 left-0 bg-slate-600 text-white " key={index}>
                  {rep}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rmTables.map((table) => (
              <tr key={table.weights}>
                <th className="px-5 border-2 border-slate-200 bg-slate-600 text-white font-normal text-sm sticky left-0">{table.weights}</th>
                {table.rms.map((rm) => (
                  <td className="border-2 border-slate-200" key={rm}>
                    {rm}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
