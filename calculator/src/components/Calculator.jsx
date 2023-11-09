import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

function Calculator() {
    const [display, setDisplay] = useState('');

    const handleClick = (value) => {
        setDisplay(display + value);
    }

    const handleClear = () => {
        setDisplay('');
    }

    const handleRemoveCharacter = (value) => {
        setDisplay(value.slice(0, -1));
    }

    const handleCalculate = () => {
        try {
            setDisplay(eval(display).toString());
        } catch (error) {
            setDisplay('Erro: Calculo invalido!')
        }
    }

    const buttons = ['(', ')', '+', '1', '2', '3', '-', '4', '5', '6', '*', '7', '8', '9', '/', '.', '0'];

    return (
        <>
            <div className="calculator">
                <Display value={display} />
                <div className="button">
                    {<Button key='C' label='C' onClick={() => handleRemoveCharacter(display)} />}
                    {<Button key='AC' label='AC' onClick={() => handleClear(display)} />}
                    {buttons.map((button, index) => (
                        <Button key={index} label={button} onClick={() => handleClick(button)} />
                    ))}
                    {<Button key="=" label="=" onClick={() => handleCalculate()} />}
                </div>
            </div>
        </>
    )
}

export default Calculator;