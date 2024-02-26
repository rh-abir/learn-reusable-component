import { useContext } from "react";
import { FormElementContext } from ".";
import cn from "../../utils/cn";
import Button from "../ui/Button";

export const FormSubmit = () => {
  const { double } = useContext(FormElementContext);

  return (
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
  );
};
