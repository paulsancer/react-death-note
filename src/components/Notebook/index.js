import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TargetCard from './TargetCard';
import Loader from 'components/utils/Loader';
import axios from 'axios';

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

  const [isLoading, setIsLoading] = useState(true);
  const [victims, setVictims] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      try {
        const resp = await axios.get('/api/victims');
        setVictims(resp.data);
      } catch (error) {}
      setIsLoading(false);
    };

    setTimeout(() => {
      fetch();
    }, 500);
  }, []);

  const setUpdatingVictim = (victimId, isLoading = true) => {
    const newVictims = [...victims];
    const victim = newVictims.find(v => v.id === victimId);
    victim.isLoading = isLoading;
    setVictims(newVictims);
  };

  const putVictim = async victim => {
    try {
      const { data } = await axios.put(`/api/victims/${victim.id}`, victim);
      return data;
    } catch (error) {
      setIsLoading(false);
      return null;
    }
  };

  const deleteVictim = async victim => {
    try {
      const resp = await axios.delete(`/api/victims/${victim.id}`, victim);
      console.log(resp);
      return true;
    } catch (error) {
      setIsLoading(false);
      return false;
    }
  };

  const handleVote = victimId => {
    setUpdatingVictim(victimId, true);
    setTimeout(async () => {
      const victim = victims.find(v => v.id === victimId);
      victim.votes += 1;
      victim.isLoading = undefined;
      const newVictim = await putVictim(victim);
      const newVictims = victims.map(vic =>
        vic.id === newVictim ? newVictim : vic
      );
      setVictims(newVictims);
    }, 1000);
  };

  const handleDelete = victimId => {
    setUpdatingVictim(victimId, true);
    setTimeout(async () => {
      const victim = victims.find(v => v.id === victimId);
      const isDeleted = await deleteVictim(victim);
      const newVictims = !isDeleted
        ? [...victims]
        : victims.filter(vic => vic.id !== victim.id);
      setVictims(newVictims);
    }, 1000);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="row">
        {isLoading ? (
          <Loader />
        ) : (
          victims.map(victim => (
            <Grid key={victim.id} item xs={12} sm={6} md={4} lg={3}>
              <TargetCard
                victim={victim}
                isLoading={victim.isLoading}
                handleVote={handleVote}
                handleDelete={handleDelete}
              />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default Notebook;
