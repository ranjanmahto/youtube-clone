
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

function App() {

      const router= createBrowserRouter([{
        path:"/",
        element: <Body/>,
        children: [{
          path:"/",
          element: <MainContainer/>
        },
      {
        path:"watch",
        element:<WatchPage/>
      }]
      }])

  return (
    <div>
       <Provider store={appStore}>
          <Header/>
          <RouterProvider router={router} >
             
          </RouterProvider>
       </Provider>
    </div>
  );
}

export default App;
