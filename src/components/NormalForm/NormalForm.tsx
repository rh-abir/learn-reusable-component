import { FieldValues, FormProvider, useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import InputFields from "./InputFields";
import { SignupSchema, TNormalrlForm } from "./validation";

const NormalForm = () => {
  const methods = useForm<TNormalrlForm>({
    resolver: zodResolver(SignupSchema),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  console.log(watch("name"));

  const double = true;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(
          " border border-gray-300 rounded-lg shadow-md w-full p-5 mx-auto",
          {
            "max-w-5xl": double,
            "max-w-md": !double,
          }
        )}
      >
        <div
          className={cn(" grid grid-cols-1 justify-items-center  gap-6", {
            "md:grid-cols-2": double,
          })}
        >
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              Name
            </label>
            <InputFields />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input type="text" id="name" {...register("name")} />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="w-full  max-w-md">
            <label className="block" htmlFor="email">
              Eamil
            </label>
            <input type="text" id="email" {...register("email")} />
            {errors.email && (
              <span className="text-xs text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="w-full  max-w-md">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { minLength: 8 })}
            />
            {errors.password && (
              <span className="text-xs text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
        </div>

        <div
          className={cn(" grid grid-cols-1 justify-items-center  gap-6 my-8", {
            "md:grid-cols-2 col-start-2": double,
          })}
        >
          <div className=" w-full max-w-md col-start-1  md:col-start-2 flex justify-end">
            <Button className="w-full md:w-fit" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default NormalForm;
