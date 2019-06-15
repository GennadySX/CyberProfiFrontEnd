import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const styles = {
  link: {
    color: 'inherit',
  },
  about:{
    textDecoration: 'none',
    color: 'inherit',
    marginLeft: 30
  }
}

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" style={styles.link}>
          <Typography variant="h5" color="inherit">
            Тренажер ГИА
          </Typography>
        </Link>
        <Link to="#" style={styles.about}>
          <Typography variant="h5" color="inherit">
            Name
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
