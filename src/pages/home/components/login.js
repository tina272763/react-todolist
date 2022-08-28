import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <form class="formControls" action="index.html">
                <h2 class="formControls_txt">最實用的線上代辦事項服務</h2>
                <label class="formControls_label" for="email">Email</label>
                <input class="formControls_input" type="text" id="email" name="email" placeholder="請輸入 email" required/>
                <span>此欄位不可留空</span>
                <label class="formControls_label" for="pwd">密碼</label>
                <input class="formControls_input" type="password" name="pwd" id="pwd" placeholder="請輸入密碼" required/>
                <input class="formControls_btnSubmit" type="button" value="登入"/>
                <NavLink className='formControls_btnLink' to='/signup'>
                    註冊帳號
                </NavLink>
            </form>
        </div>
    )
}

export default Login;