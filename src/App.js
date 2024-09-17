const React = require('react');
const { Component } = React;

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      senha: '',
      mensagem: ''
    }
  }

  handleEntraEmail = (event) => {
    this.setState({ email: event.target.value })
    console.log(event.target.value)
  }

  handleEntraSenha = (event) => {
    this.setState({ senha: event.target.value })
    console.log(event.target.value)
  }

  handleValidaLogin = (event) => {
    event.preventDefault()

    const emailValido = 'validacao@email.com'
    const senhaValida = 'validacaoOK'

    const { email, senha } = this.state

    if (email === emailValido && senha === senhaValida) {
      this.setState({ mensagem: 'Acessado com Sucesso' })
    } else {
      this.setState({ mensagem: 'Erro ao Acessar' })
    }
  }

  render () {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleValidaLogin}>
          <label>
            E-mail:
            <input
              type='email'
              value={this.state.email}
              onChange={this.handleEntraEmail}
            />
          </label>
          <br />
          <label>
            Senha:
            <input
              type='password'
              value={this.state.senha}
              onChange={this.handleEntraSenha}
            />
          </label>
          <br />
          <button type='submit'>Acessar</button>
        </form>
        {this.state.mensagem && <p>{this.state.mensagem}</p>}
      </div>
    )
  }
}
export default App
