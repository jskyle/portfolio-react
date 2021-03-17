/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable-next-line */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
} from '@draft-js-plugins/buttons';

export default class HeadlinesPicker extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.addEventListener('click', this.onWindowClick);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onWindowClick);
  }

  // Call `onOverrideContent` again with `undefined`
  // so the toolbar can show its regular content again.
  // eslint-disable-next-line implicit-arrow-linebreak
  // eslint-disable-next-line react/destructuring-assignment
  onWindowClick = () => this.props.onOverrideContent(undefined);

  render() {
    const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];

    return (
      <div>
        {buttons.map((Button) => (

          <Button key={Button.name} {...this.props} />
        ))}
      </div>
    );
  }
}

HeadlinesPicker.propTypes = {
  onOverrideContent: PropTypes.func.isRequired,
};
