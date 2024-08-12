import React from "react";

export default function hero() {
  return (
    <section className="py-56 bg-white dark:bg-black sm:pb-16 lg:pb-20 xl:pb-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
        <div className="relative">
          <div className="lg:w-2/3">
            <p className="text-sm font-normal tracking-widest text-gray-400 uppercase">
              Web Developers & Android Developers
            </p>
            <h1 className="mt-6 text-3xl font-semibold dark:text-white text-slate-700 sm:mt-10 sm:text-4xl lg:text-5xl xl:text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-600">
                Fadhil Maulana Syhafiq{" "}
              </span>{" "}
            </h1>
            <span className="dark:text-gray-300 text-2xl text-gray-400 font-semibold">
              Mobile & Web Developers
            </span>
            <p className="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8 italic">
            ‟ Technology is the canvas on which I paint solutions that transform
              ideas into reality ”
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
        </div>
      </div>
      <div className="hidden md:block">
        <svg
          id="wave"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="wave-top"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop
                stopColor="rgba(132.986, 228.903, 243.936, 1)"
                offset="0%"
              ></stop>
              <stop stopColor="rgba(0, 194.534, 255, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: "1" }}
            fill="url(#sw-gradient-0)"
            d="M0,60L60,65C120,70,240,80,360,80C480,80,600,70,720,55C840,40,960,20,1080,10C1200,0,1320,0,1440,5C1560,10,1680,20,1800,30C1920,40,2040,50,2160,56.7C2280,63,2400,67,2520,56.7C2640,47,2760,23,2880,23.3C3000,23,3120,47,3240,48.3C3360,50,3480,30,3600,30C3720,30,3840,50,3960,60C4080,70,4200,70,4320,60C4440,50,4560,30,4680,21.7C4800,13,4920,17,5040,16.7C5160,17,5280,13,5400,11.7C5520,10,5640,10,5760,10C5880,10,6000,10,6120,8.3C6240,7,6360,3,6480,3.3C6600,3,6720,7,6840,18.3C6960,30,7080,50,7200,56.7C7320,63,7440,57,7560,45C7680,33,7800,17,7920,15C8040,13,8160,27,8280,35C8400,43,8520,47,8580,48.3L8640,50L8640,100L8580,100C8520,100,8400,100,8280,100C8160,100,8040,100,7920,100C7800,100,7680,100,7560,100C7440,100,7320,100,7200,100C7080,100,6960,100,6840,100C6720,100,6600,100,6480,100C6360,100,6240,100,6120,100C6000,100,5880,100,5760,100C5640,100,5520,100,5400,100C5280,100,5160,100,5040,100C4920,100,4800,100,4680,100C4560,100,4440,100,4320,100C4200,100,4080,100,3960,100C3840,100,3720,100,3600,100C3480,100,3360,100,3240,100C3120,100,3000,100,2880,100C2760,100,2640,100,2520,100C2400,100,2280,100,2160,100C2040,100,1920,100,1800,100C1680,100,1560,100,1440,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          ></path>
        </svg>
        <div className="relative -mt-1">
          <svg
            id="wave"
            style={{ transform: "rotate(180deg)", transition: "0.3s" }}
            viewBox="0 0 1440 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="wave-bottom rotate-180"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop
                  stopColor="rgba(132.986, 228.903, 243.936, 1)"
                  offset="0%"
                ></stop>
                <stop stopColor="rgba(0, 194.534, 255, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 0px)", opacity: "1" }}
              fill="url(#sw-gradient-0)"
              d="M0,60L60,65C120,70,240,80,360,80C480,80,600,70,720,55C840,40,960,20,1080,10C1200,0,1320,0,1440,5C1560,10,1680,20,1800,30C1920,40,2040,50,2160,56.7C2280,63,2400,67,2520,56.7C2640,47,2760,23,2880,23.3C3000,23,3120,47,3240,48.3C3360,50,3480,30,3600,30C3720,30,3840,50,3960,60C4080,70,4200,70,4320,60C4440,50,4560,30,4680,21.7C4800,13,4920,17,5040,16.7C5160,17,5280,13,5400,11.7C5520,10,5640,10,5760,10C5880,10,6000,10,6120,8.3C6240,7,6360,3,6480,3.3C6600,3,6720,7,6840,18.3C6960,30,7080,50,7200,56.7C7320,63,7440,57,7560,45C7680,33,7800,17,7920,15C8040,13,8160,27,8280,35C8400,43,8520,47,8580,48.3L8640,50L8640,100L8580,100C8520,100,8400,100,8280,100C8160,100,8040,100,7920,100C7800,100,7680,100,7560,100C7440,100,7320,100,7200,100C7080,100,6960,100,6840,100C6720,100,6600,100,6480,100C6360,100,6240,100,6120,100C6000,100,5880,100,5760,100C5640,100,5520,100,5400,100C5280,100,5160,100,5040,100C4920,100,4800,100,4680,100C4560,100,4440,100,4320,100C4200,100,4080,100,3960,100C3840,100,3720,100,3600,100C3480,100,3360,100,3240,100C3120,100,3000,100,2880,100C2760,100,2640,100,2520,100C2400,100,2280,100,2160,100C2040,100,1920,100,1800,100C1680,100,1560,100,1440,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
