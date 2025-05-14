"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
require("./globals.css");
var google_1 = require("next/font/google");
var Provider_1 = require("@/Store/Provider");
require("react-toastify/dist/ReactToastify.css");
var poppin = (0, google_1.Poppins)({
    weight: ['100', '400'],
    subsets: ['latin'],
});
exports.metadata = {
    title: 'Ecommerce Next App',
    description: 'Developed by Abdullah Moiz',
    authors: [{ name: "Abdullah Moiz", url: 'https://abdullahmoiz.vercel.app/' }],
};
function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="en">
      <body className={poppin.className}>
        <Provider_1.Providers>
          {children}
        </Provider_1.Providers>
      </body>

    </html>);
}
exports.default = RootLayout;
