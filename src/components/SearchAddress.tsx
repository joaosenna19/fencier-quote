import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AddressInput(
  props: {
    isActive : boolean
  }
) 
{

  const isActive = props.isActive

  if(!isActive) {
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
          <label className="text-sm font-medium text-gray-700" htmlFor="address">
            Address
          </label>
          <div className="relative">
            <Input className="pr-10" id="address" placeholder="Enter your address" />
            <Button className="absolute right-2 top-1/2 -translate-y-1/2" size="icon" type="button">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </Button>
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
            <label className="text-sm font-medium text-gray-700" htmlFor="state">
              State
            </label>
            <Input id="state" placeholder="State" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="zip-code">
              Zip Code
            </label>
            <Input id="zip-code" placeholder="Zip Code" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="country">
              Country
            </label>
            <Input id="country" placeholder="Country" />
          </div>
        </div>
        <div className="flex justify-between">
          <Button className="w-full sm:w-auto" variant="outline">
            Previous Step
          </Button>
          <Button className="w-full sm:w-auto">Next Step</Button>
        </div>
      </form>
    </div>
  )
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}