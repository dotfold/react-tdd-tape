//
import React from 'react'
import createComponent from 'react-unit'
import TestUtils, { createRenderer } from 'react-addons-test-utils'

import tape from 'tape'
import addAssertions from 'extend-tape'
import jsxEquals from 'tape-jsx-equals'

// the component under test
import Button from './../button'

const test = addAssertions(tape, { jsxEquals })

// set up jsdom and assign to global for react TestUtils
require('jsdom-global')();

// begin tests
test('Component : Button', (t) => {

  t.test('it has correct props', (t) => {

    ///////
    const component = createComponent.shallow(<Button label='share' />)
    t.equal(component.props.className, 'default-class', '`className` should be default-class')
    t.equal(component.text, 'share', 'label props should be passed as `share`')
    ///////


    ////////
    const renderer = createRenderer()
    renderer.render(<Button label='share' />)
    const result = renderer.getRenderOutput()
    t.jsxEquals(result, <button className='default-class' onClick={undefined}>share</button>)
    //////////

    t.end()
  })

  t.test('click is handled', (t) => {

    t.plan(1)

    const handler = () => {
      t.ok(true)
      t.end()
    }

    const result = TestUtils.renderIntoDocument(<Button onClick={handler} />)
    const theButton = TestUtils.findRenderedDOMComponentWithTag(result, 'button')

    TestUtils.Simulate.click(theButton)

  })

})
