import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
    <div className="col-span-2 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <Card className={cn("w-[380px]")}>
        <CardHeader>
          <CardTitle>Your Quote Summary</CardTitle>
          <CardDescription>Here are the details of your quote</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <p className="text-sm font-medium leading-none">
              Final price:{" "}
              <span className="text-lg font-bold">${quote.finalPrice}</span>
            </p>
            <p className="text-sm font-medium leading-none">
              Total feet:{" "}
              <span className="text-lg font-bold">{quote.feet}ft</span>
            </p>
            <p className="text-sm font-medium leading-none">
              Gate:{" "}
              <span className="text-lg font-bold">
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
    </div>
  );
}
