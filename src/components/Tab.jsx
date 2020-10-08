import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.activeTab === props.label ? '#77a6f7' : '#aaa')};
  border: none;
  color: white;
  width: 100%;
  float: left;
  position: relative;
  display: inline-block;
  padding: 0;
  outline: none;
  box-shadow: inset 0px 0px 0px #23ccef;
  transition: all 0.25s !important;
`;

const Label = styled.span`
  color: #fff;
  text-align: center;
  border: none;
  text-transform: uppercase;
  position: relative;
  display: block;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
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
        <Label>{label}</Label>
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
