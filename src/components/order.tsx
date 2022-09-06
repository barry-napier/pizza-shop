import { NextPage } from "next";
import { useEffect, useState } from "react";
import { PizzaSizeSelector } from "../components/pizza-size-selector";
import { PizzaToppingSelector } from "../components/pizza-toppings-selector";
import { PizzaSize, PizzaTopping } from "../types";

const pizzaSizes: PizzaSize[] = [
  { id: "small", value: "Small", price: 10 },
  { id: "medium", value: "Medium", price: 15 },
  { id: "large", value: "Large", price: 20 },
];

const pizzaToppings: PizzaTopping[] = [
  { id: "tomato", value: "tomato", price: 0.5 },
  { id: "cheese", value: "cheese", price: 0.5 },
  { id: "pepperoni", value: "pepperoni", price: 0.75 },
  { id: "mushroom", value: "mushroom", price: 0.5 },
  { id: "onion", value: "onion", price: 0.5 },
  { id: "pineapple", value: "pineapple", price: 0.5 },
];

const Order = () => {
  const [size, setSize] = useState<PizzaSize>(pizzaSizes[0]);
  const [toppings, setToppings] = useState<PizzaTopping[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const total =
      size.price + toppings.reduce((acc, topping) => acc + topping.price, 0);
    setTotal(total);
  }, [size, toppings]);

  return (
    <div className="p-6">
      <div className="flex">
        <div className="flex w-1/2 flex-col border-r border-slate-400 p-4">
          <h2 className="font-bold">Build your Pizza</h2>
          <PizzaSizeSelector
            pizzaSizes={pizzaSizes}
            size={size}
            setSize={setSize}
          />
          <PizzaToppingSelector
            pizzaToppings={pizzaToppings}
            toppings={toppings}
            setToppings={setToppings}
          />
        </div>
        <div className="w-1/2 p-4">
          <h2 className="font-bold">Bill</h2>
          {size.value} - ${size.price}
          <br />
          ----------------------------------
          {toppings.map((topping) => (
            <div key={topping.id}>
              {topping.value} - ${topping.price}
            </div>
          ))}
          <div className="mt-6 text-2xl font-bold">Total : ${total}</div>
        </div>
      </div>
    </div>
  );
};

export default Order;
