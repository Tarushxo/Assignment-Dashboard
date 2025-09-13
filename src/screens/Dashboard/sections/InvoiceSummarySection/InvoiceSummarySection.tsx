import { ChevronLeftIcon } from "lucide-react";
import user from "../../../../assets/user.svg";
import { Avatar, AvatarImage, AvatarFallback } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

export const InvoiceSummarySection = (): JSX.Element => {
  return (
    <div className="relative z-10 px-4 sm:px-6 md:px-8 py-4">
      <nav className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mb-1">
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 text-slate-950 hover:bg-white/20 p-2 font-normal"
        >
          <ChevronLeftIcon size={40} className="text-slate-950" />
          <span className="text-[20px] bottom-10">Back</span>
        </Button>

        <h1 className="text-slate-950 text-[22px] font-semibold">Dashboard</h1>

        <Avatar className="w-12 h-12 bottom-2">
          <AvatarImage src={user} alt="User profile" />
          <AvatarFallback className="bg-white/20 text-white text-sm">U</AvatarFallback>
        </Avatar>
      </nav>
    </div>
  );
};
