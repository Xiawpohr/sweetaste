import React from 'react'
import Mobile from '../components/Mobile.js'
import Desktop from '../components/Desktop.js'
import Quote from '../components/Quote.js'
import CategoryList from '../components/CategoryList.js'
import ProductList from '../components/ProductList.js'
import Pagination from '../components/Pagination.js'
import Container from '../styles/Container.js'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import Background from '../styles/Background.js'
import havingDessert from '../images/having-dessert.jpg'

const Products = () => (
  <div>
    <Mobile>
      <Background height={277} backgroundImage={`url(${havingDessert})`}>
        <Flex justifyContent='flex-end'>
          <Box mt={3} mr={3}>
            <Quote firstLine='想吃甜點' secondLine='是不需要理由的。' fontSize={22} letterSpacing={6} />
          </Box>
        </Flex>
      </Background>
      <CategoryList />
      <Container my={3}>
        <ProductList />
      </Container>
      <Flex mb={3} justifyContent='center'>
        <Pagination />
      </Flex>
    </Mobile>
    <Desktop>
      <Container>
        <Background height={496} backgroundImage={`url(${havingDessert})`}>
          <Flex justifyContent='flex-end'>
            <Box mt={3} mr={3}>
              <Quote firstLine='想吃甜點' secondLine='是不需要理由的。' />
            </Box>
          </Flex>
        </Background>
        <Flex my={5}>
          <Box width={300}>
            <CategoryList />
          </Box>
          <Box pl={2} flex={1}>
            <ProductList />
            <Flex mt={3} justifyContent='flex-end'>
              <Pagination />
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Desktop>
  </div>
)

export default Products
