import styles from "./styles.module.css";

function HistoryDetail({ history, isDark, historyDisplay }) {
  let historyDetails = history.filter(
    (item, index) =>
      index === history.length - 1 ||
      index === history.length - 2 ||
      index === history.length - 3
  );
  return (
    <div
      className={styles.historyDetail}
      style={{
        background: isDark
          ? "linear-gradient(90deg, rgba(26,80,109,1) 35%, rgba(14,52,79,1) 100%)"
          : "radial-gradient(circle,rgba(138, 197, 252, 1) 35%,rgba(139, 214, 253, 1) 100%)",
        display: historyDisplay ? "block" : "none",
      }}
    >
      <div
        className={styles.header}
        style={{ color: isDark ? "rgb(251,251,251)" : "" }}
      >
        History
      </div>
      <ul>
        {historyDetails.map((item, index) => (
          <li
            className={styles.operations}
            style={{ color: isDark ? "rgb(251,251,251)" : "" }}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryDetail;
