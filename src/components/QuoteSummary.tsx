import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DetailItem from "@/components/DetailItem";
import {
  formatPhoneNumber,
  formatPostalCode,
} from "@/functions/formattingFunctions";

interface QuoteSummaryProps {
  quote: any;
  isActive: boolean;
}

export default function QuoteSummary(props: QuoteSummaryProps) {
  const { quote, isActive } = props;

  const address =
    quote?.customerInfo?.address[0].street +
    ", " +
    quote?.customerInfo?.address[0].city +
    ", " +
    quote?.customerInfo?.address[0].province +
    ", " +
    formatPostalCode(quote?.customerInfo?.address[0].postalCode);

  if (!isActive) {
    return null;
  }

  return (
    <Card className="col-span-2   rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <CardHeader className="">
        <CardTitle>Your Quote Summary</CardTitle>
        <CardDescription>
          {quote?.customerInfo.firstName}, here are the details of your quote:
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 ">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-col">
            <DetailItem label="Final price:" value={`$${quote?.finalPrice}`} />
            <DetailItem label="Total feet:" value={`${quote?.feet}ft`} />
            <DetailItem label="Email:" value={quote?.customerInfo.email} />
            <DetailItem
              label="Phone Number:"
              value={formatPhoneNumber(quote?.customerInfo.phoneNumber)}
            />
            <DetailItem label="Address" value={address} />
          </div>
          <div className="flex flex-col">
            <DetailItem label="Material" value={quote?.material.name} />
            <DetailItem label="Style" value={quote?.style.name} />
            <DetailItem label="Color" value={quote?.color.name} />
            <DetailItem label="Height" value={quote?.height} />

            <DetailItem
              label="Gate:"
              value={quote.singleGate ? "Single" : "Double"}
            />
          </div>
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
