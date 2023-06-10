import Image from "next/image";
import albumDataArray from "../public/album.json";

export default function Album() {
  return (
    <>
      <div className="relative float-left mx-auto my-5">
        <h1 className="text-center text-2xl text-white p-2 border border-blue-500 rounded-sm">
          Image with blurred placeholder
        </h1>
        <p>
          To use placeholder="blur", then must use blurDataURL with this and
          insert placeholder image as dataURL format inside it.
        </p>
        {albumDataArray.map((album) => (
          <div
            key={album.id}
            className="w-1/2 h-1/2 rounded-md p-3 mt-5 ml-3 float-left bg-blue-300"
          >
            <Image
              src={album.url}
              alt={album.title}
              width={600}
              height={600}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,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NFjFmzb3PHWixDL8dxx1osK5L9oosFz7e+2e9fMWOYeLz3osBIt5707DJUvPeiwyxHee9FgLUV570WKLUd5707DLcV570rAWo7z3oAtR3fvSHcnS796Bkou/elYBftdKwEb3fvQIqy3XvSAz7m5680mIyLu5680WAwr65680hnOajc8HmlYZyup3PDc0rDRx2rXP3uamxSZxGs3PDc1Jojgtcu/vc1DNEec+Ib/aH5rkqSsjogeW+JtW8sNzya0wtJyd2d9NHC3F58xJPJr6CMOw6uIUSt9tGetaezOL62rl2zvsMCDgivSw0/ss6oV1I7bw/rG8KCcEV3uHUwqrqjvNLv8AIHNZ8pwyOpsbzOOamxizbtrvpzRYhmhFdcdaVhEv2n3osI+1hfe9fNWMBwvveiwEi3vvRYCZLz3pWKLEd7707AWY773osMtxXvvRYouRXnvSAtxXfvQBZju/ekBYS896LASi896VgF+2e/60hjHvPegCtLee9KwFC4vODzRYDJu7vrzSAw767680hnN6jd9eaVhnK6pd8HmkBxur3f3ualoaOI1q84bmpZaPPdfvcBuaxkaI8u8T6nt389K4H+8nY6YHkOvasbi5bByBwK+lw1HliaVa3so2W5hs5c5JzXoJWPJlJyd2Npkjkco2QcGqi+V3KUnHY2tL1RoZFOcEfrXu0WqkTtp1+Zcsj0XQdZEyKQ1KULET0Z2unahkDmsWjnbN+1vc45qbE3NOK9460rCJftnvSsI+z/t3vXzVjOw8X3vRYdiRb/3pWAmS/wDeiwFiO+96dhlqO996LDLcV770rDLkV770gLkV970AWo773pWGWUvfeiwiUXnvSAU3nvQBG9570gK0t770rAULi996LAZV3edeaQzDvbzrzSGc7qF515pWA5TVLzg80hnG6vecNzSaA4TW77Abms2UjzfxJqW1X5rjqysjSJ414013y1ZFb5m4Fb4GhzPmZrzqOp58zF2JPU19IlY45ScndjaZIUAFAD432muzDVeSViWjc0fWXspRk/Ia+iSVSOhaqu1pHo+i62siqQ2fxrklTaE2dVZamCBzWLiRc1otQ461NguTf2h70rBc+zvt3vXy9gHC/wDeiwEiX/vRYCdL/wB6LDLMd/70rDLUWoe9Ay3Ff+9IC5Ff+9IC3Ff+9FhluO+96VgLKX3vQBMt970g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"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="relative float-left mx-auto my-5">
        <h1 className="text-center text-2xl text-white p-2 border border-blue-500 rounded-sm">
          Image with Lazy Loading.. Add loading="lazy"
        </h1>
        {albumDataArray.map((album) => (
          <div
            key={album.id}
            className="w-1/2 h-1/2 rounded-sm p-3 mt-5 ml-3 float-left"
          >
            <Image
              src={album.url}
              alt={album.title}
              width={600}
              height={600}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </>
  );
}
