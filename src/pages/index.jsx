import Head from "next/head";
import Banner from "../components/Banner";
import data from "../../data.json";

import { Container } from "../styles/Home";

export default function Home({ bannerProduct, categories }) {
  return (
    <Container>
      <Head>
        <title>Home | Tech Commerce</title>
        <meta
          name="description"
          content="E-commerce de eletrônicos, portáteis e informática."
        />
      </Head>

      <Banner product={bannerProduct} />
    </Container>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      bannerProduct: data.bannerProduct,
      categories: data.categories,
    },
  };
}
