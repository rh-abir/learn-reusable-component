import "./App.css";
import NormalForm from "./components/NormalForm/NormalForm";
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

  return (
    <Container>
      <NormalForm />
    </Container>
  );
};

export default App;
