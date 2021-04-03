import { render } from "@testing-library/react";
import React from 'react';
import reactDom from 'react-dom';
import App from './app';

reactDom.render(<App/> ,document.getElementById('root') );