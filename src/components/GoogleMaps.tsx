import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StepDetails } from "@/interfaces/step-details";
import zod from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function GoogleMaps(props: StepDetails) {
  const googleMapsSchema = zod.object({
    length: zod.number().min(1, { message: "Length is mandatory" }),
    gates: zod.number().min(0, { message: "Gates is mandatory" }),
  });

  type GoogleMaps = zod.infer<typeof googleMapsSchema>;

  const onSubmit: SubmitHandler<GoogleMaps> = (data) => {
    props.onQuote([...props.quote, data]);
    props.onClickNext("MaterialSelection");
  };

  const { register, handleSubmit, formState } = useForm<GoogleMaps>({
    resolver: zodResolver(googleMapsSchema),
  });

  const isActive = props.isActive;

  if (!isActive) {
    return null;
  }

  return (
    <div className="col-span-2 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <h2 className="text-2xl font-bold">Placeholder for Google Maps</h2>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        In production, the user will be able to draw the fence on their land,
        using Google Maps API
      </p>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Provide the length of your fence - in ft</Label>
          <Input
            {...register("length", { valueAsNumber: true })}
            placeholder=""
            type="number"
          />
          {formState.errors.length && (
            <p className="text-red-500">{formState.errors.length.message}</p>
          )}
          <Label>How many gates would you like to have?</Label>
          <Input
            {...register("gates", { valueAsNumber: true })}
            type="number"
          />
          {formState.errors.gates && (
            <p className="text-red-500">{formState.errors.gates.message}</p>
          )}
          <div className="flex justify-between m-4">
            <Button className="w-full sm:w-auto" variant="outline">
              Previous Step
            </Button>
            <Button className="ml-auto">Next Step</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default GoogleMaps;
