import React from 'react';
import {render} from 'react-dom';

import {routes} from './routes.jsx';

require('./main.scss');

render(routes(), document.getElementById('root'));