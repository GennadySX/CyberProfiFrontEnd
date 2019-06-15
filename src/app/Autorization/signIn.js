import React from 'react'

export default class SignIn extends React.Component{
    render(){
        return(
            <div className='SignIn'>
                <form>
                    <label htmlFor="email">Почта:</label>
                    <input id="email" type="text" required/>
                    <br/>
                    <label htmlFor="password">Пароль:</label>
                    <input id="password" type="password"/>
                    <input type="submit" value="Войти"/>
                </form>
            </div>
        )
    }
}