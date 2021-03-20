import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

import Badge from './components/Badge'

const container = document.getElementById('app');

ReactDOM.render(<Badge name="Marlon" avatarUrl="https://avatars.githubusercontent.com/u/65986500?s=460&u=26f692c9dd72a99900f8c6af16fa16383eb8e29a&v=4" surname="Lavanda" jobTitle="Product Designer and Frontend Engineer" twitter="lavanda-marlon"/>, container);
