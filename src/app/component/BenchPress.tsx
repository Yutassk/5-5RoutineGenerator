"use client";
import React, { useState } from "react";

export const BenchPress = () => {
  const [maxWeight, setMaxWeight] = useState<number>(0);
  const [schedules, setSchedules] = useState([
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

  const handleSetWeight = (e: number) => {
    setMaxWeight(e);
  };

  const roundToNearestMultiple = (value, multiple) => {
    return Math.floor(value / multiple) * multiple;
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
  };

  return (
    <div className="space-y-2">
      <p className="text-xs text-slate-400">Enter your current Single Rep Max (SRM)</p>
      <div className="flex relative">
        <input className="border-b border-slate-400 w-24 text-center text-lg" type="number" placeholder="100" onChange={(e) => handleSetWeight(e.target.value)} />
        <p className="absolute bottom-1 translate-x-20">kg</p>
        <button className="bg-rose-500 rounded-md p-1 ml-4 text-white" onClick={generateSchedule}>
          create
        </button>
      </div>
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <table className="text-center text-sm  w-full">
          <thead className="bg-rose-400 h-12">
            <tr className="text-white">
              <th></th>
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
              <tr key={schedule.title} className="border-t border-slate-200 ">
                <input type="checkbox" className="" />
                <th className="py-3 font-normal">{schedule.title}</th>
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
