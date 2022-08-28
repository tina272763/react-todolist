import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const userLogin = async(user) => {
        alert();
    }

    return (
        <div>
            <form class="formControls" onSubmit={handleSubmit(userLogin)}>
                <h2 class="formControls_txt">註冊帳號</h2>
                
                <label class="formControls_label" for="email">Email</label>
                <input class="formControls_input" type="email" id="email" name="email" placeholder="請輸入 email"
                    {...register("email", {
                        required: { value: true, message: "此欄位必填" },
                        pattern: { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message:"不符合 Email 規則" }
                    })}
                />
                <span>{errors.email?.message}</span>

                <label class="formControls_label" for="name">您的暱稱</label>
                <input class="formControls_input" type="text" name="name" id="name" placeholder="請輸入您的暱稱"
                    {...register("name", {
                        required: { value: true, message: "此欄位必填" }
                    })}
                />
                <span>{errors.name?.message}</span>

                <label class="formControls_label" for="password">密碼</label>
                <input class="formControls_input" type="password" placeholder="請輸入密碼" name="password" id="password"
                    {...register("password", {
                        required:{ value: true, message: "此欄位必填" },
                    })}
                />
                <span>{errors.password?.message}</span>

                <label class="formControls_label" for="password2">再次輸入密碼</label>
                <input class="formControls_input" type="password" placeholder="請再次輸入密碼" name="password2" id="password2"
                    {...register("password2", {
                        required:{ value: true, message: "此欄位必填" },
                        validate: (value) => {
                            if (watch('password') !== value) {
                              return "兩次密碼輸入不同";
                            }
                        }
                    })}
                />
                <span>{errors.password2?.message}</span>

                <input class="formControls_btnSubmit" type="submit" value="註冊帳號" />
                <NavLink className='formControls_btnLink' to='/'>
                    登入
                </NavLink>
            </form>
        </div>
    )
}

export default Signup;