import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.activeTab === props.label && '#e91e63')};
  border: none;
  box-shadow: ${(props) => (props.activeTab === props.label
    ? '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)' : '')};
  border-radius: ${(props) => (props.activeTab === props.label ? '4px' : '0')};
  width: 100%;
  float: left;
  position: relative;
  display: inline-block;
  outline: none;
  transition: all 0.15s;
  z-index: ${(props) => (props.activeTab === props.label ? '1' : '0')};
  transform: ${(props) => (props.activeTab === props.label ? 'scale(1.05, 1.15)' : 'scale(1)')};
`;

const Label = styled.span`
  color: ${(props) => (props.activeTab === props.label ? '#fff' : '#767676')};
  text-align: center;
  border: none;
  text-transform: uppercase;
  position: relative;
  display: block;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
`;

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
      <Button
        type="submit"
        activeTab={activeTab}
        label={label}
        className={className}
        onClick={onClick}
        onKeyPress={onClick}
      >
        <Label
          activeTab={activeTab}
          label={label}
        >
          {label}
        </Label>
      </Button>
    );
  }
}

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
