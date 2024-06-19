import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StepDetails } from "@/interfaces/step-details";
import zod from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AddressInput(props: StepDetails) {
  const addressDetailsSchema = zod.object({
    streetName: zod.string().min(2, { message: "Address is mandatory" }),
    city: zod.string().min(2, { message: "City is mandatory" }),
    province: zod.enum(
      [
        "AB",
        "BC",
        "MB",
        "NB",
        "NL",
        "NS",
        "NT",
        "NU",
        "ON",
        "PE",
        "QC",
        "SK",
        "YT",
      ],
      { message: "Province is mandatory" }
    ),
    postalCode: zod.string().min(6, { message: "Postal Code is mandatory" }),
    country: zod.string().min(2, { message: "Country is mandatory" }),
  });

  type AddressDetails = zod.infer<typeof addressDetailsSchema>;

  const onSubmit: SubmitHandler<AddressDetails> = (data) => {
    props.onQuote([...props.quote, data]);
    props.onClickNext("GoogleMaps");
  };

  const { register, handleSubmit, formState } = useForm<AddressDetails>({
    resolver: zodResolver(addressDetailsSchema),
  });

  const isActive = props.isActive;

  if (!isActive) {
    return null;
  }

  return (
    <div className="max-w-2xl p-6 bg-white border border-gray-300 rounded-md shadow-sm">
      <h2 className="text-lg font-semibold">Step 2: Address Details</h2>
      <p className="mt-1 text-sm text-gray-600">
        Search up your address to start quoting:
      </p>
      <form className="mt-6 grid gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor="address"
          >
            Street Name
          </label>
          <div className="relative">
            <Input
              className="pr-10"
              {...register("streetName")}
              placeholder="Ex: 1234 13th Ave SW."
            />
          </div>
          {formState.errors.streetName && (
            <p
              className="text-xs text-red-400 m-1"
              style={{ fontSize: "0.50rem" }}
            >
              {formState.errors.streetName.message}
            </p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="city">
              City
            </label>
            <Input {...register("city")} placeholder="City" />
            {formState.errors.city && (
              <p
                className="text-xs text-red-400 m-1"
                style={{ fontSize: "0.50rem" }}
              >
                {formState.errors.city.message}
              </p>
            )}
          </div>
          <div>
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="state"
            >
              Province
            </label>
            <Input {...register("province")} placeholder="Province" />
            {formState.errors.province && (
              <p
                className="text-xs text-red-400 m-1"
                style={{ fontSize: "0.50rem" }}
              >
                {formState.errors.province.message}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="zip-code"
            >
              Postal Code
            </label>
            <Input {...register("postalCode")} placeholder="Postal Code" />
            {formState.errors.postalCode && (
              <p
                className="text-xs text-red-400 m-1"
                style={{ fontSize: "0.50rem" }}
              >
                {formState.errors.postalCode.message}
              </p>
            )}
          </div>
          <div>
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="country"
            >
              Country
            </label>
            <Input {...register("country")} placeholder="Country" />
            {formState.errors.country && (
              <p
                className="text-xs text-red-400 m-1"
                style={{ fontSize: "0.50rem" }}
              >
                {formState.errors.country.message}
              </p>
            )}
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
  );
}
