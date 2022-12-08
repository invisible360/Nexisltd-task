
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/Router';
import AppProvider from './Context/AppProvider';

function App() {
  return (
    <div className="max-w-screen-xl	mx-auto">
      <AppProvider>
        <RouterProvider router={router}></RouterProvider>
      </AppProvider>
      <Toaster />
    </div>
  );
}

export default App;
