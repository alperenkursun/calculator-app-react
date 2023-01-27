import React from "react";
import styles from "./styles.module.css";

function Operations({ isDark }) {
  return (
    <>
      <div
        className={styles.operations}
        style={{
          color: isDark ? "rgba(251, 251, 251, 0.5)" : "rgba(55, 55, 55, 0.5)",
        }}
      >
        1.000 × 2 + 2 × 2{" "}
      </div>
      <div className={styles.equalIconContainer}>
        {isDark ? (
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.equalIcon}
          >
            <path
              d="M15.0683 0.038V3.21H0.898344V0.038H15.0683ZM15.0683 6.278V9.45H0.898344V6.278H15.0683Z"
              fill="#FBFBFB"
            />
          </svg>
        ) : (
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.equalIcon}
          >
            <path
              d="M15.0683 0.038V3.21H0.898344V0.038H15.0683ZM15.0683 6.278V9.45H0.898344V6.278H15.0683Z"
              fill="#373737"
            />
          </svg>
        )}
      </div>
      <div
        className={styles.result}
        style={{
          color: isDark ? "#FBFBFB" : "#373737",
        }}
      >
        2004
      </div>
    </>
  );
}

export default Operations;
