import Head from "next/head";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";

import data from "../../data.json";

import { Container } from "../styles/Home";

export default function Home({ bannerProduct, categories, featuredProducts }) {
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
      <Categories categories={categories} />
      <FeaturedProducts products={featuredProducts} />
    </Container>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      bannerProduct: data.bannerProduct,
      categories: data.categories,
      featuredProducts: data.featuredProducts,
    },
  };
}
