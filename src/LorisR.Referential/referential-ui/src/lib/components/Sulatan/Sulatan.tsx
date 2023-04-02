// npm install react typescript @types/react --save-dev
import './Sulatan.css'

import React from "react";
import SulatanProps from "../../models/SulatanProps";

const Sulatan = (props: SulatanProps) => {
    return (<input type="text" value={props.sulat}></input>)
}

export default Sulatan;