// npm install react typescript @types/react --save-dev
import './Pindutan.css'

import React from "react";
import PindutanProps from "../../models/PindutanProps";


const Pindutan = (props: PindutanProps) => {
    return (<button>{props.pangalan}</button>)
}

export default Pindutan;