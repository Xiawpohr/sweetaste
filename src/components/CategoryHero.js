import React from 'react'
import CategoryHeroItem from './CategoryHeroItem.js'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import macaronCoffee from '../images/macaron-coffee.jpg'
import creamPie from '../images/cream-pie.jpg'
import orangePopsicle from '../images/orange-popsicle.jpg'

const CategoryHero = () => (
  <Flex>
    <Box flex={1}>
      <CategoryHeroItem title='本日精選' backgroundImage={`url(${macaronCoffee})`} />
    </Box>
    <Box flex={1} borderLeft='1px solid' borderColor='white'>
      <CategoryHeroItem title='人氣推薦' backgroundImage={`url(${creamPie})`} />
    </Box>
    <Box flex={1} borderLeft='1px solid' borderColor='white'>
      <CategoryHeroItem title='新品上市' backgroundImage={`url(${orangePopsicle})`} />
    </Box>
  </Flex>
)

export default CategoryHero
