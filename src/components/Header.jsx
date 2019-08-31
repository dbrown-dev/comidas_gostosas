import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar } from '@material-ui/core'

import Filter from './Filter'

const Header = ({ displayFilter }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>{displayFilter && <Filter />}</Toolbar>
      </AppBar>
    </>
  )
}

export default Header

Header.propTypes = {
  displayFilter: PropTypes.bool
}
