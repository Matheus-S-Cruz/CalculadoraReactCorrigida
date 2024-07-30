import { useState } from 'react'
import './App.css'
import Mensagem from './components/Mensagem';
import Frase from './components/Frase';
import Calculadora from './components/Calculadora';

function Saudacao(){
  return <h1>Calculadora</h1>;
}
function App() {

  return (
    <>
      <Saudacao/>
      <Mensagem texto={"Seja Bem Vindo À Minha Calculadora!"}/>
      <Frase/>
      <Calculadora/>
    </>
  )
}

export default App
