/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const style = css`
  /* mostly rules to override the defaults */
  /* no platform-native styling including webkit, blink, edge, newer firefox */
  -webkit-appearance: none;
  -moz-appearance: none; /* and older firefox */
  background-color: unset;
  border: none;
  color: unset;
  cursor: pointer;
  display: inline-block;
  font: unset;
  margin: 0;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
`

const BaseButton = React.forwardRef((props, ref) => {
  const { children, type = 'button' } = props
  return (
    <button type={type} css={style} ref={ref} {...props}>
      {children}
    </button>
  )
})

export default BaseButton
