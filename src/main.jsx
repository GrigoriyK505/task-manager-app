import "primereact/resources/themes/bootstrap4-light-purple/theme.css";  // или другую тему
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { StrictMode } from 'react';
import {store} from './redux/store.js';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App.jsx';
import './index.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
  </StrictMode>
)