import "./globals.css";
import localFont from "next/font/local";
import { classNames } from "@utils/class_names";
import { CursorProvider } from "@context/cursor_provider";

const manrope = localFont({
  src: "../public/fonts/Manrope.ttf",
  variable: "--font-sans",
});

const zighead = localFont({
  src: "../public/fonts/Zighead.otf",
  variable: "--font-title",
});

export const metadata = {
  title: "Stan Husson - Front-end & UX/UI/3D Designer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-lt-installed="true"
      className={classNames(
        manrope.variable,
        zighead.variable,
        "bg-gradient-to-r from-content-grey_800 via-content-grey_900 to-content-grey_900 lenis lenis-smooth"
      )}
    >
      <body
        cz-shortcut-listen="true"
        className="font-sans flex flex-col  text-content-grey_100 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
      >
        <CursorProvider>{children}</CursorProvider>
      </body>
    </html>
  );
}
