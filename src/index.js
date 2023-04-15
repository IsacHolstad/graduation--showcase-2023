import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://clyilnmdjoozdomxhvfv.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNseWlsbm1kam9vemRvbXhodmZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyODM2OTIsImV4cCI6MTk5Mzg1OTY5Mn0.rkgHPLZk47I708qnawB4RuPg58l096SrZcwKiKcR5bA");


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

       <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
