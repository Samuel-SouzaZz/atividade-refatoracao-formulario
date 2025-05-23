import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  // 2. Estado único para o formulário completo
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    job: '',
    age: '',
    city: '',
    state: '',
    phone: '',
    github: ''
  });

  // 1. Handler único dinâmico para onChange
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  // 4. Função handleSubmit com preventDefault
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post('https://reqres.in/api/users', formData, {
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
      });
      alert('Usuário criado! ID: ' + response.data.id);
    } catch (error) {
      alert('Erro ao enviar os dados.');
      console.error(error);
    }
  }

  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      {/* 4. onSubmit no formulário */}
      <form onSubmit={handleSubmit}>
        {/* 3. Campos obrigatórios com required */}
        <input 
          name="name"
          placeholder="Nome" 
          value={formData.name} 
          onChange={handleChange}
          required 
        />
        <input 
          name="email"
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange}
          required 
        />
        <input 
          name="job"
          placeholder="Cargo" 
          value={formData.job} 
          onChange={handleChange}
          required 
        />
        <input 
          name="age"
          placeholder="Idade" 
          value={formData.age} 
          onChange={handleChange}
          required 
        />
        <input 
          name="city"
          placeholder="Cidade" 
          value={formData.city} 
          onChange={handleChange}
          required 
        />
        <input 
          name="state"
          placeholder="Estado" 
          value={formData.state} 
          onChange={handleChange}
          required 
        />
        <input 
          name="phone"
          placeholder="Telefone" 
          value={formData.phone} 
          onChange={handleChange}
          required 
        />
        <input 
          name="github"
          placeholder="GitHub" 
          value={formData.github} 
          onChange={handleChange}
          required 
        />
        {/* 4. Botão tipo submit */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;