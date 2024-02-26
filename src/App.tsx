import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import "./App.css";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./components/ReuseableForm";
import Container from "./components/ui/Container";

const App = () => {
  // const [modal, setModal] = useState(false);

  // const handleModalClose = () => {
  //   setModal((prev) => !prev);
  // };

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log(e.target);
  //   if (true) {
  //     handleModalClose();
  //   }
  // };

  // return (
  //   <Container>
  //     <div className="h-screen  w-full flex justify-center items-center">
  //       <Button onClick={() => setModal((prev) => !prev)} variant="solid">
  //         Opne Modal
  //       </Button>
  //       <Modal isOpen={modal} onClose={handleModalClose}>
  //         <Modal.Header>
  //           <h1>This is Header</h1>
  //           <Modal.CloseButton />
  //         </Modal.Header>
  //         <form onSubmit={handleSubmit}>
  //           <input type="text" />
  //           <button type="submit">Submit</button>
  //         </form>
  //       </Modal>
  //     </div>
  //   </Container>
  // );

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TTest>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const TextSchema = z.object({
    name: z.string(),
    emali: z.string().email(),
  });

  type TTest = z.infer<typeof TextSchema>;

  return (
    <Container>
      {/* <NormalForm /> */}
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <FormSection>
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
          <Input
            type="email"
            register={register("email")}
            errors={errors}
            label="Email"
          ></Input>
        </FormSection>
        <FormSubmit></FormSubmit>
      </Form>
    </Container>
  );
};

export default App;
