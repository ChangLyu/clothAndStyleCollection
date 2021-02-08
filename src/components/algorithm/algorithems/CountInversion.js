import React, { useState } from "react";
import { Input } from 'antd';
import { countInversion } from "../../../utils/algorithm.countinversion";
export default function CountInversion() {
    // todo: add other algorithem to count inversion, and do time comparision
    const [list, setList] = useState(null);
    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);
    const validateInput = (e) => {
        if (e.target.value) {

            setList(e.target.value);
        }
    }
    const handleInput = (e) => {
        var array = list.split(/[ ,]+/);;
        array = array.map(ele => parseInt(ele)).filter(val => !isNaN(val));
        setResult(countInversion(array));
    }
    const onFileChange = (e) => {
        var reader = new FileReader();
        reader.readAsText(e.target.files[0], "UTF-8");

        reader.onload = function () {
            var content = reader.result;
            setFile(content);
        };

    };

    const loadFileAsText = (e) => {
        var array = file.split(/[ ,\n]+/);;
        array = array.map(ele => parseInt(ele)).filter(val => !isNaN(val));
        setResult(countInversion(array));
    }
    return (
        <div className="count-inversion-app container">
            <h4>Count Inversion</h4>
            <div className="container">
                <h5>You can input multiple numbers in below input, and click button to count inversion.</h5>
                <Input placeholder="Please input multiply numbers, seperate by space or comma" onChange={validateInput} />
                <button className="ant-btn" onClick={handleInput}>Count Inversion By Input</button>
            </div>
            <div className="container">
                <h5>Or you can upload txt file contains numbers, seperate by new line.</h5>
                <input type="file" id="fileToLoad" onChange={onFileChange} ></input>
                <button className="ant-btn" onClick={loadFileAsText}>Count Inversion By File</button>
            </div>

            <div className="container ">
                {result && result[0] ? <div className="container display-text">Sorted Array is {JSON.stringify(result[0])}</div> : ''}
                {result && result[1] ? <div className="container">Inversion Count is {result[1]}</div> : ''}
            </div>
        </div>
    );
}
