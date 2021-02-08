import React, { useState } from "react";
import { Input } from 'antd';
import { quickSortFirstPivot, quickSortLastPivot, quickSortMedianPivot } from "../../../utils/algorithm.quicksort";
import { logger } from "../../../utils/logger";
export default function QuickSort() {
    // todo: add other algorithem to count inversion, and do time comparision
    const [list, setList] = useState(null);
    const [file, setFile] = useState(null);
    const [quickSortLastPivotResult, setQuickSortLastPivotResult] = useState(null); //[result, count]
    const [quickSortFirstPivotResult, setQuickSortFirstPivotResult] = useState(null); //[result, count]
    const [quickSortMedianPivotResult, setQuickSortMedianPivotResult] = useState(null); //[result, count]
    const validateInput = (e) => {
        if (e.target.value) {
            setList(e.target.value);
        }
    }
    const handleSort = (e) => {
        var array = list.split(/[ ,]+/);;
        array = array.map(ele => parseInt(ele)).filter(val => !isNaN(val));
        setQuickSortLastPivotResult(quickSortLastPivot(Array.from(array), 0, array.length - 1, 0));
        setQuickSortFirstPivotResult(quickSortFirstPivot(Array.from(array), 0, array.length - 1, 0));
        setQuickSortMedianPivotResult(quickSortMedianPivot(Array.from(array), 0, array.length - 1, 0));
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
        var array = file.split(/[ ,\n]+/);
        array = array.map(ele => parseInt(ele)).filter(val => !isNaN(val));
        setQuickSortLastPivotResult(quickSortLastPivot(Array.from(array), 0, array.length - 1, 0));
        setQuickSortFirstPivotResult(quickSortFirstPivot(Array.from(array), 0, array.length - 1, 0));
        setQuickSortMedianPivotResult(quickSortMedianPivot(Array.from(array), 0, array.length - 1, 0));
    }
    return (
        <div className="count-inversion-app container">
            <h4>Quick Sort</h4>
            <div className="container">
                <h5>You can input multiple numbers in below input, and click button to quick sort.</h5>
                <Input placeholder="Please input multiply numbers, seperate by space or comma" onChange={validateInput} />
                <button className="ant-btn" onClick={handleSort}>Quick Sort</button>
            </div>
            <div className="container">
                <h5>Or you can upload txt file contains numbers, seperate by new line.</h5>
                <input type="file" id="fileToLoad" onChange={onFileChange} ></input>
                <button className="ant-btn" onClick={loadFileAsText}>Quick Sort By File</button>
            </div>
            {quickSortFirstPivotResult && (
                <div className="container ">
                    <p>By First Pivot</p>
                    <div className="container ">
                        {quickSortFirstPivotResult[0] && <div className="container display-text">Sorted Array is {JSON.stringify(quickSortFirstPivotResult[0])}</div>}
                        {quickSortFirstPivotResult[1] ? <div className="container">Comparison Count is {quickSortFirstPivotResult[1]}</div> : ''}
                    </div>
                </div>
            )}
            { quickSortLastPivotResult && (
                <div className="container ">
                    <p>By Last Pivot</p>
                    <div className="container ">
                        {quickSortLastPivotResult[0] && <div className="container display-text">Sorted Array is {JSON.stringify(quickSortLastPivotResult[0])}</div>}
                        {quickSortLastPivotResult[1] ? <div className="container">Comparison Count is {quickSortLastPivotResult[1]}</div> : ''}
                    </div>

                </div>
            )}
            { quickSortMedianPivotResult && (
                <div className="container ">
                    <p>By Median-of-three Pivot</p>
                    <div className="container ">
                        {quickSortMedianPivotResult[0] && <div className="container display-text">Sorted Array is {JSON.stringify(quickSortMedianPivotResult[0])}</div>}
                        {quickSortMedianPivotResult[1] ? <div className="container">Comparison Count is {quickSortMedianPivotResult[1]}</div> : ''}
                    </div>

                </div>
            )}

        </div>
    );
}
