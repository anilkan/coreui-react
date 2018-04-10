import React from 'react';
import ReactDOM from 'react-dom';
import Tform from './TForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});