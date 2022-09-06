import { useState } from "react";
import { PizzaSize } from "../types";

interface PizzaSizeSelectorProps {
  pizzaSizes: PizzaSize[];
  size: PizzaSize;
  setSize: (size: PizzaSize) => void;
}

export const PizzaSizeSelector = ({
  pizzaSizes,
  size,
  setSize,
}: PizzaSizeSelectorProps) => {
  return (
    <div className="mt-6">
      <div className="mb-4 font-semibold text-slate-500">Size</div>
      <div className="grid grid-cols-3 gap-4">
        {pizzaSizes.map(({ id, value, price }, index) => (
          <button
            key={id}
            onClick={() => setSize(pizzaSizes[index])}
            className={
              `w-40 rounded bg-slate-500 p-4 font-semibold capitalize text-white hover:bg-slate-800` +
              (size === pizzaSizes[index]
                ? " bg-lime-500 hover:bg-lime-500"
                : "")
            }
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};
