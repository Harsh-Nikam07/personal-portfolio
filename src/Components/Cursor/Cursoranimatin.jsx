import React from 'react'

import AnimatedCursor from 'react-animated-cursor'

const Cursoranimatin = () => {
  return (
    <AnimatedCursor

    innerSize={25}
    outerSize={15}
    color='0,0,0'
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={5}

    clickables={[
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link',
      '.link-icons'
    ]}
    />
  )
}

export default Cursoranimatin;