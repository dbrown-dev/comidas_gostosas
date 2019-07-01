import { makeStyles } from '@material-ui/styles'

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
    wrap: 'nowrap',
  },
  recipePhoto: {
    width: 400,
    height: 400,
    objectFit: "cover",
    borderRadius: 5
  },
  recipePaper: {
    padding: "20px 30px",
    marginBottom: 30
  },
  greyRecipeBox: {
    backgroundColor: "#F5F4F4",
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
  }
}))