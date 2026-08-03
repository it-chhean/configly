import React from 'react'
import { DottedGlowBackground } from './ui/dotted-glow-background';

const HeroSection = () => {
  return (
    <section className="relative mx-auto flex w-full max-w-5xl items-center justify-center">
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-25 dark:opacity-100"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-400"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
 
      <div className="relative z-10 w-full space-y-6 py-16 md:flex-row">
        <div>
          <h2 className="text-left text-4xl font-normal tracking-tight text-j-900 sm:text-5xl  dark:text-neutral-400">
            Free convert your{" "}
            <span className="font-bold dark:text-white">Configuration File</span>
          </h2>
          <p className="mt-4 max-w-lg text-left text-base text-muted dark:text-neutral-300">
            Unlock premium components, advanced animations, and exclusive
            templates to build stunning modern interfaces.
          </p>
          {/* btn */}
          <div className='flex gap-2'>
            <button className=' px-3 mt-4 py-2 bg-black text-white items-center hover:underline text-sm '>Get Started</button>
            <button className=' px-3 mt-4 py-2 bg-white border text-primary items-center hover:underline text-sm '>View docs</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection