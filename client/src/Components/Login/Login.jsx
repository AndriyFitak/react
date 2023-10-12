import s from './login.css'
const Login = (props) => {
    return(
        <>
        <div className="loginblock">
           <div className="enterBlock">
                <span className="enterall"><span className="textenterall"> ВХІД</span></span>
                <span className="enterall2">Регістрація</span>
           </div>
           <h3 className="h3logintext">ВХІД</h3>
         </div>
         <div class="infoinput">
             <input placeholder="Введіть e-mail" type="text" class="e-mail"/>
             <input placeholder="Пароль" type="password" class="password"/> 
         </div>
         <p class="accepttext">Запамятати мене</p>
         <a class="forgotpassword" href="">Забули пароль?</a>
         <div class="enterDiv">
             <span class="entertext">ВХІД</span>
         </div>
         <p class="pacount">Ще немає акаунтів?</p>
         <a class="aacount" href="">Зареєструватися</a>
         <p class="pacount2">або увійдуть через</p>
        </>
    )
}
export default Login