import { makeStyles } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2a2e36'
    },
    secondary: {
      main: '#FFDF59'
    }
  },
  spacing: 8,
  typography: {
    fontSize: 16
  }
})

export const useStyles = makeStyles(theme => ({
  formControl: {
    margin: 10,
    fullWidth: true,
    display: 'flex',
    wrap: 'nowrap'
  },
  white: {
    color: '#FFF'
  },
  textField: {
    width: 300,
    margin: theme.spacing(1)
  },
  textAera: {
    width: '95%',
    margin: theme.spacing(1)
  },
  instruction: {
    width: '100%',
    margin: theme.spacing(1)
  },
  instructionThumb: {
    width: 150,
    height: 150,
    objectFit: 'cover',
    margin: theme.spacing(1.5),
    borderRadius: 10
  },
  addRecipePhoto: {
    width: 300,
    height: 300,
    objectFit: 'cover',
    borderRadius: 5
  }
}))
