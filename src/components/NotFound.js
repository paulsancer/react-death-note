import React from 'react';
import Button from '@material-ui/core/Button';
import { LinkWithRef } from './utils/links';

export default () => (
  <div style={{ textAlign: 'center' }}>
    <Button size="small" color="primary" component={LinkWithRef} to="/">
      Back to Home
    </Button>
    <br />
    <br />
    <img src="https://httpstatusdogs.com/img/404.jpg" alt="Not found" />
  </div>
);
