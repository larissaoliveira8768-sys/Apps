import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// const usuarios = [
//   { id: 1, nome: "Ana", email: "ana@email.com" },
//   { id: 2, nome: "Bruno", email: "bruno@email.com" },
//   { id: 3, nome: "Carlos", email: "carlos@email.com" },
// ];

// function ListaUsuarios() {
//   return (
//     <ul>
//       {usuarios.map((usuario) => (
//         <li key={usuario.id}>
//           {usuario.nome} - {usuario.email}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default ListaUsuarios;


// function ListaUsuarios() {
//   // A Versão B (useState) é necessária para o CRUD porque permite
//   // que o React detecte alterações nos usuários e atualize a tela
//   // automaticamente sempre que adicionamos, editamos ou excluímos
//   // um usuário. Uma variável comum não provoca essa atualização.
//   const [usuarios, setUsuarios] = useState([
//     { id: 1, nome: "Ana", email: "ana@email.com" },
//     { id: 2, nome: "Bruno", email: "bruno@email.com" },
//     { id: 3, nome: "Carlos", email: "carlos@email.com" },
//   ]);

//   return (
//     <ul>
//       {usuarios.map((usuario) => (
//         <li key={usuario.id}>
//           {usuario.nome} - {usuario.email}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default ListaUsuarios;



// function ListaDeNomes() {
//   const [nomes, setNomes] = useState(["Ana", "Bruno"]);
//   const [input, setInput] = useState("");

//   function adicionarNome() {
//     if (input.trim() === "") return;

//     setNomes([...nomes, input]);
//     setInput("");
//   }

//   return (
//     <div>
//       <h2>Lista de Nomes</h2>

//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Digite um nome"
//       />

//       <button onClick={adicionarNome}>
//         Adicionar
//       </button>

//       <ul>
//         {nomes.map((nome, index) => (
//           <li key={index}>{nome}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ListaDeNomes;


// function ListaTarefas() {
//   const [tarefas, setTarefas] = useState([]);
//   const [input, setInput] = useState("");

//   function adicionarTarefa() {
//     if (input.trim() === "") return;

//     const novaTarefa = {
//       id: Date.now(),
//       texto: input,
//     };

//     setTarefas([...tarefas, novaTarefa]);
//     setInput("");
//   }

//   return (
//     <div>
//       <h2>Lista de Tarefas</h2>

//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Digite uma tarefa"
//       />

//       <button onClick={adicionarTarefa}>
//         Adicionar
//       </button>

//       <ul>
//         {tarefas.map((tarefa) => (
//           <li key={tarefa.id}>
//             {tarefa.texto}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ListaTarefas;

