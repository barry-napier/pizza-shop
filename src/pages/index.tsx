import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "../components/modal";

const Home: NextPage = () => {
  let [isOpen, setIsOpen] = useState(true);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="flex h-screen font-medium">
        <section className="flex h-full w-1/2 flex-col bg-white py-6 px-10">
          <header className="flex items-center justify-between">
            <Link href="/">
              <a className="h-10 text-gray-500 hover:text-gray-900">
                <h1 className="text-3xl font-black tracking-tighter text-rose-600">
                  Pizza Shop
                </h1>
              </a>
            </Link>
            <Link href="/">
              <a className="text-sm text-gray-500 hover:text-gray-900">
                How it works?
              </a>
            </Link>
          </header>
          <main className="flex flex-auto flex-col justify-center">
            <h1 className="mb-5 text-8xl font-bold tracking-tight text-lime-500">
              True italian taste
            </h1>
            <h2 className="mb-5 text-6xl font-bold tracking-tighter">
              Delivered in a flash ⚡️
            </h2>
            <p className="mb-10 text-lg font-semibold tracking-tight text-gray-400">
              Delicious thin crust pizza, hot, cheesey, flavour-packed toppings
              and all delivered to your door.
            </p>
            <Link href="/">
              <button className="mb-6 rounded-lg bg-black py-6 px-4 font-semibold text-white">
                10% off Now
              </button>
            </Link>
          </main>
          <footer className="text-sm text-gray-500 hover:text-gray-900">
            <p>© {currentYear} Pizza Shop</p>
          </footer>
        </section>

        <section className="pizza h-full w-1/2 py-6 px-10">
          <header className="text-right">
            <Link href="/">
              <button className="rounded-lg bg-orange-500 p-4 font-semibold text-white">
                Order Now
              </button>
            </Link>
          </header>
        </section>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Home;
