import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tab from './Tab';

const TabsWrap = styled.ol`
  display: flex;
  flex-flow: row;
  padding: 0;
  width: 100%;
`;

class Tabs extends Component {
  constructor(props) {
    super(props);
    const { children } = this.props;
    this.state = {
      activeTab: children[0].props.label,
    };
    this.onClickTabItem = this.onClickTabItem.bind(this);
  }

  onClickTabItem(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    const { onClickTabItem, props: { children }, state: { activeTab } } = this;
    return (
      <div className="tabs">
        <TabsWrap className="tab-list">
          {children.map((child) => {
            const { label } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </TabsWrap>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

export default Tabs;
