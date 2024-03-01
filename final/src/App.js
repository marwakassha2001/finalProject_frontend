import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./Routes/Routes";
import Signup from './Pages/Signup/Signup.js';
import Login from './Pages/Login/Login.js';

const queryClient = new QueryClient();

function App() {
  return (
    <div> 
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </div>
  );
}

export default App;
