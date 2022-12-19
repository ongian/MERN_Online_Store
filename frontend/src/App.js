import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import PDP from './pages/PDP/PDP';
const App = () => {
  const router = createBrowserRouter([
    { 
      path: '/', 
      element: <Layout />,
      children: [
        { path: '/', element: <Home />},
        { path: '/product/:productId', element: <PDP />}
      ] 
    }
  ]);

  return <RouterProvider router={router} />
}

export default App;
