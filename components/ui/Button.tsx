import React from "react";

interface Props {
//   border?: string;
//   color?: string;
//   height?: string;
//   radius?: string
//   width?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<Props> = ({ 
    // border,
    // color,
    // height,
    // radius,
    // width,
    onClick,
    children,
  }) => { 
  return (
    <button 
        onClick={onClick}
        className="px-8 py-2 bg-primary text-white rounded border-2 cursor-pointer border-primary hover:bg-transparent hover:text-primary"
        style={{
            // backgroundColor: color,
            // border,
            // borderRadius: radius,
            // borderColor: color,
            // height,
            // width,
        }}
    >
        {children}
    </button>
  );
}

export default Button;