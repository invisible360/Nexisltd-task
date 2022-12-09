
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/Router';
import AppProvider from './Context/AppProvider';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <div className="max-w-screen-xl	mx-auto">
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <RouterProvider router={router}></RouterProvider>
        </AppProvider>
      </QueryClientProvider>
      <Toaster />
    </div>
  );
}

export default App;
