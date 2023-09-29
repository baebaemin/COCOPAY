// import React, { useState } from "react";
// import { Image } from "@/components/atoms/Image/Image";
// import { useNavigate } from "react-router-dom";
// import { Container } from "@/components/atoms/Container/Container.styles";
// import { Text } from "@/components/atoms/Text/Text.styles";
// import { Wrapper } from "@/components/atoms/Wrapper/Wrapper.styles";
// import Penguin from "@/assets/images/img-penguin-thinking.png";
// import PayOfflinePage from "./PayOfflinePage";
// import PayOfflineCompletePage from "./PayOfflineCompletePage";

// function PayOffline() {
//   const [currentPage, setCurrentPage] = useState(1);

//   const handleNextPage = () => {
//     if (currentPage < 2) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   //페이지 번호에 따라 해당 페이지 컴포넌트를 렌더링.

//   const renderPage = () => {
//     switch (currentPage) {
//       case 1:
//         return <PayOfflinePage onNextPage={handleNextPage} />;
//       case 2:
//         return <PayOfflineCompletePage onNextPage={handleNextPage} />;
//     }
//   };

//   return <div>{renderPage()}</div>;
// }

// export default PayOffline;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PayOfflinePage from "./PayOfflinePage";
import PayOfflineCompletePage from "./PayOfflineCompletePage";

function PayOffline() {
  const [currentPage, setCurrentPage] = useState("PayOfflinePage");
  const navigate = useNavigate();

  // 3초 후에 페이지를 전환하는 함수
  const navigateToCompletePage = () => {
    setCurrentPage("PayOfflineCompletePage");
  };

  useEffect(() => {
    // 2초 후에 자동으로 페이지를 전환합니다.
    const timer = setTimeout(navigateToCompletePage, 2000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 제거
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정

  const renderPage = () => {
    switch (currentPage) {
      case "PayOfflinePage":
        return <PayOfflinePage />;
      case "PayOfflineCompletePage":
        return <PayOfflineCompletePage />;
      default:
        return null;
    }
  };

  return <div>{renderPage()}</div>;
}

export default PayOffline;