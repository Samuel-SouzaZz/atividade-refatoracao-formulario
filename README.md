# Atividade refatoração formulário

Projeto criado para servir como base de atividade de fixação no curso de Análise e desenvolvimento de sistema, disciplina Frameworks frontend - Faminas - 2025

## 📋 Refatorações Realizadas

Este projeto foi refatorado seguindo as melhores práticas de desenvolvimento React. As seguintes melhorias foram implementadas:

### ✅ 1. Handler de onChange Unificado
- **Antes**: 8 funções separadas para cada campo (`handleNameChange`, `handleEmailChange`, etc.)
- **Depois**: Uma única função `handleInputChange` que usa `e.target.name` para identificar dinamicamente o campo

### ✅ 2. Estado Único para o Formulário
- **Antes**: 8 estados separados usando múltiplos `useState`
- **Depois**: Um único objeto de estado `formData` que gerencia todos os campos do formulário

### ✅ 3. Campos Obrigatórios
- **Implementado**: Atributo `required` em todos os inputs
- **Tipos específicos**: Adicionados `type="email"`, `type="number"`, `type="tel"`, `type="url"` para melhor validação

### ✅ 4. onSubmit no Formulário
- **Antes**: `onClick` no botão
- **Depois**: `onSubmit` no `<form>` com `e.preventDefault()` e botão `type="submit"`

### 🔄 Funcionalidades Adicionais
- **Reset automático**: Formulário é limpo automaticamente após envio bem-sucedido
- **Melhor UX**: Validação HTML5 nativa com tipos de input apropriados

## Pré-requisitos

Antes de começar, você precisa ter o [Node.js](https://nodejs.org/) instalado em seu sistema.

Você pode verificar se o Node.js está instalado com o comando:

```bash
node -v
```

## Rodando o projeto localmente

Siga os passos abaixo para executar o projeto em sua máquina localmente:

1. **Clone o repositório** para sua máquina local:

   ```bash
   git clone https://github.com/SEU_USUARIO/atividade-refatoracao-formulario.git
   ```

2. **Entre no diretório do projeto**:

   ```bash
   cd atividade-refatoracao-formulario
   ```

3. **Instale as dependências** do projeto:

   O projeto usa o `npm` para gerenciar as dependências. Execute o comando:

   ```bash
   npm install
   ```

4. **Execute o servidor de desenvolvimento**:

   Após a instalação das dependências, inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. **Acesse o projeto**:

   Abra seu navegador e vá para a url exibida. Você verá a interface do seu projeto rodando localmente.

## 🛠️ Tecnologias Utilizadas

- React 18
- Vite
- Axios
- CSS3

## 📝 Estrutura do Código Refatorado

```jsx
// Estado unificado
const [formData, setFormData] = useState({
  name: '', email: '', job: '', age: '',
  city: '', state: '', phone: '', github: ''
});

// Handler unificado
function handleInputChange(e) {
  const { name, value } = e.target;
  setFormData(prevData => ({
    ...prevData,
    [name]: value
  }));
}

// Submit com preventDefault
function handleSubmit(e) {
  e.preventDefault();
  // ... lógica de envio
}
```

## 📤 API Utilizada

O formulário envia os dados para a API de teste [ReqRes](https://reqres.in/api/users) que simula uma operação de criação de usuário.
