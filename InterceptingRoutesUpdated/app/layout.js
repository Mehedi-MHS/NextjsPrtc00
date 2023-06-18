import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simple Modal",
  description: "My own modal component",
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {props.children}
        {props.modal}
      </body>
    </html>
  );
}
