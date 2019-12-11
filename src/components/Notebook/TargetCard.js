import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import DeleteIcon from '@material-ui/icons/Delete';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
  rightButton: {
    marginLeft: 'auto !important'
  }
});

export default ({ victim, handleVote, handleDelete, isLoading }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => history.push(`/victims/${victim.id}`)}>
        <CardMedia
          component="img"
          alt={victim.name}
          height="300"
          image={victim.image}
          title={victim.name}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {victim.name}
          </Typography>
          <Typography gutterBottom variant="caption" component="h2">
            Due on {victim.date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {victim.cause.substring(0, 350)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {isLoading ? (
          <CircularProgress size={30} style={{ margin: '0.55rem auto' }} />
        ) : (
          <>
            <IconButton
              color="primary"
              onClick={() => handleVote(victim.id)}
              aria-label="share"
            >
              <PlusOneIcon />
            </IconButton>
            <span>{victim.votes} votes</span>
            <IconButton
              onClick={() => handleDelete(victim.id)}
              aria-label="share"
              className={classes.rightButton}
            >
              <DeleteIcon />
            </IconButton>
          </>
        )}
      </CardActions>
    </Card>
  );
};
