import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BagProvider } from "../contexts/BagContext";

import GlobalStyle from "../styles/global";

const App = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  main {
    flex: 1;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <App>
      <GlobalStyle />
      <BagProvider>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </BagProvider>
    </App>
  );
}

export default MyApp;
