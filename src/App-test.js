import React from 'react';
import ReactDOM from 'react-dom';
import PhInput from './inputs/pH-input/pH-input';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PhInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
