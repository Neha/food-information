import React from 'react';
import PropTypes from 'prop-types';
import TableHeadStyle from './TableHead.style';

const TableHead = (props) => {
  const { children } = props;
  return <TableHeadStyle>{children}</TableHeadStyle>;
};

TableHead.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableHead;
