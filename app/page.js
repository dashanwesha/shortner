import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[50vh]">
        <div className="flex flex-col gap-6 items-center justify-center px-6 md:px-16 py-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">
            The best URL shortener in the market
          </h1>
          <p className="text-center md:text-left">
            We are the most straightforward URL shortener in the world. Most
            shorteners will track you or ask for personal details. We understand
            your needs, which is why we created this privacy-focused shortener.
          </p>

          <div className="flex gap-4 mt-4">
            <Link href="/shorten">
              <button className="bg-purple-500 hover:bg-purple-600 transition rounded-lg shadow-md px-6 py-2 font-semibold text-white">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-purple-500 hover:bg-purple-600 transition rounded-lg shadow-md px-6 py-2 font-semibold text-white">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        <div className="relative hidden md:block w-full h-full">
          <Image
            alt="Illustration of URL shortening"
            src="/vector.jpg"
            fill
            className="object-cover mix-blend-darken"
            priority
          />
        </div>
      </section>
    </main>
  );
}
