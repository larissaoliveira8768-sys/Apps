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


// function ListaDeNomes() {
//   const [nomes, setNomes] = useState([
//     { id: 1, texto: "Ana" },
//     { id: 2, texto: "Bruno" }
//   ]);

//   const [input, setInput] = useState("");

//   function adicionarNome() {
//     if (input.trim() === "") return;

//     const novoNome = {
//       id: Date.now(),
//       texto: input
//     };

//     setNomes([...nomes, novoNome]);
//     setInput("");
//   }

//   function removerNome(id) {
//     setNomes(nomes.filter((nome) => nome.id !== id));
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
//         {nomes.map((nome) => (
//           <li key={nome.id}>
//             {nome.texto}

//             <button onClick={() => removerNome(nome.id)}>
//               Remover
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ListaDeNomes;





// function App() {
//   const [tarefas, setTarefas] = useState([]);
//   const [input, setInput] = useState("");

//   function adicionarTarefa() {
//     if (input.trim() === "") return;

//     const novaTarefa = {
//       id: Date.now(),
//       texto: input
//     };

//     setTarefas([...tarefas, novaTarefa]);
//     setInput("");
//   }

//   function removerTarefa(id) {
//     setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
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

//       <h3>Total de tarefas: {tarefas.length}</h3>

//       <ul>
//         {tarefas.map((tarefa) => (
//           <li key={tarefa.id}>
//             {tarefa.texto}

//             <button onClick={() => removerTarefa(tarefa.id)}>
//               Remover
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// O filter() é preferível ao splice() porque não modifica
// o array original, mas retorna um novo array com os itens
// que passaram pela condição. Isso é importante no React,
// pois devemos preservar o estado original e criar um novo
// array para atualizar o estado corretamente.




// function App() {
//   const [tarefas, setTarefas] = useState([]);
//   const [input, setInput] = useState("");

//   function adicionarTarefa() {
//     if (input.trim() === "") return;

//     const novaTarefa = {
//       id: Date.now(),
//       texto: input
//     };

//     setTarefas([...tarefas, novaTarefa]);
//     setInput("");
//   }

//   function removerTarefa(id) {
//     setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
//   }

//   function editarTarefa(id) {
//     const novoTexto = prompt("Novo texto:");

//     if (novoTexto) {
//       setTarefas(
//         tarefas.map((tarefa) =>
//           tarefa.id === id
//             ? { ...tarefa, texto: novoTexto }
//             : tarefa
//         )
//       );
//     }
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

//       <h3>Total de tarefas: {tarefas.length}</h3>

//       <ul>
//         {tarefas.map((tarefa) => (
//           <li key={tarefa.id}>
//             {tarefa.texto}

//             <button onClick={() => editarTarefa(tarefa.id)}>
//               Editar
//             </button>

//             <button onClick={() => removerTarefa(tarefa.id)}>
//               Remover
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [textoEditado, setTextoEditado] = useState("");

  function adicionarTarefa() {
    if (input.trim() === "") return;

    const novaTarefa = {
      id: Date.now(),
      texto: input
    };

    setTarefas([...tarefas, novaTarefa]);
    setInput("");
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  function iniciarEdicao(tarefa) {
    setEditandoId(tarefa.id);
    setTextoEditado(tarefa.texto);
  }

  function salvarEdicao(id) {
    if (textoEditado.trim() === "") return;

    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, texto: textoEditado }
          : tarefa
      )
    );

    setEditandoId(null);
    setTextoEditado("");
  }

  function cancelarEdicao() {
    setEditandoId(null);
    setTextoEditado("");
  }

  return (
    <div>
      <h2>Lista de Tarefas</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite uma tarefa"
      />

      <button onClick={adicionarTarefa}>
        Adicionar
      </button>

      <h3>Total de tarefas: {tarefas.length}</h3>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>

            {editandoId === tarefa.id ? (
              <>
                <input
                  type="text"
                  value={textoEditado}
                  onChange={(e) => setTextoEditado(e.target.value)}
                />

                <button onClick={() => salvarEdicao(tarefa.id)}>
                  Salvar
                </button>

                <button onClick={cancelarEdicao}>
                  Cancelar
                </button>
              </>
            ) : (
              <>
                {tarefa.texto}

                <button onClick={() => iniciarEdicao(tarefa)}>
                  Editar
                </button>

                <button onClick={() => removerTarefa(tarefa.id)}>
                  Remover
                </button>
              </>
            )}

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


