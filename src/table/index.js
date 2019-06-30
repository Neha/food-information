import React from 'react';
import PropTypes from 'prop-types';
import TableStyle from './Table.style';

const Table = (props) => {
  const { data: list, children } = props;
  const childs = React.Children.map(children, child => React.cloneElement(child, { list }));
  return <TableStyle>{childs}</TableStyle>;
};

Table.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default Table;
