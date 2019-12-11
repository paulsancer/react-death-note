import React from 'react';
import { Link } from 'react-router-dom';

export const LinkWithRef = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props}>
    {props.children}
  </Link>
));
