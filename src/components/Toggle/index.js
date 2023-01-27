import React from "react";
import styles from "./styles.module.css";

function Toggle({ isDark, setIsDark }) {
  return (
    <>
      <div className={styles.toggle}></div>
      {isDark ? (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.sun}
          style={{ cursor: isDark ? "pointer" : "" }}
          onClick={() => {
            setIsDark(false);
          }}
        >
          <path
            d="M14.8687 20.4445C13.39 20.4445 11.9717 19.8571 10.9261 18.8114C9.88041 17.7658 9.29297 16.3475 9.29297 14.8687C9.29297 13.39 9.88041 11.9717 10.9261 10.9261C11.9717 9.88041 13.39 9.29297 14.8687 9.29297C16.3475 9.29297 17.7658 9.88041 18.8114 10.9261C19.8571 11.9717 20.4445 13.39 20.4445 14.8687C20.4445 16.3475 19.8571 17.7658 18.8114 18.8114C17.7658 19.8571 16.3475 20.4445 14.8687 20.4445ZM14.8687 22.3031C16.8405 22.3031 18.7314 21.5199 20.1256 20.1256C21.5199 18.7314 22.3031 16.8405 22.3031 14.8687C22.3031 12.897 21.5199 11.0061 20.1256 9.61185C18.7314 8.21764 16.8405 7.43437 14.8687 7.43437C12.897 7.43437 11.0061 8.21764 9.61185 9.61185C8.21764 11.0061 7.43437 12.897 7.43437 14.8687C7.43437 16.8405 8.21764 18.7314 9.61185 20.1256C11.0061 21.5199 12.897 22.3031 14.8687 22.3031ZM14.8687 0C15.1152 0 15.3516 0.0979078 15.5259 0.272185C15.7001 0.446462 15.798 0.682832 15.798 0.929297V4.64648C15.798 4.89295 15.7001 5.12932 15.5259 5.3036C15.3516 5.47787 15.1152 5.57578 14.8687 5.57578C14.6223 5.57578 14.3859 5.47787 14.2116 5.3036C14.0374 5.12932 13.9395 4.89295 13.9395 4.64648V0.929297C13.9395 0.682832 14.0374 0.446462 14.2116 0.272185C14.3859 0.0979078 14.6223 0 14.8687 0V0ZM14.8687 24.1617C15.1152 24.1617 15.3516 24.2596 15.5259 24.4339C15.7001 24.6082 15.798 24.8445 15.798 25.091V28.8082C15.798 29.0547 15.7001 29.291 15.5259 29.4653C15.3516 29.6396 15.1152 29.7375 14.8687 29.7375C14.6223 29.7375 14.3859 29.6396 14.2116 29.4653C14.0374 29.291 13.9395 29.0547 13.9395 28.8082V25.091C13.9395 24.8445 14.0374 24.6082 14.2116 24.4339C14.3859 24.2596 14.6223 24.1617 14.8687 24.1617ZM29.7375 14.8687C29.7375 15.1152 29.6396 15.3516 29.4653 15.5259C29.291 15.7001 29.0547 15.798 28.8082 15.798H25.091C24.8445 15.798 24.6082 15.7001 24.4339 15.5259C24.2596 15.3516 24.1617 15.1152 24.1617 14.8687C24.1617 14.6223 24.2596 14.3859 24.4339 14.2116C24.6082 14.0374 24.8445 13.9395 25.091 13.9395H28.8082C29.0547 13.9395 29.291 14.0374 29.4653 14.2116C29.6396 14.3859 29.7375 14.6223 29.7375 14.8687ZM5.57578 14.8687C5.57578 15.1152 5.47787 15.3516 5.3036 15.5259C5.12932 15.7001 4.89295 15.798 4.64648 15.798H0.929297C0.682832 15.798 0.446462 15.7001 0.272185 15.5259C0.0979078 15.3516 0 15.1152 0 14.8687C0 14.6223 0.0979078 14.3859 0.272185 14.2116C0.446462 14.0374 0.682832 13.9395 0.929297 13.9395H4.64648C4.89295 13.9395 5.12932 14.0374 5.3036 14.2116C5.47787 14.3859 5.57578 14.6223 5.57578 14.8687ZM25.3828 4.35468C25.557 4.52895 25.6549 4.76528 25.6549 5.0117C25.6549 5.25811 25.557 5.49444 25.3828 5.66871L22.7548 8.29862C22.6684 8.3849 22.5658 8.45332 22.453 8.49997C22.3401 8.54661 22.2192 8.57058 22.0971 8.57049C21.8505 8.57032 21.6141 8.47219 21.4398 8.29769C21.3535 8.21129 21.2851 8.10874 21.2385 7.9959C21.1918 7.88305 21.1679 7.76213 21.1679 7.64002C21.1681 7.39342 21.2662 7.15699 21.4407 6.98274L24.0688 4.35468C24.2431 4.18047 24.4794 4.0826 24.7258 4.0826C24.9722 4.0826 25.2085 4.18047 25.3828 4.35468ZM8.29676 21.4407C8.47098 21.615 8.56885 21.8513 8.56885 22.0977C8.56885 22.3442 8.47098 22.5805 8.29676 22.7548L5.66871 25.3828C5.49344 25.5521 5.2587 25.6458 5.01504 25.6436C4.77138 25.6415 4.5383 25.5438 4.36601 25.3715C4.19371 25.1992 4.09597 24.9661 4.09386 24.7225C4.09174 24.4788 4.18541 24.2441 4.35468 24.0688L6.98274 21.4407C7.15701 21.2665 7.39333 21.1687 7.63975 21.1687C7.88617 21.1687 8.12249 21.2665 8.29676 21.4407ZM25.3828 25.3828C25.2085 25.557 24.9722 25.6549 24.7258 25.6549C24.4794 25.6549 24.2431 25.557 24.0688 25.3828L21.4407 22.7548C21.2715 22.5795 21.1778 22.3448 21.1799 22.1011C21.182 21.8574 21.2798 21.6244 21.4521 21.4521C21.6244 21.2798 21.8574 21.182 22.1011 21.1799C22.3448 21.1778 22.5795 21.2715 22.7548 21.4407L25.3828 24.0688C25.557 24.2431 25.6549 24.4794 25.6549 24.7258C25.6549 24.9722 25.557 25.2085 25.3828 25.3828ZM8.29676 8.29862C8.12249 8.47284 7.88617 8.57071 7.63975 8.57071C7.39333 8.57071 7.15701 8.47284 6.98274 8.29862L4.35468 5.66871C4.26593 5.58299 4.19513 5.48044 4.14643 5.36706C4.09772 5.25369 4.07209 5.13174 4.07102 5.00835C4.06994 4.88496 4.09346 4.76259 4.14018 4.64839C4.18691 4.53418 4.25591 4.43042 4.34317 4.34317C4.43042 4.25591 4.53418 4.18691 4.64839 4.14018C4.76259 4.09346 4.88496 4.06994 5.00835 4.07102C5.13174 4.07209 5.25369 4.09772 5.36706 4.14643C5.48044 4.19513 5.58299 4.26593 5.66871 4.35468L8.29676 6.98274C8.3833 7.06906 8.45197 7.17161 8.49881 7.28451C8.54566 7.39741 8.56978 7.51844 8.56978 7.64068C8.56978 7.76291 8.54566 7.88395 8.49881 7.99685C8.45197 8.10975 8.3833 8.2123 8.29676 8.29862Z"
            fill="#FBFBFB"
            fill-opacity="0.4"
          />
        </svg>
      ) : (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.sun}
          style={{ cursor: isDark ? "pointer" : "" }}
          onClick={() => {
            setIsDark(false);
          }}
        >
          <path
            d="M14.8687 20.4445C13.39 20.4445 11.9717 19.8571 10.9261 18.8114C9.88041 17.7658 9.29297 16.3475 9.29297 14.8687C9.29297 13.39 9.88041 11.9717 10.9261 10.9261C11.9717 9.88041 13.39 9.29297 14.8687 9.29297C16.3475 9.29297 17.7658 9.88041 18.8114 10.9261C19.8571 11.9717 20.4445 13.39 20.4445 14.8687C20.4445 16.3475 19.8571 17.7658 18.8114 18.8114C17.7658 19.8571 16.3475 20.4445 14.8687 20.4445ZM14.8687 22.3031C16.8405 22.3031 18.7314 21.5199 20.1256 20.1256C21.5199 18.7314 22.3031 16.8405 22.3031 14.8687C22.3031 12.897 21.5199 11.0061 20.1256 9.61185C18.7314 8.21764 16.8405 7.43437 14.8687 7.43437C12.897 7.43437 11.0061 8.21764 9.61185 9.61185C8.21764 11.0061 7.43437 12.897 7.43437 14.8687C7.43437 16.8405 8.21764 18.7314 9.61185 20.1256C11.0061 21.5199 12.897 22.3031 14.8687 22.3031ZM14.8687 0C15.1152 0 15.3516 0.0979078 15.5259 0.272185C15.7001 0.446462 15.798 0.682832 15.798 0.929297V4.64648C15.798 4.89295 15.7001 5.12932 15.5259 5.3036C15.3516 5.47787 15.1152 5.57578 14.8687 5.57578C14.6223 5.57578 14.3859 5.47787 14.2116 5.3036C14.0374 5.12932 13.9395 4.89295 13.9395 4.64648V0.929297C13.9395 0.682832 14.0374 0.446462 14.2116 0.272185C14.3859 0.0979078 14.6223 0 14.8687 0V0ZM14.8687 24.1617C15.1152 24.1617 15.3516 24.2596 15.5259 24.4339C15.7001 24.6082 15.798 24.8445 15.798 25.091V28.8082C15.798 29.0547 15.7001 29.291 15.5259 29.4653C15.3516 29.6396 15.1152 29.7375 14.8687 29.7375C14.6223 29.7375 14.3859 29.6396 14.2116 29.4653C14.0374 29.291 13.9395 29.0547 13.9395 28.8082V25.091C13.9395 24.8445 14.0374 24.6082 14.2116 24.4339C14.3859 24.2596 14.6223 24.1617 14.8687 24.1617ZM29.7375 14.8687C29.7375 15.1152 29.6396 15.3516 29.4653 15.5259C29.291 15.7001 29.0547 15.798 28.8082 15.798H25.091C24.8445 15.798 24.6082 15.7001 24.4339 15.5259C24.2596 15.3516 24.1617 15.1152 24.1617 14.8687C24.1617 14.6223 24.2596 14.3859 24.4339 14.2116C24.6082 14.0374 24.8445 13.9395 25.091 13.9395H28.8082C29.0547 13.9395 29.291 14.0374 29.4653 14.2116C29.6396 14.3859 29.7375 14.6223 29.7375 14.8687ZM5.57578 14.8687C5.57578 15.1152 5.47787 15.3516 5.3036 15.5259C5.12932 15.7001 4.89295 15.798 4.64648 15.798H0.929297C0.682832 15.798 0.446462 15.7001 0.272185 15.5259C0.0979078 15.3516 0 15.1152 0 14.8687C0 14.6223 0.0979078 14.3859 0.272185 14.2116C0.446462 14.0374 0.682832 13.9395 0.929297 13.9395H4.64648C4.89295 13.9395 5.12932 14.0374 5.3036 14.2116C5.47787 14.3859 5.57578 14.6223 5.57578 14.8687ZM25.3828 4.35468C25.557 4.52895 25.6549 4.76528 25.6549 5.0117C25.6549 5.25811 25.557 5.49444 25.3828 5.66871L22.7548 8.29862C22.6684 8.3849 22.5658 8.45332 22.453 8.49997C22.3401 8.54661 22.2192 8.57058 22.0971 8.57049C21.8505 8.57032 21.6141 8.47219 21.4398 8.29769C21.3535 8.21129 21.2851 8.10874 21.2385 7.9959C21.1918 7.88305 21.1679 7.76213 21.1679 7.64002C21.1681 7.39342 21.2662 7.15699 21.4407 6.98274L24.0688 4.35468C24.2431 4.18047 24.4794 4.0826 24.7258 4.0826C24.9722 4.0826 25.2085 4.18047 25.3828 4.35468ZM8.29676 21.4407C8.47098 21.615 8.56885 21.8513 8.56885 22.0977C8.56885 22.3442 8.47098 22.5805 8.29676 22.7548L5.66871 25.3828C5.49344 25.5521 5.2587 25.6458 5.01504 25.6436C4.77138 25.6415 4.5383 25.5438 4.36601 25.3715C4.19371 25.1992 4.09597 24.9661 4.09386 24.7225C4.09174 24.4788 4.18541 24.2441 4.35468 24.0688L6.98274 21.4407C7.15701 21.2665 7.39333 21.1687 7.63975 21.1687C7.88617 21.1687 8.12249 21.2665 8.29676 21.4407ZM25.3828 25.3828C25.2085 25.557 24.9722 25.6549 24.7258 25.6549C24.4794 25.6549 24.2431 25.557 24.0688 25.3828L21.4407 22.7548C21.2715 22.5795 21.1778 22.3448 21.1799 22.1011C21.182 21.8574 21.2798 21.6244 21.4521 21.4521C21.6244 21.2798 21.8574 21.182 22.1011 21.1799C22.3448 21.1778 22.5795 21.2715 22.7548 21.4407L25.3828 24.0688C25.557 24.2431 25.6549 24.4794 25.6549 24.7258C25.6549 24.9722 25.557 25.2085 25.3828 25.3828ZM8.29676 8.29862C8.12249 8.47284 7.88617 8.57071 7.63975 8.57071C7.39333 8.57071 7.15701 8.47284 6.98274 8.29862L4.35468 5.66871C4.26593 5.58299 4.19513 5.48044 4.14643 5.36706C4.09772 5.25369 4.07209 5.13174 4.07102 5.00835C4.06994 4.88496 4.09346 4.76259 4.14018 4.64839C4.18691 4.53418 4.25591 4.43042 4.34317 4.34317C4.43042 4.25591 4.53418 4.18691 4.64839 4.14018C4.76259 4.09346 4.88496 4.06994 5.00835 4.07102C5.13174 4.07209 5.25369 4.09772 5.36706 4.14643C5.48044 4.19513 5.58299 4.26593 5.66871 4.35468L8.29676 6.98274C8.3833 7.06906 8.45197 7.17161 8.49881 7.28451C8.54566 7.39741 8.56978 7.51844 8.56978 7.64068C8.56978 7.76291 8.54566 7.88395 8.49881 7.99685C8.45197 8.10975 8.3833 8.2123 8.29676 8.29862Z"
            fill="#373737"
            fill-opacity="0.8"
          />
        </svg>
      )}

      <div className={styles.moonContainer}>
        {isDark ? (
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.moon}
            style={{
              cursor: isDark ? "" : "pointer",
            }}
            onClick={() => {
              setIsDark(true);
            }}
          >
            <path
              d="M23.1166 13.973C22.2769 14.196 21.4119 14.3088 20.5431 14.3088C17.8977 14.3088 15.4134 13.2803 13.5473 11.4143C12.322 10.1819 11.441 8.64978 10.9923 6.97077C10.5436 5.29175 10.5427 3.52445 10.9899 1.84502C11.0458 1.63504 11.0454 1.41407 10.9889 1.20427C10.9324 0.994468 10.8217 0.803218 10.6679 0.649704C10.5141 0.496189 10.3227 0.385808 10.1128 0.329633C9.90292 0.273458 9.68194 0.273464 9.47206 0.329651C7.36956 0.889934 5.45137 1.99325 3.90991 3.52891C-0.91996 8.35878 -0.91996 16.2206 3.90991 21.053C5.05793 22.2074 6.42351 23.1227 7.92761 23.7458C9.43172 24.369 11.0445 24.6877 12.6726 24.6834C14.3002 24.688 15.9126 24.3696 17.4163 23.7466C18.92 23.1236 20.2852 22.2085 21.4327 21.0542C22.9695 19.5124 24.0734 17.5932 24.6332 15.4896C24.6888 15.2797 24.6884 15.0589 24.6319 14.8492C24.5754 14.6396 24.4649 14.4484 24.3113 14.2949C24.1578 14.1413 23.9666 14.0308 23.757 13.9743C23.5473 13.9178 23.3265 13.9174 23.1166 13.973ZM19.6819 19.3022C18.7637 20.2254 17.6716 20.9573 16.4686 21.4557C15.2657 21.954 13.9759 22.2088 12.6738 22.2053C11.3713 22.2085 10.081 21.9535 8.87771 21.455C7.67437 20.9565 6.5818 20.2243 5.66318 19.3009C1.79978 15.4363 1.79978 9.14682 5.66318 5.28218C6.40972 4.53648 7.2716 3.91601 8.21565 3.44465C8.07746 5.22774 8.32586 7.01964 8.94388 8.69789C9.56189 10.3761 10.5349 11.9012 11.7965 13.1688C13.0614 14.4344 14.586 15.4101 16.2649 16.0286C17.9439 16.6471 19.7371 16.8935 21.5207 16.7509C21.0468 17.6934 20.4261 18.5545 19.6819 19.3022Z"
              fill="#FBFBFB"
              fill-opacity="0.8"
            />
          </svg>
        ) : (
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.moon}
            style={{
              cursor: isDark ? "" : "pointer",
            }}
            onClick={() => {
              setIsDark(true);
            }}
          >
            <path
              d="M23.1166 13.973C22.2769 14.196 21.4119 14.3088 20.5431 14.3088C17.8977 14.3088 15.4134 13.2803 13.5473 11.4143C12.322 10.1819 11.441 8.64978 10.9923 6.97077C10.5436 5.29175 10.5427 3.52445 10.9899 1.84502C11.0458 1.63504 11.0454 1.41407 10.9889 1.20427C10.9324 0.994468 10.8217 0.803218 10.6679 0.649704C10.5141 0.496189 10.3227 0.385808 10.1128 0.329633C9.90292 0.273458 9.68194 0.273464 9.47206 0.329651C7.36956 0.889934 5.45137 1.99325 3.90991 3.52891C-0.91996 8.35878 -0.91996 16.2206 3.90991 21.053C5.05793 22.2074 6.42351 23.1227 7.92761 23.7458C9.43172 24.369 11.0445 24.6877 12.6726 24.6834C14.3002 24.688 15.9126 24.3696 17.4163 23.7466C18.92 23.1236 20.2852 22.2085 21.4327 21.0542C22.9695 19.5124 24.0734 17.5932 24.6332 15.4896C24.6888 15.2797 24.6884 15.0589 24.6319 14.8492C24.5754 14.6396 24.4649 14.4484 24.3113 14.2949C24.1578 14.1413 23.9666 14.0308 23.757 13.9743C23.5473 13.9178 23.3265 13.9174 23.1166 13.973ZM19.6819 19.3022C18.7637 20.2254 17.6716 20.9573 16.4686 21.4557C15.2657 21.954 13.9759 22.2088 12.6738 22.2053C11.3713 22.2085 10.081 21.9535 8.87771 21.455C7.67437 20.9565 6.5818 20.2243 5.66318 19.3009C1.79978 15.4363 1.79978 9.14682 5.66318 5.28218C6.40972 4.53648 7.2716 3.91601 8.21565 3.44465C8.07746 5.22774 8.32586 7.01964 8.94388 8.69789C9.56189 10.3761 10.5349 11.9012 11.7965 13.1688C13.0614 14.4344 14.586 15.4101 16.2649 16.0286C17.9439 16.6471 19.7371 16.8935 21.5207 16.7509C21.0468 17.6934 20.4261 18.5545 19.6819 19.3022Z"
              fill="#373737"
              fill-opacity="0.4"
            />
          </svg>
        )}
      </div>
      <div
        className={styles.rectangle2}
        style={{
          left: isDark ? "206px" : "151px",
          background: isDark ? "#003661" : "#d8eeff",
        }}
      ></div>
      <div
        className={styles.rectangle1}
        style={{
          background: isDark ? "#1B6A9C" : "#A9DCFD",
        }}
      ></div>
    </>
  );
}

export default Toggle;