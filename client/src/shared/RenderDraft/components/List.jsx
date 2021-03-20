
import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import './styles/List.css';

const List = ({ ordered, children }) => { 
  

  if (ordered) {
    return (
      <ol>
        {children}
      </ol>
    );
  }
  return (
  <ul>
    {children}
  </ul>
)};
List.propTypes = {
  ordered: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

List.defaultProps = {
  ordered: false,
};

export default List;
