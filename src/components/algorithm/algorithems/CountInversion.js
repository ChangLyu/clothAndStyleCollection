import React, { useState } from "react";
import { Input } from 'antd';
import { countInversion } from "../../../utils/algorithm.countinversion";
export default function CountInversion() {
    const [list, setList] = useState(null);
    const [result, setResult] = useState(null);
    const validateInput = (e) => {
        if (e.target.value) {

            setList(e.target.value);
        }
    }
    const handleInput = (e) => {
        var array = list.split(/[ ,]+/);;
        array = array.map(ele => parseInt(ele));
        setResult(countInversion(array));
    }
    return (
        <div className="count-inversion-app container">
            <h4>Count Inversion</h4>
            <Input placeholder="Please input multiply numbers, seperate by space or comma" onChange={validateInput} />

            <button className="ant-btn" onClick={handleInput}>Count Inversion</button>
            {result && result[0] ? <div className="container">Sorted Array is {JSON.stringify(result[0])}</div> : ''}
            {result && result[1] ? <div className="container">Inversion Count is {result[1]}</div> : ''}
        </div>
    );
}
