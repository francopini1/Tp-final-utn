import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import App from './App.jsx';
import ProviderUsers from './Context/ContextDataUser/ProviderDataUser.jsx';
import ProviderIdUser from './Context/ContextIdUser/ProviderIdUser.jsx';
import ProviderLoadingChat from './Context/ContextLoadingChat/ProviderLoadingChat.jsx';
import './index.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProviderUsers>
      <ProviderLoadingChat>
        <ProviderIdUser>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProviderIdUser>
      </ProviderLoadingChat>
    </ProviderUsers>
  </StrictMode>,
)
