import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import plus from "../../../../assets/plus.svg";
import frame1 from "../../../../assets/frame1.svg";
import frame2 from "../../../../assets/frame2.svg";
import frame5 from "../../../../assets/frame5.svg";
import image from "../../../../assets/image.svg";
import vector from "../../../../assets/vector.svg";
import frame from "../../../../assets/frame.svg"
const timePeriods = [
  { id: "1month", label: "1Month", selected: false },
  { id: "3months", label: "3Months", selected: true },
  { id: "1year", label: "1Year", selected: false },
  { id: "custom", label: "Custom", selected: false },
];

const invoiceData = [
  {
    id: 1,
    clientName: "Client Name",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "update",
    statusColor: "bg-primary-colour-purple",
    statusText: "Update Status",
    statusTextColor: "text-white",
    hasDropdown: true,
  },
  {
    id: 2,
    clientName: "Client Name",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "unpaid",
    statusColor: "bg-light-grey",
    statusText: "Unpaid",
    statusTextColor: "text-sparko-dark-grey",
  },
  {
    id: 3,
    clientName: "Income Trend",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "disputed",
    statusColor: "bg-[#ffb0b0]",
    statusText: "Disputed",
    statusTextColor: "text-colorspink",
  },
  {
    id: 4,
    clientName: "Income Trend",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "paid",
    statusColor: "bg-[#9cefb8]",
    statusText: "Paid",
    statusTextColor: "text-colorsgreen",
  },
  {
    id: 5,
    clientName: "Income Trend",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "paid",
    statusColor: "bg-[#9cefb8]",
    statusText: "Paid",
    statusTextColor: "text-colorsgreen",
  },
  {
    id: 6,
    clientName: "Income Trend",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "partially-paid",
    statusColor: "bg-[#fffae5]",
    statusText: "Partially Paid",
    statusTextColor: "text-[#ffcc00]",
  },
  {
    id: 7,
    clientName: "Income Trend",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "paid",
    statusColor: "bg-[#9cefb8]",
    statusText: "Paid",
    statusTextColor: "text-colorsgreen",
  },
  {
    id: 8,
    clientName: "Income Trend",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "overdue",
    statusColor: "bg-[#ffb0b0]",
    statusText: "Overdue",
    statusTextColor: "text-colorspink",
    hasIcon: true,
  },
  {
    id: 9,
    clientName: "Income Trend",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "awaited",
    statusColor: "bg-[#fffae5]",
    statusText: "Awaited",
    statusTextColor: "text-[#ffcc00]",
    hasIcon: true,
  },
  {
    id: 10,
    clientName: "Income Trend",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "draft",
    statusColor: "bg-light-grey",
    statusText: "Draft",
    statusTextColor: "text-sparko-dark-grey",
    hasEditIcon: true,
  },
  {
    id: 11,
    clientName: "Income Trend",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "paid",
    statusColor: "bg-[#9cefb8]",
    statusText: "Paid",
    statusTextColor: "text-colorsgreen",
  },
];

