import Image from "next/image";

function Hero() {
  return (
    <section className="relative bg-[#f2f4f6]">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat z-3"
        style={{
          backgroundImage: "url('https://tinypic.host/images/2024/10/09/DALLE-2024-10-09-00.34.17---A-professional-HR-consulting-environment-featuring-a-diverse-group-of-people-in-a-modern-office-space-collaborating-and-discussing-projects-around-a.webp')", 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1c2833] opacity-80 z-1"></div>
      
      <div className="relative mx-auto max-w-screen-xl px-4 md:py-32 py-20 lg:flex lg:items-center z-3 md:pb-[200px]">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            Elevate Your Workforce.
            <strong className="font-extrabold text-[#4a90e2] sm:block"> Drive Business Results. </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-white">
            We help you streamline HR processes, enhance employee engagement, and optimize your organization's growth.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-[#4a90e2] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#3b7cc4] focus:outline-none focus:ring active:bg-[#356bb1] sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium border text-[#fff] shadow hover:text-[#16202a] focus:outline-none focus:ring active:text-[#0f151b] sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;





