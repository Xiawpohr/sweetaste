import styled from 'styled-components'
import { style } from 'styled-system'

const itemWidth = style({
  prop: 'itemWidth',
  cssProperty: 'width',
  transformValue: n => n + 'px'
})

const gap = style({
  prop: 'gap',
  cssProperty: 'margin',
  transformValue: n => `${n / 2}px`
})

const containerGap = style({
  prop: 'gap',
  cssProperty: 'margin',
  transformValue: n => `-${n / 2}px`
})

const Grid = styled.div`
  ${containerGap}
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;

  > * {
    ${itemWidth}
    ${gap}
  }
`

Grid.defaultProps = {
  itemWidth: 315,
  gap: 30
}

Grid.displayName = 'Grid'

export default Grid
