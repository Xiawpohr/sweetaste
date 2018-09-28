import React from 'react'
import Mobile from '../components/Mobile.js'
import Desktop from '../components/Desktop.js'
import CategoryList from '../components/CategoryList.js'
import ProductList from '../components/ProductList.js'
import Pagination from '../components/Pagination.js'
import Container from '../styles/Container.js'
import Flex from '../styles/Flex.js'
import Background from '../styles/Background.js'
import Text from '../styles/Text.js'
import havingDessert from '../images/having-dessert.jpg'

const Products = () => (
  <div>
    <Mobile>
      <Background height={277} backgroundImage={`url(${havingDessert})`}>
        <Flex justifyContent='flex-end'>
          <Text mt={3} mr={3} fontSize={22} color='darkGreen' mode='vertical-rl' letterSpacing={6.5}>
            想吃甜點——<br /><span style={{ marginTop: 11 }}>是不需要理由的。</span>
          </Text>
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

    </Desktop>
  </div>
)

export default Products
