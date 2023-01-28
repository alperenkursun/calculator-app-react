import { useState, useEffect } from "react";
import styles from "./styles.module.css";

function Buttons({
  isDark,
  operationsInterface,
  setOperationsInterface,
  isNumberInput,
  setIsNumberInput,
  isOperation,
  setIsOperation,
  operationArray,
  setOperationArray,
  number,
  setNumber,
  setResult,
}) {
  useEffect(() => {}, [number, setOperationArray, operationArray]);

  return (
    <>
      <div className={styles.buttonMainContainer}></div>
      <div
        className={styles.percentage}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
        onClick={() => {
          return isNumberInput && {};
        }}
      >
        %
      </div>
      <div
        className={styles.plusMines}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
        onClick={() => {
          return isNumberInput && {};
        }}
      >
        +/-
      </div>
      <div
        className={styles.ac}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
        onClick={() => {
          setNumber("");
          setResult("0");
        }}
      >
        AC
      </div>
      <div
        className={styles.three}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
        onClick={() => {
          setIsNumberInput(true);

          setNumber(number + "3");
        }}
      >
        3{/* işaret */}
      </div>
      <div
        className={styles.two}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
        onClick={() => {
          setNumber(number + "2");

          setIsNumberInput(true);
        }}
      >
        2
      </div>
      <div
        className={styles.one}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
        onClick={() => {
          setIsNumberInput(true);

          setNumber(number + "1");
        }}
      >
        1
      </div>
      <div
        className={styles.six}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
        onClick={() => {
          setIsNumberInput(true);

          setNumber(number + "6");
        }}
      >
        6
      </div>
      <div
        className={styles.five}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
        onClick={() => {
          setIsNumberInput(true);

          setNumber(number + "5");
        }}
      >
        5
      </div>
      <div
        className={styles.four}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
        onClick={() => {
          setIsNumberInput(true);

          setNumber(number + "4");
        }}
      >
        4
      </div>
      <div
        className={styles.nine}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
        onClick={() => {
          setIsNumberInput(true);

          setNumber(number + "9");
        }}
      >
        9
      </div>
      <div
        className={styles.eight}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
        onClick={() => {
          setIsNumberInput(true);

          setNumber(number + "8");
        }}
      >
        8
      </div>
      <div
        className={styles.seven}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
        onClick={() => {
          setIsNumberInput(true);
          setNumber(number + "7");
        }}
      >
        7
      </div>
      <div
        className={styles.times}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
        onClick={() => {
          isNumberInput && setNumber(number + " × ");

          setIsNumberInput(false);
        }}
      >
        ×
      </div>
      <div
        className={styles.mines}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
        onClick={() => {
          isNumberInput && setNumber(number + " - ");

          setIsNumberInput(false);
        }}
      >
        -
      </div>
      <div
        className={styles.plus}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
        onClick={() => {
          isNumberInput && setNumber(number + " + ");

          setIsNumberInput(false);
        }}
      >
        {" "}
        +
      </div>
      <div
        className={styles.equal}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
        onClick={() => {
          if (isNumberInput) {
            let string = number;
            string = string.replaceAll("×", "*");
            string = string.replaceAll("÷", "/");
            console.log(string);
            let r = eval(string);
            setResult(r.toFixed(2));
          }
        }}
      >
        =
      </div>
      <div
        className={styles.twoZero}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
        onClick={() => {
          return isNumberInput && setNumber(number + "00");
        }}
      >
        00
      </div>
      <div
        className={styles.zero}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
        onClick={() => {
          return isNumberInput && setNumber(number + "0");
        }}
      >
        0
      </div>
      <div
        className={styles.dot}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
        onClick={() => {
          return isNumberInput && {};
        }}
      >
        .
      </div>
      <div
        className={styles.frame3}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
      >
        <div
          className={styles.ellipse2}
          style={{
            background: isDark
              ? "rgba(5, 5, 5, 0.3)"
              : "rgba(255, 255, 255, 0.3)",
          }}
        ></div>
        <div
          className={styles.ellipse3}
          style={{
            background: isDark
              ? "rgba(5, 5, 5, 0.3)"
              : "rgba(255, 255, 255, 0.3)",
          }}
        ></div>
        <div
          className={styles.ellipse4}
          style={{
            background: isDark
              ? "rgba(5, 5, 5, 0.3)"
              : "rgba(255, 255, 255, 0.3)",
          }}
        ></div>
        <div
          className={styles.ellipse5}
          style={{
            background: isDark
              ? "rgba(5, 5, 5, 0.3)"
              : "rgba(255, 255, 255, 0.3)",
          }}
        ></div>
      </div>
      <div className={styles.frame2}>
        <div
          className={styles.ellipse2}
          style={{
            background: isDark
              ? "rgba(5, 5, 5, 0.3)"
              : "rgba(255, 255, 255, 0.3)",
          }}
        ></div>
        <div
          className={styles.ellipse3}
          style={{
            background: isDark
              ? "rgba(5, 5, 5, 0.3)"
              : "rgba(255, 255, 255, 0.3)",
          }}
        ></div>
        <div
          className={styles.ellipse4}
          style={{
            background: isDark
              ? "rgba(5, 5, 5, 0.3)"
              : "rgba(255, 255, 255, 0.3)",
          }}
        ></div>
        <div
          className={styles.ellipse5}
          style={{
            background: isDark
              ? "rgba(5, 5, 5, 0.3)"
              : "rgba(255, 255, 255, 0.3)",
          }}
        ></div>
      </div>
      <div className={styles.frame1}>
        <div
          className={styles.ellipse2}
          style={{
            background: isDark
              ? "rgba(5, 5, 5, 0.3)"
              : "rgba(255, 255, 255, 0.3)",
          }}
        ></div>
        <div
          className={styles.ellipse3}
          style={{
            background: isDark
              ? "rgba(5, 5, 5, 0.3)"
              : "rgba(255, 255, 255, 0.3)",
          }}
        ></div>
        <div
          className={styles.ellipse4}
          style={{
            background: isDark
              ? "rgba(5, 5, 5, 0.3)"
              : "rgba(255, 255, 255, 0.3)",
          }}
        ></div>
        <div
          className={styles.ellipse5}
          style={{
            background: isDark
              ? "rgba(5, 5, 5, 0.3)"
              : "rgba(255, 255, 255, 0.3)",
          }}
        ></div>
      </div>
      <div
        className={styles.rectangle5}
        style={{
          background: isDark
            ? "rgba(5, 5, 5, 0.3)"
            : "rgba(255, 255, 255, 0.3)",
        }}
      ></div>
      <div
        className={styles.div}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
        onClick={() => {
          isNumberInput && setNumber(number + " ÷ ");

          setIsNumberInput(false);
        }}
      >
        {" "}
        ÷
      </div>
      <div
        className={styles.ellipse5main}
        style={{
          background: isDark
            ? "  rgba(5, 5, 5, 0.2) "
            : "rgba(255, 255, 255, 0.2)",
        }}
      ></div>
      <div
        className={styles.rectangle4}
        style={{
          background: isDark
            ? "rgba(0, 34, 53, 0.4)"
            : "rgba(230, 246, 255, 0.2)",
        }}
      ></div>
      <div className={styles.frame7}>
        <div className={styles.rectangle274}></div>
        <div
          className={styles.rectangle273}
          style={{
            background: isDark
              ? "rgba(0, 34, 53, 0.4)"
              : "rgba(230, 246, 255, 0.2)",
          }}
        ></div>
        <div
          className={styles.ellipse1main}
          style={{
            background: isDark
              ? "linear-gradient(244.38deg, #42869B 8.14%, #2A7DA1 27.9%, #224E91 56.94%, #00123F 84.11%)"
              : "linear-gradient(244.38deg,#9ee8ff 8.14%,#5aceff 27.9%,#79afff 56.94%,#2d5fde 84.11%)",
          }}
        ></div>
      </div>
    </>
  );
}

export default Buttons;
