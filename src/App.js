import Home from './pages/home';
import Login from './pages/home/components/login';
import Signup from './pages/home/components/signup';

import { Routes, Route, HashRouter, NavLink } from 'react-router-dom';

function App() {
  return (
    <>
        <HashRouter>
            {/* <div className="nav-link">
              <NavLink to="/">
                <p>登入</p>
              </NavLink>
            </div> */}
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path='/' element={<Login />} />
                    <Route path='signup' element={<Signup />} />
                </Route>
                {/* <Route path='todo' element={<Todo />} /> */}
            </Routes>
        </HashRouter>
    </>
  );
}

export default App;
