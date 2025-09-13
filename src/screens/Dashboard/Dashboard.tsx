import { Separator } from "../../components/ui/separator";
import { CreateInvoiceSection } from "../Dashboard/sections/CreateInvoiceSection/CreateInvoiceSection";
import { InvoiceSummarySection } from "../Dashboard/sections/InvoiceSummarySection/InvoiceSummarySection";
import logo from "../../assets/logo.svg";

export const Dashboard = (): JSX.Element => {
  return (
    <div className="bg-light-grey min-h-screen w-full flex justify-center">
      <div className="w-full max-w-[390px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[800px] min-h-screen relative bg-light-grey px-4 sm:px-6 md:px-8">
        <div className="absolute top-0 left-0 w-full h-[35%] sm:h-[400px] bg-light-purple z-0" />

        <header className="relative z-50 w-full h-[54px] flex items-center justify-between pt-2">
          <div className="text-slate-950 text-[16px] sm:text-[17px] font-semibold">9:41</div>
          <div className="flex items-center gap-1 sm:gap-2">
            <svg className="w-4 h-3 sm:w-5 sm:h-3" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M19.7723 1.68236C19.7723 1.04932 19.2947 0.536133 18.7056 0.536133H17.6389C17.0498 0.536133 16.5723 1.04932 16.5723 1.68236V11.6163C16.5723 12.2494 17.0498 12.7625 17.6389 12.7625H18.7056C19.2947 12.7625 19.7723 12.2494 19.7723 11.6163V1.68236ZM12.3382 2.98141H13.4048C13.9939 2.98141 14.4715 3.50691 14.4715 4.15515V11.5888C14.4715 12.237 13.9939 12.7625 13.4048 12.7625H12.3382C11.749 12.7625 11.2715 12.237 11.2715 11.5888V4.15515C11.2715 3.50691 11.749 2.98141 12.3382 2.98141ZM8.00638 5.63046H6.93971C6.35061 5.63046 5.87305 6.16265 5.87305 6.81914V11.5739C5.87305 12.2303 6.35061 12.7625 6.93971 12.7625H8.00638C8.59548 12.7625 9.07305 12.2303 9.07305 11.5739V6.81914C9.07305 6.16265 8.59548 5.63046 8.00638 5.63046ZM2.7056 8.07576H1.63893C1.04983 8.07576 0.572266 8.60034 0.572266 9.24745V11.5909C0.572266 12.238 1.04983 12.7625 1.63893 12.7625H2.7056C3.2947 12.7625 3.77227 12.238 3.77227 11.5909V9.24745C3.77227 8.60034 3.2947 8.07576 2.7056 8.07576Z" fill="#010101"/>
            </svg>

            <svg className="w-4 h-3 sm:w-5 sm:h-3" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.84279 3.10404C11.3299 3.10414 13.7219 4.02623 15.5244 5.67971C15.6601 5.80736 15.8771 5.80575 16.0108 5.6761L17.3083 4.41263C17.376 4.34687 17.4137 4.25779 17.4131 4.16511C17.4126 4.07243 17.3738 3.98379 17.3053 3.91879C12.5743 -0.455922 5.11055 -0.455922 0.37954 3.91879C0.311008 3.98374 0.272124 4.07235 0.271492 4.16504C0.27086 4.25772 0.308533 4.34682 0.376173 4.41263L1.67404 5.6761C1.80764 5.80595 2.02476 5.80756 2.16041 5.67971C3.96315 4.02612 6.35543 3.10403 8.84279 3.10404ZM8.83943 7.32431C10.1968 7.32423 11.5056 7.83597 12.5118 8.7601C12.6478 8.89125 12.8622 8.88841 12.9949 8.75369L14.2821 7.43438C14.3499 7.36518 14.3875 7.2713 14.3866 7.17375C14.3856 7.0762 14.3461 6.98312 14.2769 6.91533C11.2131 4.02448 6.46836 4.02448 3.40453 6.91533C3.33532 6.98312 3.29584 7.07625 3.29493 7.17383C3.29402 7.27141 3.33177 7.36528 3.3997 7.43438L4.68661 8.75369C4.81927 8.88841 5.03363 8.89125 5.16971 8.7601C6.17517 7.83658 7.48301 7.32488 8.83943 7.32431ZM11.3639 10.1179C11.3658 10.2232 11.3287 10.3248 11.2614 10.3986L9.08475 12.8533C9.02095 12.9255 8.93396 12.9661 8.84319 12.9661C8.75242 12.9661 8.66542 12.9255 8.60162 12.8533L6.42459 10.3986C6.35734 10.3247 6.32034 10.2231 6.32233 10.1178C6.32433 10.0124 6.36514 9.91267 6.43512 9.84205C7.82522 8.52816 9.86115 8.52816 11.2512 9.84205C11.3212 9.91272 11.3619 10.0125 11.3639 10.1179Z" fill="#010101"/>
            </svg>

            <svg className="w-6 h-3 sm:w-7 sm:h-3" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.35" x="1.07227" y="0.5" width="24" height="12" rx="3.8" stroke="#010101"/>
              <path opacity="0.4" d="M26.5723 4.78113V8.8566C27.377 8.51143 27.9003 7.70847 27.9003 6.81886C27.9003 5.92926 27.377 5.1263 26.5723 4.78113Z" fill="#010101"/>
              <rect x="2.57227" y="2" width="21" height="9" rx="2.5" fill="#010101"/>
            </svg>
          </div>
        </header>

        <div className="relative z-10 mt-4 sm:mt-0">
          <InvoiceSummarySection />
        </div>

        <div className="absolute top-[90px] sm:top-[110px] left-0 w-full min-h-[calc(100vh-90px)] sm:min-h-[calc(100vh-100px)] bg-slate-50 rounded-t-[46px] z-5" />

        <main className="relative z-10 pt-12">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <CreateInvoiceSection />
          </div>
        </main>

        <footer className="relative z-20 flex flex-col items-center gap-3 pb-8 pt-6 mt-8">
          <Separator className="w-full bg-[#f2f2f2]" />
          <div className="flex flex-col items-center justify-center gap-1">
            <img className="w-[76px] h-[14px] sm:w-[90px] sm:h-[16px]" alt="Sparko Logo" src={logo} />
            <div className="text-sparko-dark-grey text-[10px] sm:text-[11px] md:text-[12px] font-normal text-center">
              sparking the creator economy
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
