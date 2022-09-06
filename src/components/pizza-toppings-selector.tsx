import { useState } from "react";
import { PizzaTopping } from "../types";

interface PizzaToppingSelectorProps {
  pizzaToppings: PizzaTopping[];
  toppings: PizzaTopping[];
  setToppings: (toppings: PizzaTopping[]) => void;
}

export const PizzaToppingSelector = ({
  pizzaToppings,
  toppings,
  setToppings,
}: PizzaToppingSelectorProps) => {
  return (
    <div className="mt-6">
      <div className="mb-4 font-semibold text-slate-500">Toppings</div>
      <div className="grid grid-cols-3 gap-4">
        {pizzaToppings.map(({ id, value, price }, index) => (
          <button
            key={id}
            className={
              `w-40 rounded bg-slate-500 p-4 font-semibold capitalize text-white hover:bg-slate-800` +
              (toppings.includes(pizzaToppings[index])
                ? " bg-lime-500 hover:bg-lime-500"
                : "")
            }
            onClick={() => {
              if (toppings.includes(pizzaToppings[index])) {
                setToppings(
                  toppings.filter((topping) => topping !== pizzaToppings[index])
                );
              } else {
                setToppings([...toppings, pizzaToppings[index]]);
              }
            }}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};
