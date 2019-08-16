import { makeStyles } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#dd2c00'
    },
    secondary: {
      main: '#4a148c'
    }
  },
  spacing: 8
})

export const useStyles = makeStyles(theme => ({
  photoBanner: {
    background: 'url(/images/banner.jpg) no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    height: '200px'
  },
  appTitle: {
    fontFamily: 'Chewy',
    position: 'relative',
    fontSize: '7rem',
    textAlign: 'center',
    margin: '0 auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#FFF'
  },
  formControl: {
    margin: 10,
    fullWidth: true,
    display: 'flex',
    wrap: 'nowrap'
  },
  recipePhoto: {
    width: 400,
    height: 400,
    objectFit: 'cover',
    borderRadius: 5
  },
  recipePaper: {
    padding: '20px 30px',
    marginBottom: 30
  },
  greyRecipeBox: {
    backgroundColor: '#F5F4F4',
    padding: 10
  },
  white: {
    color: '#FFF'
  },
  recipeList: {
    marginTop: 40
  },
  recipeCard: {
    maxWidth: 345
  },
  cardMedia: {
    height: 140
  },
  cardTitle: {
    minHeight: 80
  },

  progress: {
    position: 'absolute',
    top: '50%',
    left: '45%'
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
