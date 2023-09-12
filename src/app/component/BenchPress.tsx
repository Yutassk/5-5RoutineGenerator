"use client";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

type Schedule = { title: string; weights: number[]; results: number[] };

export const BenchPress = () => {
  const [maxWeight, setMaxWeight] = useState(0);
  const [schedules, setSchedules] = useState<Schedule[]>([
    { title: "Day1", weights: [0.55, 0.6, 0.65, 0.7, 0.75], results: [0, 0, 0, 0, 0] },
    { title: "Day2", weights: [0.6, 0.65, 0.7, 0.75, 0.8], results: [0, 0, 0, 0, 0] },
    { title: "Day3", weights: [0.55, 0.6, 0.65, 0.7, 0.75], results: [0, 0, 0, 0, 0] },
    { title: "Day4", weights: [0.6, 0.65, 0.7, 0.75, 0.8], results: [0, 0, 0, 0, 0] },
    { title: "Day5", weights: [0.65, 0.7, 0.75, 0.8, 0.85], results: [0, 0, 0, 0, 0] },
    { title: "Day6", weights: [0.6, 0.65, 0.7, 0.75, 0.8], results: [0, 0, 0, 0, 0] },
    { title: "Day7", weights: [0.65, 0.7, 0.75, 0.8, 0.85], results: [0, 0, 0, 0, 0] },
    { title: "Day8", weights: [0.7, 0.75, 0.8, 0.85, 0.9], results: [0, 0, 0, 0, 0] },
    { title: "Day9", weights: [0.65, 0.7, 0.75, 0.8, 0.85], results: [0, 0, 0, 0, 0] },
    { title: "Day10", weights: [0.7, 0.75, 0.8, 0.85, 0.9], results: [0, 0, 0, 0, 0] },
    { title: "Day11", weights: [0.75, 0.8, 0.85, 0.9, 0.95], results: [0, 0, 0, 0, 0] },
    { title: "Day12", weights: [0.7, 0.75, 0.8, 0.85, 0.9], results: [0, 0, 0, 0, 0] },
    { title: "Day13", weights: [0.75, 0.8, 0.85, 0.9, 0.95], results: [0, 0, 0, 0, 0] },
    { title: "Day14", weights: [0.8, 0.85, 0.9, 0.95, 1.0], results: [0, 0, 0, 0, 0] },
    { title: "Day15", weights: [0.75, 0.8, 0.85, 0.9, 0.95], results: [0, 0, 0, 0, 0] },
    { title: "Day16", weights: [0.8, 0.85, 0.9, 0.95, 1.0], results: [0, 0, 0, 0, 0] },
  ]);
  const [checkedRows, setCheckedRows] = useState<number[]>([]);

  const handleSetWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxWeight(parseFloat(e.target.value));
    setCheckedRows([]);
  };

  const roundToNearestMultiple = (value: number, multiple: number) => {
    return Math.round(value / multiple) * multiple;
  };

  const generateSchedule = () => {
    const roundedMaxWeight = roundToNearestMultiple(maxWeight, 2.5);

    const updatedSchedules = schedules.map((schedule) => {
      const updatedWeights = schedule.weights.map((weight) => {
        return roundToNearestMultiple(weight * roundedMaxWeight, 2.5);
      });

      return { ...schedule, results: updatedWeights };
    });

    setSchedules(updatedSchedules);
    if (maxWeight) {
      localStorage.setItem("maxWeight", maxWeight.toString());
    }
  };

  const handleCheck = (index: number) => {
    const updateCheckedRows = [...checkedRows];

    if (updateCheckedRows.includes(index)) {
      const rowIndex = updateCheckedRows.indexOf(index);
      updateCheckedRows.splice(rowIndex, 1);
    } else {
      updateCheckedRows.push(index);
    }
    setCheckedRows(updateCheckedRows);
    localStorage.setItem("checkedRows", JSON.stringify(updateCheckedRows));
  };

  const isRowChecked = (index: number) => {
    return checkedRows.includes(index);
  };

  useEffect(() => {
    const storedMaxWeight = localStorage.getItem("maxWeight");
    if (storedMaxWeight !== null) {
      setMaxWeight(parseFloat(storedMaxWeight));
    }

    const storedCheckedRows = localStorage.getItem("checkedRows");
    if (storedCheckedRows !== null) {
      setCheckedRows(JSON.parse(storedCheckedRows));
    }
    generateSchedule();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-2">
      <p className="text-xs text-slate-400">Enter your current Single Rep Max (SRM)</p>
      <div className="flex relative">
        <input className="border-b border-slate-400 w-24 text-center text-lg" type="number" placeholder="100" value={maxWeight} onChange={handleSetWeight} />
        <p className="absolute bottom-1 translate-x-20">kg</p>
        <button className="bg-rose-500 rounded-md p-1 ml-4 text-white" onClick={generateSchedule}>
          create
        </button>
      </div>
      <div className="border border-slate-200 rounded-lg  overflow-scroll">
        <table className="text-center text-sm  w-full">
          <thead className="bg-rose-400 h-12">
            <tr className="text-white">
              <th>Day</th>
              <th>Set1</th>
              <th>Set2</th>
              <th>Set3</th>
              <th>Set4</th>
              <th>Set5</th>
            </tr>
          </thead>
          <tbody className="-mt-1">
            {schedules.map((schedule, index) => (
              <tr key={schedule.title} className={`border-t border-slate-200 ${isRowChecked(index) ? "opacity-50" : ""} `}>
                <th className="py-3  font-normal flex items-center justify-center">
                  <FontAwesomeIcon icon={isRowChecked(index) ? faSquareCheck : faSquare} className="mr-2 text-lg" onClick={() => handleCheck(index)} />
                  {schedule.title}
                </th>
                {schedule.results.map((result, index) => (
                  <td key={index}>{result}×5</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
