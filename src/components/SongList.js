import React from 'react';
import PropTypes from 'prop-types';
import { List, ListSubheader } from '@material-ui/core';

const SongsList = ({ title, children }) => (
  <List>
    <ListSubheader>{title}</ListSubheader>
    <div>{children}</div>
  </List>
);

SongsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};

export default SongsList;
