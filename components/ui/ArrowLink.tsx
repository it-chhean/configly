import { Props } from '@/types';

export default function ArrowLink({
   href,
   name
}: Props ) {
   return (
      <a
         href={href}
         rel="noopener noreferrer"
         className="group inline-flex items-center gap-1.5 text-primary transition-opacity duration-150 hover:opacity-100"
      >
         <span className="text-lg hover-underline">
            {name}
         <svg
            width="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block flex-shrink-0 transition-transform text-primary duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
         >
            <path
               d="M1 9L9 1M9 1H3M9 1V7"
               stroke="currentColor"
               strokeWidth={1.2}
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>
         </span>
      </a>
   );
}