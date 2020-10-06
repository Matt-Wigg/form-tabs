import React from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';

const TabWrap = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0,0,0,.05), 0 0 0 1px rgba(63,63,68,.1);
  font-family: Roboto,Helvetica Neue,Arial,sans-serif;
  font-weight: 400;
`;

const App = () => (
  <TabWrap>
    <Tabs>
      <div label="FIRST TAB">
        See ya later, Alligator!
      </div>
      <div label="SECOND TAB">
        After awhile, Crocodile!
      </div>
      <div label="THIRD TAB">
        Nothing to see here, this tab is extinct!
      </div>
    </Tabs>
  </TabWrap>
);

export default App;
