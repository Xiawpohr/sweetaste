import React from 'react'
import Mobile from '../components/Mobile.js'
import Desktop from '../components/Desktop.js'
import ProductList from '../components/ProductList.js'
import Container from '../styles/Container.js'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import Position from '../styles/Position.js'
import Background from '../styles/Background.js'
import Text from '../styles/Text.js'
import sweetBread from '../images/sweet-bread.jpg'
import macaronCoffee from '../images/macaron-coffee.jpg'
import creamPie from '../images/cream-pie.jpg'
import orangePopsicle from '../images/orange-popsicle.jpg'
import smallPancake from '../images/small-pancake.jpg'
import fruitPorridge from '../images/fruit-porridge.jpg'

const Home = () => (
  <div>
    <Mobile>
      <Background height={277} backgroundImage={`url(${sweetBread})`} />
      <Flex>
        <Box flex={1}>
          <Background backgroundImage={`url(${macaronCoffee})`}>
            <Box height={180} opacity={0.8} bg='darkGreen'>
              <Flex justifyContent='center' alignItems='center' style={{ height: '100%' }}>
                <Text fontSize={1} fontWeight={200} letterSpacing={4} color='white' mode='vertical-rl'>
                  本日精選
                </Text>
              </Flex>
            </Box>
          </Background>
        </Box>
        <Box flex={1}>
          <Background backgroundImage={`url(${creamPie})`}>
            <Box height={180} opacity={0.8} bg='darkGreen' borderLeft='1px solid' borderColor='white'>
              <Flex justifyContent='center' alignItems='center' style={{ height: '100%' }}>
                <Text fontSize={1} fontWeight={200} letterSpacing={4} color='white' mode='vertical-rl'>
                  人氣推薦
                </Text>
              </Flex>
            </Box>
          </Background>
        </Box>
        <Box flex={1}>
          <Background backgroundImage={`url(${orangePopsicle})`}>
            <Box height={180} opacity={0.8} bg='darkGreen' borderLeft='1px solid' borderColor='white'>
              <Flex justifyContent='center' alignItems='center' style={{ height: '100%' }}>
                <Text fontSize={1} fontWeight={200} letterSpacing={4} color='white' mode='vertical-rl'>
                  新品上市
                </Text>
              </Flex>
            </Box>
          </Background>
        </Box>
      </Flex>
      <Text p={3} fontSize={2} letterSpacing={4} color='darkGreen' textAlign='center' >為什麼——<br/>選擇了做甜點？</Text>
      <Background height={250} backgroundImage={`url(${smallPancake})`} />
      <Background bg='lightGreen'>
        <Text p={3} fontSize={0} fontWeight={200} lineHeight={2} color='green'>青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。 是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。</Text>
      </Background>
      <Text p={3} fontSize={2} letterSpacing={4} color='darkGreen' textAlign='center' >為什麼——<br/>一定要吃甜點？</Text>
      <Background height={250} backgroundImage={`url(${fruitPorridge})`} />
      <Background bg='lightGreen'>
        <Text p={3} fontSize={0} fontWeight={200} lineHeight={2} color='green'>青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。 是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。</Text>
      </Background>
      <Text p={3} fontSize={2} letterSpacing={4} color='darkGreen' textAlign='center'>想吃甜點——<br/>是不需要理由的。</Text>
      <Container>
        <ProductList />
      </Container>
    </Mobile>
    <Desktop>
      <Container>
        <Background height={496} backgroundImage={`url(${sweetBread})`} />
      </Container>
      <Position position='relative' top={-90}>
        <Container maxWidth={840}>
          <Flex>
            <Box flex={1}>
              <Background backgroundImage={`url(${macaronCoffee})`}>
                <Box height={256} opacity={0.8} bg='darkGreen'>
                  <Flex justifyContent='center' alignItems='center' style={{ height: '100%' }}>
                    <Text fontSize={2} fontWeight={200} letterSpacing={4} color='white' mode='vertical-rl'>
                      本日精選
                    </Text>
                  </Flex>
                </Box>
              </Background>
            </Box>
            <Box flex={1}>
              <Background backgroundImage={`url(${creamPie})`}>
                <Box height={256} opacity={0.8} bg='darkGreen' borderLeft='1px solid' borderColor='white'>
                  <Flex justifyContent='center' alignItems='center' style={{ height: '100%' }}>
                    <Text fontSize={2} fontWeight={200} letterSpacing={4} color='white' mode='vertical-rl'>
                      人氣推薦
                    </Text>
                  </Flex>
                </Box>
              </Background>
            </Box>
            <Box flex={1}>
              <Background backgroundImage={`url(${orangePopsicle})`}>
                <Box height={256} opacity={0.8} bg='darkGreen' borderLeft='1px solid' borderColor='white'>
                  <Flex justifyContent='center' alignItems='center' style={{ height: '100%' }}>
                    <Text fontSize={2} fontWeight={200} letterSpacing={4} color='white' mode='vertical-rl'>
                      新品上市
                    </Text>
                  </Flex>
                </Box>
              </Background>
            </Box>
          </Flex>
        </Container>
      </Position>
      <Box pb={100}>
        <Background height={420} bg='lightGreen'>
          <Position position='relative' top={-20}>
            <Box height={460}>
              <Container>
                <Flex justifyContent='space-between'>
                  <Box width={460}>
                    <Background height={460} backgroundImage={`url(${smallPancake})`} />
                  </Box>
                  <Box mt={90} height={280}>
                    <Text fontSize={0} fontWeight={200} lineHeight={2} color='green' mode='vertical-rl'>青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。 是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。</Text>
                  </Box>
                  <Box>
                    <Text fontSize={3} letterSpacing={4} color='darkGreen' mode='vertical-rl'>為什麼——<br/>選擇了做甜點？</Text>
                  </Box>
                </Flex>
              </Container>
            </Box>
          </Position>
        </Background>
      </Box>
      <Box pb={80}>
        <Background height={420} bg='lightGreen'>
          <Position position='relative' top={-20}>
            <Box height={460}>
              <Container>
                <Flex justifyContent='space-between'>
                  <Box mt={90} height={280}>
                    <Text fontSize={0} fontWeight={200} lineHeight={2} color='green' mode='vertical-rl'>青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。 是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。</Text>
                  </Box>
                  <Box>
                    <Text fontSize={3} letterSpacing={4} color='darkGreen' mode='vertical-rl'>為什麼——<br/>一定要吃甜點？</Text>
                  </Box>
                  <Box width={460}>
                    <Background height={460} backgroundImage={`url(${fruitPorridge})`} />
                  </Box>
                </Flex>
              </Container>
            </Box>
          </Position>
        </Background>
      </Box>
      <Flex pb={80} justifyContent='center'>
        <Text fontSize={3} letterSpacing={8} color='darkGreen' mode='vertical-rl'>想吃甜點——<br/>是不需要理由的。</Text>
      </Flex>
      <Container pb={5}>
        <ProductList />
      </Container>
    </Desktop>
  </div>
)

export default Home
