import { Outlet } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import todo from '../../assets/images/todo.png';

const Home = () => {
    return (
        <div id="loginPage" class="bg-yellow">
            <div class="conatiner loginPage vhContainer">
                <div class="side">
                    <img class="logoImg" src={logo} alt=""/>
                    <img class="d-m-n" src={todo} alt="workImg"/>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Home;