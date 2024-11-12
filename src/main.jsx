import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import  {store, persistor}  from './redux/store.js';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<Provider store={store}>
<BrowserRouter>
  <PersistGate persistor={persistor}>
    <App />
  </PersistGate>
</BrowserRouter>
</Provider>,
)

