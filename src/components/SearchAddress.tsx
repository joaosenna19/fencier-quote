import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface StepDetails {
  isActive: boolean;
  onClickNext: (nextStep: string) => void;
}

export default function AddressInput(props: StepDetails) {
  const handleNext = () => {
    props.onClickNext("GoogleMaps");
  };

  const isActive = props.isActive;

  if (!isActive) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white border border-gray-300 rounded-md shadow-sm">
      <h2 className="text-lg font-semibold">Step 2: Address Details</h2>
      <p className="mt-1 text-sm text-gray-600">
        Search up your address to start quoting:
      </p>
      <form className="mt-6 grid gap-6">
        <div>
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor="address"
          >
            Address
          </label>
          <div className="relative">
            <Input
              className="pr-10"
              id="address"
              placeholder="Enter your address"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="city">
              City
            </label>
            <Input id="city" placeholder="City" />
          </div>
          <div>
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="state"
            >
              State
            </label>
            <Input id="state" placeholder="State" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="zip-code"
            >
              Zip Code
            </label>
            <Input id="zip-code" placeholder="Zip Code" />
          </div>
          <div>
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="country"
            >
              Country
            </label>
            <Input id="country" placeholder="Country" />
          </div>
        </div>
        <div className="flex justify-between">
          <Button className="w-full sm:w-auto" variant="outline">
            Previous Step
          </Button>
          <Button className="w-full sm:w-auto" onClick={handleNext}>
            Next Step
          </Button>
        </div>
      </form>
    </div>
  );
}
