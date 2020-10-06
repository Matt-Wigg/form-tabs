import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const { onClick, props: { activeTab, label } } = this;
    let className = 'tab-list-item';
    if (activeTab === label) className += ' tab-list-active';
    return (
      <button
        type="submit"
        className={className}
        onClick={onClick}
        onKeyPress={onClick}
      >
        {label}
      </button>
    );
  }
}

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
