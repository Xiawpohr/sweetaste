import React from 'react'
import CategoryHeroItem from './CategoryHeroItem.js'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'

const CategoryHero = () => (
  <Flex>
    <Box flex={1}>
      <CategoryHeroItem title='本日精選' backgroundImage={`url(https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73ed228f25bdefd2291c242f6d390fca&auto=format&fit=crop&w=800&q=60)`} />
    </Box>
    <Box flex={1} borderLeft='1px solid' borderColor='white'>
      <CategoryHeroItem title='人氣推薦' backgroundImage={`url(https://images.unsplash.com/photo-1504114133367-631ecd3db3ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b75e93d90cd88467ae5715becb431a26&auto=format&fit=crop&w=800&q=60)`} />
    </Box>
    <Box flex={1} borderLeft='1px solid' borderColor='white'>
      <CategoryHeroItem title='新品上市' backgroundImage={`url(https://images.unsplash.com/photo-1499638472904-ea5c6178a300?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c27da96f7150c96a92ba8a53c8644761&auto=format&fit=crop&w=800&q=60)`} />
    </Box>
  </Flex>
)

export default CategoryHero
