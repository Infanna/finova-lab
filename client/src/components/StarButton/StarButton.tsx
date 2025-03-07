import { AiFillStar } from "react-icons/ai";

const StarButton = (props: { value: number; isActive: boolean }) => {
  let fillStar = "#DFE6EC";
  if (props.isActive) {
    fillStar = "yellow";
  }
  return (
    <button>
      <AiFillStar color={fillStar} />
    </button>
  );
};
export default StarButton;
