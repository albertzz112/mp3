import { useState } from "react";
import styled from "styled-components";

const CalculatorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: rosybrown;
    border-radius: 20px;
    border: 5px solid black;
    width: auto;
    align-items: center;
`;

const Input = styled.input`
    text-align: center;
    background-color: wheat;
    color: black;
    width:30%;
    border-radius: 15px;
    padding: 0.2rem;
    margin: 0.2rem;
    border: none;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Button = styled.button`
    border: none;
    border-radius: 2px;
    background-color: wheat;
    color: black;
    margin: 0.2rem;
`;

const StyledLabel = styled.label`
    font-size: 1.1rem;
`;

const StyledSubHeader = styled.h4`
    font-size: calc(1.5px + 1.5vw);
    margin: 0;
`;

const Result = styled.p<{ result: string | number }>`
    color: ${(props) => (typeof props.result === "number" && props.result < 0 ? "red" : "black")};
    background-color: wheat;
    width: 30%;
    border-radius: 15px;
`;

const Calculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState<string | number>("");

    const handleCalculation = (op: string) => {
        const first = parseFloat(num1);
        const second = parseFloat(num2);
        let powerResult = 0;

        if (isNaN(first) || isNaN(second)) {
            setResult("Invalid input");
            return;
        }

        let calcResult: number | string = 0;

        switch (op) {
            case "+":
                calcResult = first + second;
                break;
            case "-":
                calcResult = first - second;
                break;
            case "*":
                calcResult = first * second;
                break;
            case "/":
                calcResult = second !== 0 ? first / second : "Cannot divide by 0";
                break;
            case "**":
                powerResult = 1;
                for (let i = 0; i < second; i++) {
                    powerResult *= first;
                }
                calcResult = powerResult;
                break;
            default:
                calcResult = "";
        }

        setResult(calcResult);
    };

    const clearFields = () => {
        setNum1("");
        setNum2("");
        setResult("");
    };

    return (
        <CalculatorWrapper>
            <StyledSubHeader>Calculator</StyledSubHeader>
            <StyledLabel>First Number:</StyledLabel>
            <Input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} />

            <StyledLabel>Second Number:</StyledLabel>
            <Input type="text" value={num2} onChange={(e) => setNum2(e.target.value)} />

            <ButtonContainer>
                <Button onClick={() => handleCalculation("+")}>+</Button>
                <Button onClick={() => handleCalculation("-")}>-</Button>
                <Button onClick={() => handleCalculation("*")}>*</Button>
                <Button onClick={() => handleCalculation("/")}>/</Button>
                <Button onClick={() => handleCalculation("**")}>**</Button>
                <Button onClick={clearFields}>Clear</Button>
            </ButtonContainer>

            <Result result={result}>{result !== "" ? `${result}` : ""}</Result>
        </CalculatorWrapper>
    );
};

export default Calculator;
