import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/conponents/Layouts';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
