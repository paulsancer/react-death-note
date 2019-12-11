import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import dummyPosts from 'victimsData';
import TargetCard from './TargetCard';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  }
}));

const Notebook = () => {
  const classes = useStyles();

  const [victims, setVictims] = useState(dummyPosts);

  const setUpdatingVictim = (victimId, isLoading = true) => {
    const newVictims = [...victims];
    const victim = newVictims.find(v => v.id === victimId);
    victim.isLoading = isLoading;
    setVictims(newVictims);
  };

  const handleVote = victimId => {
    setUpdatingVictim(victimId, true);
    setTimeout(() => {
      const newVictims = [...victims];
      const victim = newVictims.find(v => v.id === victimId);
      victim.votes += 1;
      victim.isLoading = false;
      setVictims(newVictims);
    }, 1000);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="row">
        {victims &&
          victims.map(victim => (
            <Grid key={victim.id} item xs={12} sm={6} md={4} lg={3}>
              <TargetCard
                victim={victim}
                isLoading={victim.isLoading}
                handleVote={handleVote}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Notebook;
