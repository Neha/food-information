import React from 'react';
import PropTypes from 'prop-types';
import RowItem from './Row.style';

const Row = (props) => {
  const { children, list } = props;

  return Object.keys(list).map((item) => {
    const element = list[item];
    element.index = item;
    return (
      <RowItem key={item} isIndented={element.isDelicious}>
        {children(element)}
      </RowItem>
    );
  });
};

Row.propTypes = {
  isDelicious: PropTypes.bool,
  children: PropTypes.func.isRequired,
};

Row.defaultProps = {
  isDelicious: false,
};

export default Row;
