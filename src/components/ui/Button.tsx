import cn from "../../utils/cn";

type TButtonClass = {
  className?: string;
  variant?: string;
};
const Button = ({ className, variant }: TButtonClass) => {
  return (
    <button
      className={cn(
        "bg-red-500",
        {
          "bg-opacity-30 border border-green-500": variant,
        },
        className
      )}
    >
      Click
    </button>
  );
};

export default Button;
