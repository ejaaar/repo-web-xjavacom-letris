import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex gap-3 text-gray-600">
            <a aria-label="facebook" href="#">
              Facebook
            </a>
            <a aria-label="instagram" href="#">
              Instagram
            </a>
            <a aria-label="twitter" href="#">
              Twitter
            </a>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          © All rights reserved www.xjavacom.co.id
        </div>
      </div>
    </footer>
  );
}
