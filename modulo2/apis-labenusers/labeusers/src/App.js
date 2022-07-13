import React from 'react'
import './App.css';
import Axios from 'axios'
import axios from 'axios';
export default class App extends React.Component {
  state = {
    name: "",
    email: ""
  }

  render() {

    const inputEmail = (event) => {
      this.setState({ email: event.target.value })
      console.log(this.state.email)
    }


    const inputOnChange = (event) => {
      this.setState({ name: event.target.value })
      console.log(this.state.name)
    }


    const createUser = () => {

      const novouser = {

        name: this.state.name,

        email: this.state.email

      }

      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        novouser, {
        headers: {
          Authorization: "rafael-santos-alves"

        }
      }

      )
        .then((sucesso) => {
          alert("usuario criado com sucesso")
        })
        .catch((erro) => {
          alert("erro de cadastro")
          console.log(erro.response.data.message)
        })
    }

    return (
      <>
        <input onChange={inputEmail} placeholder='email' />
        <input onChange={inputOnChange} placeholder='nome' />
        <button type="submit" onClick={createUser}>enviar</button>
      </>
    )
  }
}
