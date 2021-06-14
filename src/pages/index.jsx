import Head from "next/head";
import {Container} from "../styles/Home";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home | Tech Commerce</title>
        <meta
          name="description"
          content="E-commerce de eletrônicos, portáteis e informática."
        />
      </Head>
    </Container>
  );
}
