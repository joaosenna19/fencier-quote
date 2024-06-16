import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface QuoteSummaryProps {
  quote: any;
  isActive: boolean;
}

export default function QuoteSummary(props: QuoteSummaryProps) {
  const { quote, isActive } = props;

  if (!isActive) {
    return null;
  }

  return (
    <Card className="col-span-2 w-full rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <CardHeader className="">
        <CardTitle>Your Quote Summary</CardTitle>
        <CardDescription>Here are the details of your quote</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 ">
        <div className=" flex rounded-md border p-4 flex-col">
          <p className="text-sm font-medium leading-none flex flex-col mb-3">
            Final price:
            <span className="text-3xl font-bold mt-2">${quote.finalPrice}</span>
          </p>
          <p className="text-sm font-medium leading-none flex flex-col mb-3">
            Total feet:
            <span className="text-3xl font-bold mt-2">{quote.feet}ft</span>
          </p>
          <p className="text-sm font-medium leading-none flex flex-col mb-3">
            Gate:
            <span className="text-3xl font-bold mt-2">
              {quote.singleGate ? "Single" : "Double"}
            </span>
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm font-medium leading-none">
          Our team will contact you soon!
        </p>
      </CardFooter>
    </Card>
  );
}
