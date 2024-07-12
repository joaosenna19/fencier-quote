import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import zod from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StepDetails } from "@/interfaces/step-details";

function PersonalDetails(props: StepDetails) {
  const customerDetailsSchema = zod.object({
    firstName: zod.string().min(2, { message: "First name is mandatory" }),
    lastName: zod
      .string()
      .min(2, { message: "Last name must be at least 2 characters" }),
    emailAddress: zod.string().email({ message: "Invalid email address" }),
    phoneNumber: zod.string().min(10),
  });

  type CustomerDetails = zod.infer<typeof customerDetailsSchema>;

  const onSubmit: SubmitHandler<CustomerDetails> = (data) => {
    localStorage.clear();
    props.onQuote([data]);
    localStorage.clear();
    props.onClickNext("GoogleMaps");
  };

  const { register, handleSubmit, formState } = useForm<CustomerDetails>({
    resolver: zodResolver(customerDetailsSchema),
  });

  const isActive = props.isActive;

  if (!isActive) {
    return null;
  }

  return (
    <div className="col-span-2 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <h2 className="text-2xl font-bold">Step 1: Project Details</h2>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        Please provide your details so we can reach you.
      </p>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="customer-name">First Name</Label>
          <Input {...register("firstName")} placeholder="" />
          {formState.errors.firstName && (
            <p
              className="text-xs text-red-400 m-1"
              style={{ fontSize: "0.50rem" }}
            >
              {formState.errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="customer-name">Last Name</Label>
          <Input {...register("lastName")} placeholder="" />
          {formState.errors.lastName && (
            <p
              className="text-xs text-red-400 m-1"
              style={{ fontSize: "0.50rem" }}
            >
              {formState.errors.lastName.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="customer-email">Email Address</Label>
          <Input {...register("emailAddress")} placeholder="" />
          {formState.errors.emailAddress && (
            <p
              className="text-xs text-red-400 m-1"
              style={{ fontSize: "0.50rem" }}
            >
              {formState.errors.emailAddress.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="customer-phone">Phone Number</Label>
          <Input {...register("phoneNumber")} placeholder="" />
          {formState.errors.phoneNumber && (
            <p
              className="text-xs text-red-400 m-1"
              style={{ fontSize: "0.50rem" }}
            >
              {formState.errors.phoneNumber.message}
            </p>
          )}
        </div>

        <div className="flex justify-between">
          <Button className="ml-auto">Next Step</Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetails;
