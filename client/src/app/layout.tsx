"use client";
import ProjectDescription from "@/components/project-description";
import "./globals.css";

import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let vh = 0;
  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <html lang="en">
      <body>
        <div className="w-[100%] h-[100%] m-0 flex justify-center align-middle fixed">
          {/* left */}
          <div className="hidden lg:block lg:min-h-screen lg:w-[calc(80%-450px)] ">
            <ProjectDescription />
          </div>

          {/* center */}
          <div className="overflow-x-hidden relative max-w-[450px] shadow min-h-[100%] max-h-screen flex-1 lg:m-auto">
            {children}
          </div>

          {/* right */}
          <div className="hidden lg:block min-h-screen w-1/5"></div>
        </div>
      </body>
    </html>
  );
}
