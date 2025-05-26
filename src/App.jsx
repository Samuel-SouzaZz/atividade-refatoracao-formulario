import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
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

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post('https://reqres.in/api/users', formData, {
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
      });
      alert('Usuário criado! ID: ' + response.data.id);
      
      setFormData({
        name: '',
        email: '',
        job: '',
        age: '',
        city: '',
        state: '',
        phone: '',
        github: ''
      });
    } catch (error) {
      alert('Erro ao enviar os dados.');
      console.error(error);
    }
  }

  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <input 
          name="name"
          placeholder="Nome" 
          value={formData.name} 
          onChange={handleInputChange}
          required
        />
        <input 
          name="email"
          type="email"
          placeholder="Email" 
          value={formData.email} 
          onChange={handleInputChange}
          required
        />
        <input 
          name="job"
          placeholder="Cargo" 
          value={formData.job} 
          onChange={handleInputChange}
          required
        />
        <input 
          name="age"
          type="number"
          placeholder="Idade" 
          value={formData.age} 
          onChange={handleInputChange}
          required
        />
        <input 
          name="city"
          placeholder="Cidade" 
          value={formData.city} 
          onChange={handleInputChange}
          required
        />
        <input 
          name="state"
          placeholder="Estado" 
          value={formData.state} 
          onChange={handleInputChange}
          required
        />
        <input 
          name="phone"
          type="tel"
          placeholder="Telefone" 
          value={formData.phone} 
          onChange={handleInputChange}
          required
        />
        <input 
          name="github"
          type="url"
          placeholder="GitHub" 
          value={formData.github} 
          onChange={handleInputChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
