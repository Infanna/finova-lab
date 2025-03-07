import React from "react";
import StarButton from "../StarButton/StarButton";

const Rating = () => {
  const [rating, setRating] = React.useState(0);
  return (
    <>
      <div className="p-5 grid grid-col gap-5 h-full w-full bg-white font-medium rounded-lg text-sm shadow-md inset-shadow-xs justify-items-center">
        <span>คะแนนความพึงพอใจของสาขา</span>
        <span>
          <div className="flex flex-row gap-4 text-xl">
            {new Array(5)
              .fill(Object.keys(Array(5)), 0, 5)
              .map((_value, index) => {
                const score = index + 1;
                return (
                  <span
                    key={score}
                    onMouseDown={() => setRating(index + 1)}
                    onMouseOver={() => setRating(index + 1)}
                    onMouseOut={() => setRating(index + 1)}
                    data-testid={`star-${score}`}
                  >
                    <StarButton
                      key={score}
                      value={score}
                      isActive={score <= rating}
                      ata-testid=""
                    ></StarButton>
                  </span>
                );
              })}
          </div>
        </span>
        <span className="text-stone-300">
          คิดเป็น {rating * 20} % จากคะแนนทั้งหมด
        </span>
      </div>
    </>
  );
};
export default Rating;
