
import { makeStyles } from '@material-ui/core';

const homePageStyle = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30%',
  },
}));

const infoTableStyle = makeStyles({
  root: {
    marginTop: 30,
    marginLeft: '10%',
    marginRight: '10%',
  },
});

export { homePageStyle, infoTableStyle };