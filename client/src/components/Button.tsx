import React, { useEffect, useRef, useState } from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  icon?: string;
  style?: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, icon, style }) => {
  const [isTall, setIsTall] = useState(false);
  // const [height, setHeight] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const checkHeight = () => {
      console.log("buttonRef", buttonRef);
      if (buttonRef.current) {
        console.log("xxxx", buttonRef.current.offsetHeight);
        // ตรวจสอบความสูงของปุ่มและเปลี่ยน state
        // setHeight(buttonRef.current.offsetHeight);
        setIsTall(buttonRef.current.offsetHeight > 150);
      }
    };

    checkHeight(); // ตรวจสอบเมื่อ component mount
    window.addEventListener("resize", checkHeight); // ตรวจสอบเมื่อขนาดหน้าจอเปลี่ยน

    return () => window.removeEventListener("resize", checkHeight); // ลบ event listener เมื่อ component unmount
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      style={style}
      className={`h-full w-full bg-white font-medium rounded-lg text-sm shadow-md ${
        !isTall ? "grid grid-cols-2" : ""
      }`}
    >
      {icon && (
        <div className={`${!isTall ? "flex justify-end items-center" : "flex justify-center items-center"}`}>
          <img src={icon} className="w-15 h-15 object-contain" alt="My Icon" />
        </div>
      )}
      <div className={`${!isTall ? "flex justify-start items-center" : ""}`}>
        <div className="block break-words w-full">{label}</div>
      </div>
    </button>
  );
};
// isTall ? "justify-center items-start" : "justify-start items-center"
export default Button;
{
  /* <div class="w-32 h-32 bg-gray-200 flex justify-center items-center">
  <img src="https://via.placeholder.com/50" alt="Icon" class="w-12 h-12 object-contain" />
</div> */
}