export const CreateInvoiceSection = (): JSX.Element => {
  const [selectedPeriods, setSelectedPeriods] = useState(
    timePeriods.reduce(
      (acc, period) => {
        acc[period.id] = period.selected;
        return acc;
      },
      {} as Record<string, boolean>,
    ),
  );

  const handlePeriodToggle = (periodId: string) => {
    setSelectedPeriods((prev) => ({
      ...prev,
      [periodId]: !prev[periodId],
    }));
  };

  return (
    <div className="flex flex-col w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto items-center gap-6 relative translate-y-[-1rem] animate-fade-in opacity-0 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col w-full items-start gap-3 relative flex-[0_0_auto]">
        <Card className="w-full bg-light-grey rounded-[32px] border-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <CardContent className="flex gap-3.5 px-3 py-4 flex-col items-center">
            <img
              className="relative w-16 h-16"
              alt="Frame"
              src={plus}
            />

            <div className="flex flex-col items-center gap-2 w-full">
              <div className="bg-[linear-gradient(159deg,rgba(221,42,123,1)_0%,rgba(151,71,255,1)_41%,rgba(51,76,202,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-1 font-[number:var(--heading-1-font-weight)] text-transparent text-[length:var(--heading-1-font-size)] text-center tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] [font-style:var(--heading-1-font-style)]">
                Create New Invoice
              </div>

              <div className="w-72 [font-family:'Roboto',Helvetica] font-normal text-sparko-dark-grey text-xs text-center tracking-[0] leading-[normal]">
                Start by creating and sending new invoice
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col items-center justify-center gap-2.5 px-0 py-3 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="inline-flex flex-col items-center gap-6">
            <div className="inline-flex items-start">
              <div className="inline-flex h-5 items-center justify-center">
                <div className="[font-family:'Roboto',Helvetica] font-normal text-primary-colour-purple text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                  Or Upload an existing invoice and set payment reminder
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card className="w-full bg-white-neutral rounded-2xl border-2 border-solid border-[#f2f2f2] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <CardContent className="flex flex-col items-start gap-3 px-3 py-4">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="inline-flex items-start gap-1">
                <div className="flex flex-col w-[188px] items-start gap-2">
                  <div className="inline-flex flex-col items-start gap-1">
                    <div className="inline-flex h-[18px] items-center gap-1">
                      <div className="font-label font-[number:var(--label-font-weight)] text-sparko-dark-grey text-[length:var(--label-font-size)] tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] whitespace-nowrap [font-style:var(--label-font-style)]">
                        Time Period
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inline-flex flex-col items-start gap-2">
                  <div className="inline-flex flex-col items-start gap-1">
                    <div className="inline-flex h-[18px] items-center gap-1">
                      <div className="font-caption font-[number:var(--caption-font-weight)] text-sparko-dark-grey text-[length:var(--caption-font-size)] text-right tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] whitespace-nowrap [font-style:var(--caption-font-style)]">
                        dd:mm:yyyy
                      </div>

                      <div className="font-label font-[number:var(--label-font-weight)] text-sparko-dark-grey text-[length:var(--label-font-size)] text-right tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] whitespace-nowrap [font-style:var(--label-font-style)]">
                        -
                      </div>

                      <div className="font-caption font-[number:var(--caption-font-weight)] text-sparko-dark-grey text-[length:var(--caption-font-size)] text-right tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] whitespace-nowrap [font-style:var(--caption-font-style)]">
                        dd:mm:yyyy
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-start gap-[8px_8px] w-full">
                {timePeriods.map((period) => (
                  <Button
                    key={period.id}
                    variant="outline"
                    size="sm"
                    onClick={() => handlePeriodToggle(period.id)}
                    className={`h-auto inline-flex flex-col items-center justify-center gap-0.5 px-3 py-1 rounded-2xl border border-solid transition-colors ${
                      selectedPeriods[period.id]
                        ? "border-purple-100 bg-[linear-gradient(158deg,rgba(221,42,123,0.05)_0%,rgba(151,71,255,0.05)_52%,rgba(51,76,202,0.05)_100%)]"
                        : "border-[#f2f2f2] bg-transparent"
                    }`}
                  >
                    <div className="inline-flex flex-col items-center gap-2">
                      <div
                        className={`mt-[-1.00px] font-paragraph-paragraph-body-large font-[number:var(--paragraph-paragraph-body-large-font-weight)] text-[length:var(--paragraph-paragraph-body-large-font-size)] text-center tracking-[var(--paragraph-paragraph-body-large-letter-spacing)] leading-[var(--paragraph-paragraph-body-large-line-height)] whitespace-nowrap [font-style:var(--paragraph-paragraph-body-large-font-style)] ${
                          selectedPeriods[period.id]
                            ? "bg-[linear-gradient(159deg,rgba(221,42,123,1)_0%,rgba(151,71,255,1)_41%,rgba(51,76,202,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent"
                            : "text-sparko-dark-grey"
                        }`}
                      >
                        {period.label}
                      </div>
                    </div>
                    {period.id === "1year" && (
                      <img
                        className="w-5 h-[18px]"
                        alt="Vector"
                        src={vector}
                      />
                    )}
                    {period.id === "custom" && (
                      <img
                        className="w-5 h-5"
                        alt="Frame"
                        src={frame}
                      />
                    )}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full bg-white-neutral rounded-2xl border-2 border-solid border-[#f2f2f2] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <CardContent className="flex items-center gap-1 px-3 py-4">
            <div className="inline-flex flex-col items-start gap-2">
              <div className="flex flex-col w-52 gap-1 items-start">
                <div className="inline-flex h-[18px] items-center gap-1">
                  <div className="font-label font-[number:var(--label-font-weight)] text-sparko-dark-grey text-[length:var(--label-font-size)] tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] whitespace-nowrap [font-style:var(--label-font-style)]">
                    Total Earnings
                  </div>
                </div>
              </div>

              <div className="w-52 text-[length:var(--heading-2-font-size)] font-heading-2 font-[number:var(--heading-2-font-weight)] text-primary-colour-purple tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                $1,25,000
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="inline-flex gap-3 items-start translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <Card className="bg-white-neutral rounded-2xl border-2 border-solid border-[#f2f2f2]">
            <CardContent className="inline-flex items-center gap-1 px-3 py-4">
              <div className="flex flex-col w-[148px] items-start gap-3">
                <div className="inline-flex flex-col items-start gap-1">
                  <div className="inline-flex h-[18px] items-center gap-1">
                    <div className="font-label font-[number:var(--label-font-weight)] text-sparko-dark-grey text-[length:var(--label-font-size)] tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] whitespace-nowrap [font-style:var(--label-font-style)]">
                      Payment Awaited
                    </div>
                  </div>
                </div>

                <div className="w-[84px] text-[length:var(--heading-3-font-size)] font-heading-3 font-[number:var(--heading-3-font-weight)] text-primary-colour-purple tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
                  $25,000
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white-neutral rounded-2xl border-2 border-solid border-[#f2f2f2]">
            <CardContent className="inline-flex items-center gap-1 px-3 py-4">
              <div className="flex flex-col w-[148px] items-start gap-3">
                <div className="inline-flex flex-col items-start gap-1">
                  <div className="inline-flex h-[18px] items-center gap-1">
                    <div className="font-label font-[number:var(--label-font-weight)] text-sparko-dark-grey text-[length:var(--label-font-size)] tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] whitespace-nowrap [font-style:var(--label-font-style)]">
                      Payment Overdue
                    </div>
                  </div>
                </div>

                <div className="w-[84px] text-[length:var(--heading-3-font-size)] font-heading-3 font-[number:var(--heading-3-font-weight)] text-primary-colour-purple tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
                  $25,000
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="w-full bg-white-neutral rounded-2xl border-2 border-solid border-[#f2f2f2] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
          <CardContent className="flex items-center gap-1 px-3 py-4">
            <div className="flex w-[334px] items-start gap-6">
              <div className="flex flex-col w-[334px] gap-1 items-start">
                <div className="flex h-[18px] items-center gap-1 w-full">
                  <div className="font-label font-[number:var(--label-font-weight)] text-grey-text-colour-for-brand text-[length:var(--label-font-size)] tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] whitespace-nowrap [font-style:var(--label-font-style)]">
                    Income Trend
                  </div>
                </div>

                <div className="flex flex-col items-start gap-1 w-full">
                  <div className="w-[299px] mt-[-1.00px] font-paragraph-paragraph-body-large font-[number:var(--paragraph-paragraph-body-large-font-weight)] text-grey-text-colour-for-brand text-[length:var(--paragraph-paragraph-body-large-font-size)] tracking-[var(--paragraph-paragraph-body-large-letter-spacing)] leading-[var(--paragraph-paragraph-body-large-line-height)] [font-style:var(--paragraph-paragraph-body-large-font-style)]">
                    Your monthly income and growth for the last 6 months.
                  </div>

                  <div className="flex gap-3.5 px-3 py-0 w-full bg-white-neutral rounded-xl flex-col items-center">
                    <img
                      className="w-[334px] h-[314px] ml-[-12.00px] mr-[-12.00px] object-cover"
                      alt="Image"
                      src={image}
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col items-start gap-2.5 p-2.5 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
        <div className="flex items-center gap-28 w-full">
          <div className="w-[221px] font-heading-3 font-[number:var(--heading-3-font-weight)] text-sparko-dark-grey text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
            Your Invoices
          </div>

          <img
            className="w-6 h-6"
            alt="Frame"
            src={frame5}
          />
        </div>

        {invoiceData.map((invoice, index) => (
          <Card
            key={invoice.id}
            className={`w-full bg-white-neutral rounded-2xl border-2 border-solid border-[#f2f2f2] translate-y-[-1rem] animate-fade-in opacity-0`}
            style={
              {
                "--animation-delay": `${1600 + index * 100}ms`,
              } as React.CSSProperties
            }
          >
            <CardContent className="flex items-center gap-1 px-3 py-4">
              <div className="inline-flex items-center gap-3 w-full">
                <div
                  className={`flex flex-col gap-1 items-start ${invoice.status === "draft" ? "w-[209px]" : invoice.status === "partially-paid" || invoice.status === "awaited" ? "w-[209px]" : "w-[232px]"}`}
                >
                  <div className="inline-flex h-[18px] items-center gap-1">
                    <div className="font-label font-[number:var(--label-font-weight)] text-grey-text-colour-for-brand text-[length:var(--label-font-size)] tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] whitespace-nowrap [font-style:var(--label-font-style)]">
                      {invoice.clientName}
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-1 w-full">
                    <div className="mt-[-1.00px] font-paragrapgh-body-small font-[number:var(--paragrapgh-body-small-font-weight)] text-sparko-dark-grey text-[length:var(--paragrapgh-body-small-font-size)] tracking-[var(--paragrapgh-body-small-letter-spacing)] leading-[var(--paragrapgh-body-small-line-height)] whitespace-nowrap [font-style:var(--paragrapgh-body-small-font-style)]">
                      {invoice.amount}, Due: {invoice.dueDate}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 ml-auto">
                  <Badge
                    className={`${invoice.statusColor} inline-flex items-center justify-center gap-[7.5px] px-[15px] py-[9px] rounded-3xl border-0 hover:${invoice.statusColor}`}
                  >
                    <span
                      className={`${invoice.statusTextColor} mt-[-0.75px] [font-family:'Roboto',Helvetica] font-medium text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap`}
                    >
                      {invoice.statusText}
                    </span>
                    {invoice.hasDropdown && (
                      <ChevronDownIcon className="w-[8.81px] h-[4.4px] text-white" />
                    )}
                  </Badge>

                  {invoice.hasIcon && (
                    <img
                      className="w-6 h-6"
                      alt="Frame"
                      src={frame2}
                    />
                  )}

                  {invoice.hasEditIcon && (
                    <img
                      className="w-5 h-5"
                      alt="Frame"
                      src={frame1}
                    />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
