"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="relative text-slate-900 mt-6 container">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-4">
              <div>
                <Image
                  src={"/assets/images/profile.webp"}
                  alt="profile"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <div>
                <h1 className="text-xl md:text-3xl font-bold">THANAWAT.K🧑‍💻</h1>
                <h2 className="text-xs md:text-base text-gray-500">
                  <span className="text-gray-900">SOFTWARE ENGINEER,</span> & AI
                  INTEGRATION.
                </h2>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-6">
              <p className="text-xs text-gray-600">📞 +6696-946-6098</p>
              <p className="text-xs text-gray-600">✉️ boss41680@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
