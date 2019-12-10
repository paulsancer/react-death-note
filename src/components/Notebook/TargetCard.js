import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import { LinkWithRef } from 'components/utils/links';

const useStyles = makeStyles({
  rightButton: {
    marginLeft: 'auto !important'
  }
});

export default ({ post }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={post.name}
          height="300"
          image={post.image}
          title={post.name}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {post.name}
          </Typography>
          <Typography gutterBottom variant="caption" component="h2">
            {post.votes} votes, due date {post.date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.cause.substring(0, 350)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          component={LinkWithRef}
          to={`/posts/${post._id}`}
        >
          Read More
        </Button>
        <IconButton aria-label="share" className={classes.rightButton}>
          <PlusOneIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
