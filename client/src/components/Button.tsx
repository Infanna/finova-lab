import React, { useEffect, useRef, useState } from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  icon?: string;
  style?: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, icon, style }) => {
  const [isTall, setIsTall] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const checkHeight = () => {
      if (buttonRef.current) {
        setIsTall(buttonRef.current.offsetHeight > 150);
      }
    };

    checkHeight();
    window.addEventListener("resize", checkHeight); // ตรวจสอบเมื่อขนาดหน้าจอเปลี่ยน

    return () => window.removeEventListener("resize", checkHeight); // ลบ event listener เมื่อ component unmount
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      style={style}
      className="h-full w-full bg-white font-medium rounded-lg text-sm shadow-md"
    >
      {icon && (
        <div className="flex justify-center items-center">
          <img src={icon} className="w-15 h-15 object-contain" alt="My Icon" />
          {!isTall && <div className="block break-words whitespace-pre-line">{label}</div>}
        </div>
      )}
      {isTall && (
        <div className="flex justify-start items-center">
          <div className="block break-words w-full">{label}</div>
        </div>
      )}
    </button>
  );
};

export default Button;
