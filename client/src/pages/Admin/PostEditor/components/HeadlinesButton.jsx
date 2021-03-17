/* eslint-disable-next-line */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeadlinesPicker from './HeadlinesPicker';

export default class HeadlinesButton extends Component {
  // When using a click event inside overridden content, mouse down
  // events needs to be prevented so the focus stays in the editor
  // and the toolbar remains visible  onMouseDown = (event) => event.preventDefault()
  onMouseDown = (event) => event.preventDefault();

  render() {
    const { onOverrideContent } = this.props;

    const onClick = () => onOverrideContent(HeadlinesPicker);

    return (
      <div
        role="button"
        tabIndex="0"
        onMouseDown={this.onMouseDown}
        className="headlineButtonWrapper"
      >
        <button type="button" onClick={onClick} className="headlineButton">
          H
        </button>
      </div>
    );
  }
}

HeadlinesButton.propTypes = {
  onOverrideContent: PropTypes.func.isRequired,
};
