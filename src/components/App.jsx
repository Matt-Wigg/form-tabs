import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../../assets/styles';
import Tabs from './Tabs';

const FormWrap = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0,0,0,.05), 0 0 0 1px rgba(63,63,68,.1);
  font-weight: 400;
  width: 70%;
  margin: 20px;
`;

const FormHeader = styled.div`
  padding-top: 25px;
  padding-bottom: 10px;
  color: #333;
  font-weight: 300;
  font-size: 22px;
  text-align: center;
  line-height: 1.42857143;
`;

const FormHeaderTitle = styled.h4`
  margin: 0;
  color: #333;
  font-weight: 300;
  font-size: 22px;
  line-height: 30px;
`;

const FormHeaderBody = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #444;
  margin-bottom: 0;
  line-height: 1.5;
  margin: 0 0 10px;
`;

const App = () => (
  <FormWrap>
    <GlobalStyle />
    <FormHeader>
      <FormHeaderTitle>Awesome Form</FormHeaderTitle>
      <FormHeaderBody>Wow... This is a cool form.</FormHeaderBody>
    </FormHeader>
    <Tabs>
      <div label="FIRST TAB">
        Hey! I am tab One.
      </div>
      <div label="SECOND TAB">
        Hey! I am tab Two.
      </div>
      <div label="THIRD TAB">
        Hey! I am tab Three.
      </div>
    </Tabs>
  </FormWrap>
);

export default App;
