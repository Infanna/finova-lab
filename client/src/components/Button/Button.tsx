import React, { useEffect, useRef, useState } from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  icon?: string;
  style?: React.CSSProperties;
  iconReact?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  icon,
  style,
  iconReact,
}) => {
  const [isTall, setIsTall] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const checkHeight = () => {
      if (buttonRef.current) {
        setIsTall(buttonRef.current.offsetHeight > 150);
      }
    };

    checkHeight();
    window.addEventListener("resize", checkHeight);

    return () => window.removeEventListener("resize", checkHeight);
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      style={style}
      className="h-full w-full bg-white font-medium rounded-lg text-sm shadow-md inset-shadow-xs"
    >
      <div className="flex justify-center items-center">
        {icon && (
          <img src={icon} className="w-15 h-15 object-contain" alt="My Icon" />
        )}
        {iconReact && <div className="text-ttb-blue text-3xl">{iconReact}</div>}
        {!isTall && (
          <div className="block break-words whitespace-pre-line">{label}</div>
        )}
      </div>
      {isTall && (
        <div className="flex justify-start items-center">
          <div className="block break-words w-full">{label}</div>
        </div>
      )}
    </button>
  );
};

export default Button;
