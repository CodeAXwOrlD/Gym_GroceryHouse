import './globals.css';
import { Poppins } from 'next/font/google';
import { Providers } from '@/Store/Provider';
import 'react-toastify/dist/ReactToastify.css';
var poppin = Poppins({
    weight: ['100', '400'],
    subsets: ['latin'],
});
export var metadata = {
    title: 'Ecommerce Next App',
    description: 'Developed by Abdullah Moiz',
    authors: [{ name: "Abdullah Moiz", url: 'https://abdullahmoiz.vercel.app/' }],
};
export default function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="en">
      <body className={poppin.className}>
        <Providers>
          {children}
        </Providers>
      </body>

    </html>);
}
