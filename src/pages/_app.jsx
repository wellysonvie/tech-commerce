import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BagProvider } from "../contexts/BagContext";

import GlobalStyle from "../styles/global";

const App = styled.div``;

function MyApp({ Component, pageProps }) {
  return (
    <App>
      <GlobalStyle />
      <BagProvider>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </BagProvider>
      <Footer />
    </App>
  );
}

export default MyApp;
