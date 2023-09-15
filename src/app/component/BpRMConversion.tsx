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
    <div>
      <h3 className="border-l-8 border-slate-800 ps-2 my-6 font-bold">ベンチプレス</h3>
      <p className="font-bold  decoration-yellow-200 decoration-8 underline-offset-[-2px] underline mb-6 ">最大挙上重量 (RM) = 重量 × 回数 ÷ 40 + 重量</p>
      <div className="h-[calc(100vh/3)] overflow-scroll border border-slate-200 ">
        <table className="text-center m-auto">
          <thead className="">
            <tr className="">
              <th className=" py-2 border-2 border-slate-200 font-medium text-sm sticky top-0 left-0 z-50 bg-slate-800 text-white">{titleRow.title}</th>
              {titleRow.reps.map((rep, index) => (
                <th className="px-4 border-2 border-slate-200 font-medium text-sm sticky top-0 left-0 bg-slate-800 text-white " key={index}>
                  {rep}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rmTables.map((table) => (
              <tr key={table.weights}>
                <th className="px-5 border-2 border-slate-200 bg-slate-800 text-white font-normal text-sm sticky left-0">{table.weights}</th>
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
