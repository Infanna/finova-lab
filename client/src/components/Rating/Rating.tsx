import { AiFillStar } from "react-icons/ai";

const Rating = () => {
  return (
    <>
      <div className="p-5 grid grid-col gap-5 h-full w-full bg-white font-medium rounded-lg text-sm shadow-md inset-shadow-xs justify-items-center">
        <span>คะแนนความพึงพอใจของสาขา</span>
        <span className="flex flex-row gap-4 text-xl ">
          <AiFillStar color="yellow" /> <AiFillStar color="yellow" />{" "}
          <AiFillStar color="yellow" /> <AiFillStar color="yellow" />{" "}
          <AiFillStar color="yellow" />
        </span>
        <span className="text-stone-300">คิดเป็น 80% จากคะแนนทั้งหมด</span>
      </div>
    </>
  );
};
export default Rating;
