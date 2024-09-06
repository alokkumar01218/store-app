import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);


  return (
    <Container maxW={"container-xl"} py={12}>
      <VStack spacing={8}>
        <Text
          bgGradient={"linear(to-l, #7928CA, #FF0080)"}
          bgClip={"text"}
          fontSize={"30"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Products
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          w={"full"}
        >
            {products.map((product) => (
              <ProductCard key={product._id} product = {product}/>
            ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text
          fontSize="xl"
          textAlign={"center"}
          fontWeight="bold"
          color="gray.500"
        >
          No Products Found{" "}
          <Link to={"/create"}>
            <Text
              as="span"
              color="#FF0080"
              _hover={{ textDecoration: "underline" }}
            >
              Create a Product
            </Text>
          </Link>
        </Text>
        )}

        
      </VStack>
    </Container>
  );
}
