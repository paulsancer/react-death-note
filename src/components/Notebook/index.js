import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import dummyPosts from 'posts';
import PostCard from './TargetCard';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default () => {
  const classes = useStyles();

  const [posts, setPosts] = useState(dummyPosts);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h4>Upcoming victims</h4>
        </Grid>
        {posts &&
          posts.map(post => (
            <Grid item xs={12} sm={6} md={3}>
              <PostCard post={post} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};
