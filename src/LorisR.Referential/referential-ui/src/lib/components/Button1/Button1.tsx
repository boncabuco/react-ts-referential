// npm install react typescript @types/react --save-dev

import React from "react";

interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return (<button>{props.label} 1</button>)
}

export default Button;