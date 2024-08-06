import Image from "next/image";
import React from "react";

export default function hero() {
  return (
    <section className="py-20 bg-white dark:bg-black sm:pb-16 lg:pb-20 xl:pb-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
        <div className="relative">
          <div className="lg:w-2/3">
            <p className="text-sm font-normal tracking-widest text-gray-400 uppercase">
              Developers & Graphic Designer
            </p>
            <h1 className="mt-6 text-3xl font-semibold dark:text-white text-slate-700 sm:mt-10 sm:text-4xl lg:text-5xl xl:text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                Fadhil Maulana Syhafiq{" "}
              </span>{" "}
              Mobile Developers
            </h1>
            <p className="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dignissimos pariatur?
            </p>
            <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
              <a
                href="#"
                title=""
                className="relative inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-cyan-500 border border-transparent rounded-full"
                role="button"
              >
                {" "}
                Contact{" "}
              </a>
            </div>
          </div>

          <div className="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
            <Image
              className="w-full"
              src="/images/programming.png"
              alt="Programming illustration"
              width={500}
              height={500}
              quality={100} // Set quality to 100 for best clarity
            />
          </div>
        </div>
      </div>
    </section>
  );
}
