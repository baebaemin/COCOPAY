const PATH = {
  ROOT: "/",
  SIGNUP: "/signup",
  PASSWORD_SETTING: "/password-setting",
  FIGNER_SETTING: "/finger-setting",
  Onboarding: "/onboarding",
  CARDUPLOAD: "/signup/card-upload",
  PRIORITY: "/priority",
  LOGIN_FINGER: "/login/finger-password",
  LOGIN_PASSWORD: "/login/password",
  // HOME: "/home",
  PAYOFFLINE: "/pay/offline",
  CARDLIST: "/main/cardlist",
  SCAN: "/scan",
  SCAN_CARDINFO: "/main/cardlist/scan/card-info",
  CARD_DETAIL: "/main/cardlist/detail/:cardId",
  CARD_DETAIL_PURCHASED: "/main/cardlist/detail/:cardId/purchased",
  STATISTICS: "/main/statistics",
  MYPAGE: "/main/mypage",
  MYPAGE_WITHDRAWAL: "/mypage/withdrawal",
  PAYONLINE: "/pay/online",
  PAYONLINECOMPLETE: "/pay/online/complete",
  MAIN: "/main",
  QRCAMERA: "/main/qrcamera",
  SHOPPING: "/shopping",
  SHOPPING_COMPLETE: "/shopping/complete",
  ONLINEQR: "/pay/online/qrcode"
} as const;

export { PATH };
