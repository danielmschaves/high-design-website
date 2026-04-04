import localFont from "next/font/local";

export const centuryGothicPro = localFont({
  src: [
    {
      path: "../public/assets/fonts/fonnts.com-Century_Gothic_Pro.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/fonnts.com-Century_Gothic_Pro_Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/assets/fonts/fonnts.com-Century_Gothic_Pro_Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/fonnts.com-Century_Gothic_Pro_Bold_Italic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-century-gothic",
  display: "swap",
});
