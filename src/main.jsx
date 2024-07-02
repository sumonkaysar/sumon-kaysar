import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'react-photo-view/dist/react-photo-view.css';
import 'swiper/css';
import 'swiper/css/navigation';
import './index.css'
import ThemeProvider from './contexts/ThemeProvider'
import AuthProvider from './contexts/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
