import { Spinner } from "../ui/spinner";

const Loader = () => {
  return (
    <div className="min-h-screen h-full w-full flex justify-between items-center ">
      <div className="w-fit mx-auto text-primary">
        <Spinner className="size-14 text-blue-500"></Spinner>
      </div>
    </div>
  );
};

export default Loader;
