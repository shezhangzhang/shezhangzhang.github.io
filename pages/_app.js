import "../styles/global.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-J0YBZWY3N7`}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J0YBZWY3N7', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
