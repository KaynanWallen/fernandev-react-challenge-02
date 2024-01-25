import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {

  const [email, setemail] = useState('') 
  const [password, setpassword] = useState('')
  const [messageError, setMessageError] = useState('')
  const [processandoLogin, setProcessandoLogin] = useState(false)

  function handleChangeEmail(event){
    setemail(event.target.value)
  }

  function handleChangePassword(event){
    setpassword(event.target.value)
  }

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        <div className='errorMessage'> {messageError} </div>
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'} type={'email'} autoComplete='off' onChange={handleChangeEmail}/>
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'} type={'password'} onChange={handleChangePassword}/>
        </div>


        <div className='button'>
          <button onClick={() => {
            setProcessandoLogin(true)
            login({email, password}).then((response) => {
              alert('Sucesso no Login')
            }).catch((err) => {
              setMessageError(err.message)
              console.log(err)
            }).finally(() => setProcessandoLogin(false))
          }} disabled={email == '' || password.length < 6 || processandoLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}
