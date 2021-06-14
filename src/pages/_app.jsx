import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

import GlobalStyle from "../styles/global";

const App = styled.div``;

function MyApp({ Component, pageProps }) {
  return (
    <App>
      <GlobalStyle />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </App>
  );
}

export default MyApp;
