import React, { useState } from "react";
import { Button, Input } from 'antd';
import { karatsubaMul, multiplyByBigInitLib } from "../../../utils/math.algorithm";
export default function FastMultiplication() {
    const [firstValue, setFirstValue] = useState(null);
    const [secondValue, setSecondValue] = useState(null);
    const [karaCalcResult, setKaraCalcResult] = useState({ result: null, time: null });
    const [norCalcResult, setNorCalcResult] = useState({ result: null, time: null });
    const [norCalcResultByBigInt, setNorCalcResultByBigInt] = useState({ result: null, time: null });
    const handleFirst = (e) => {
        if (e.target.value) {
            setFirstValue(e.target.value);
        }
    }
    const handleSecond = (e) => {
        if (e.target.value) {
            setSecondValue(e.target.value);
        }
    }
    const handleKaratsubaMul = (e) => {
        const t0 = performance.now();
        const result = karatsubaMul(firstValue, secondValue);
        const t1 = performance.now();
        setKaraCalcResult({ result: result, time: t1 - t0 });
    }

    const handleNormalMul = (e) => {
        const t0 = performance.now();
        const result = firstValue * secondValue;
        const t1 = performance.now();
        setNorCalcResult({ result: result, time: t1 - t0 });
    }

    const handleNormalMulWithBigInt = (e) => {
        const t0 = performance.now();
        const result = multiplyByBigInitLib(firstValue, secondValue);
        const t1 = performance.now();
        setNorCalcResultByBigInt({ result: result, time: t1 - t0 });
    }


    return (
        <div className="container" >
            <div className="container"  >
                <div className="container" >
                    <Input placeholder="Input first number" onChange={handleFirst} ></Input>
                    <Input placeholder="Input second number" onChange={handleSecond}></Input>
                </div>
                <div className="container" >
                    <Button onClick={handleKaratsubaMul}>Karatsuba Multiply</Button>
                    <Button onClick={handleNormalMul}>Normal Multiply By JS *</Button>
                    <Button onClick={handleNormalMulWithBigInt}>Normal Multiply By Big Int Library</Button>
                </div>
            </div>
            <div className="container" >
                <div>Karatsuba Result: {karaCalcResult.result ? karaCalcResult.result : 'None'}</div>
                <div>Karatsuba Calculate Time: {karaCalcResult.time ? karaCalcResult.time : 'None'}</div>
                <div>Normal Result by using *: {norCalcResult.result ? norCalcResult.result : 'None'}</div>
                <div>Normal Calculate Time by using *: {isNaN(norCalcResult.time )? 'None': norCalcResult.time }</div>
                <div>Normal Result by using big int library directly: {norCalcResultByBigInt.result ? norCalcResultByBigInt.result : 'None'}</div>
                <div>Normal Calculate Time by using big int library directly: {isNaN(norCalcResultByBigInt.time )? 'None': norCalcResultByBigInt.time }</div>
            </div>
        </div >
    );
}
