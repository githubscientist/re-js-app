import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './redux/app/store.js';
// uncomment the following line for enabling tailwindcss
// import './index.css'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);
