import Pindutan from '../components/Pindutan/Pindutan'
import Sulatan from '../components/Sulatan/Sulatan'
import React from "react";

const Pahina = ({ }) => {
    return (
        <div className='pahina'>
            <Sulatan sulat='Sulat ka dito'></Sulatan>
            <Pindutan pangalan='Pindot'></Pindutan>
        </div>
    )
}

export default Pahina;