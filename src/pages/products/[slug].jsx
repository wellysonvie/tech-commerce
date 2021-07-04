import Head from "next/head";
import ProductDetails from "../../components/ProductDetails";

import { Container } from "../../styles/ProductPage";

import data from "../../../data.json";

export default function ProductPage({ product }) {
  return (
    <Container>
      <Head>
        <title>{product.name} | Tech Commerce</title>
        <meta name="description" content={product.name} />
      </Head>
      <ProductDetails product={product} />
    </Container>
  );
}

export async function getServerSideProps(ctx) {
  const { slug } = ctx.params;

  return {
    props: {
      product: data.featuredProducts.find(({ id }) => id === slug),
    },
  };
}
