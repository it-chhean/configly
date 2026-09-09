import { DottedGlowBackground } from '../ui/dotted-glow-background';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative mx-auto flex w-full max-w-5xl items-center justify-start">
      <div className='py-30'>
          <h2 className="text-left text-4xl font-normal tracking-tight text-j-900 sm:text-5xl  dark:text-neutral-400">
            Convert your Config File{" "}
            <span className="font-bold dark:text-white">Instantly</span>
          </h2>
          <p className="mt-4 max-w-lg text-left text-base text-muted dark:text-neutral-300">
            Fast, reliable configuration file conversion across platform.
             No uploads, no servers, your data is processed locally in your browser.
          </p>
          {/* btn */}
          <div className='flex gap-2'>
          <Link
            href="/tools"
            className=' px-3 mt-4 py-2 bg-primary text-white items-center hover:underline text-sm '
          >
          Try Configly
          </Link>
          <Link
            href="/documents"
            className=' px-3 mt-4 py-2 bg-white text-primary border items-center hover:underline text-sm '
          >
            View docs 
          </Link>
          </div>
        </div>
    </section>
  );
}

export default HeroSection
