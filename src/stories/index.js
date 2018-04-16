import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import Clock from '../components/clock'
import Page from '../components/page/'
import Toggle from '../components/toggle'

storiesOf('Clock', module).add('sample', () => <Clock />)

storiesOf('Page', module).add('sample', () => <Page />)

storiesOf('Toggle', module).add('sample', () => <Toggle />)
