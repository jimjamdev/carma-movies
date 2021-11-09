import styled from '@emotion/styled'
import { ColorProps, SpaceProps } from 'styled-system';
import {
  space,
  color,
  fontSize,
  width,
} from 'styled-system'

export interface IButton extends SpaceProps, ColorProps {}

export const Button = styled.button<IButton>`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`