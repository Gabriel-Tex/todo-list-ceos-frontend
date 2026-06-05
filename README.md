# Todo List — Frontend

Interface web de uma aplicação de gerenciamento de tarefas, construída com React + Vite. Consome a [API REST](https://github.com/Gabriel-Tex/todo-list-ceos-backend) desenvolvida em Django com autenticação via JWT.

---

## Sumário

- [Visão geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Fluxo de autenticação](#fluxo-de-autenticação)
- [Comunicação com a API](#comunicação-com-a-api)
- [Componentes](#componentes)
- [Como executar](#como-executar)

---

## Visão geral

O frontend permite que usuários se cadastrem, façam login e gerenciem suas tarefas pessoais. Cada usuário visualiza, cria, edita, exclui e marca como concluídas apenas as suas próprias tarefas. A autenticação é baseada em tokens JWT armazenados no `localStorage`.

---

## Tecnologias

* React
* React Router DOM 
* HTML
* CSS
* Vite
* Docker 

---

## Estrutura do projeto

```
src/
├── App.jsx                  # Definição das rotas da aplicação
├── main.jsx                 # Ponto de entrada; envolve o app com BrowserRouter
├── style/
│   └── global.css           # Estilos globais
│
├── pages/                   # Páginas da aplicação (uma por rota)
│   ├── Login/
│   ├── Cadastro/
│   ├── Home/
│   └── Profile/
│
├── components/
│   ├── auth/                # Formulários de login e cadastro
│   │   ├── LoginForm/
│   │   └── CadastroForm/
│   ├── layout/              # Elementos estruturais de layout
│   │   ├── Header/
│   │   └── Footer/
│   ├── forms/               # Inputs de formulário genéricos
│   │   └── Search/
│   ├── task/                # Componentes relacionados a tarefas
│   │   ├── Task/            # Card de uma tarefa individual
│   │   ├── TaskList/        # Lista de tarefas + orquestração de estado
│   │   └── AddTaskForm/     # Formulário de criação de tarefa
│   ├── profile/
│   │   └── ProfileCard/     # Card com dados do usuário logado
│   └── ui/                  # Componentes reutilizáveis de UI
│       ├── Button/
│       ├── Input/
│       └── Checkbox/
│
├── routes/
│   └── PrivateRoute.jsx     # Guard de rota para páginas autenticadas
│
└── services/                # Camada de comunicação com a API
    ├── login.js
    ├── cadastro.js
    ├── logout.js
    ├── profile.js
    └── task.js
```

---

## Funcionalidades

### Autenticação
- **Cadastro** — cria conta e já autentica o usuário, redirecionando direto para a Home.
- **Login** — autentica com username e senha, armazena os tokens JWT no `localStorage`.
- **Logout** — invalida o refresh token na API e limpa o `localStorage`.
- **Proteção de rotas** — páginas autenticadas (`/` e `/profile`) são bloqueadas via `PrivateRoute`. Acesso sem token redireciona para `/login`.

### Tarefas
- **Listar** — carrega todas as tarefas do usuário ao entrar na Home.
- **Pesquisar** — barra de busca no header filtra tarefas por título em tempo real, consumindo o endpoint de busca da API (`?search=`).
- **Criar** — formulário com título, descrição, prioridade e prazo. A lista é atualizada imediatamente após a criação.
- **Editar** — cada tarefa possui um botão de edição que abre um formulário inline com os dados pré-preenchidos. Salva via `PUT`.
- **Marcar como concluída** — checkbox em cada tarefa alterna o status entre `pending` e `completed` via `PATCH`, sem recarregar a lista inteira.
- **Excluir** — remove a tarefa da UI imediatamente (atualização otimista) e dispara o `DELETE` na API.

### Perfil
- Exibe username, e-mail e data de criação da conta do usuário logado.

---

## Comunicação com a API

Toda a lógica de fetch está centralizada em `src/services/`.

### `task.js`

| Função | Método | Endpoint | Descrição |
|---|---|---|---|
| `getTasks(searchQuery)` | GET | `/api/tasks/` | Lista tarefas; aceita `?search=` |
| `getTask(id)` | GET | `/api/tasks/:id/` | Busca tarefa pelo ID |
| `createTask(task)` | POST | `/api/tasks/` | Cria nova tarefa |
| `updateTask(id, task)` | PUT | `/api/tasks/:id/` | Atualiza todos os campos |
| `patchTask(id, fields)` | PATCH | `/api/tasks/:id/` | Atualiza campos parciais |
| `deleteTask(id)` | DELETE | `/api/tasks/:id/` | Remove a tarefa |

### `login.js` / `cadastro.js` / `logout.js` / `profile.js`

| Função | Método | Endpoint |
|---|---|---|
| `loginRequest(username, password)` | POST | `/api/login/` |
| `cadastroRequest(username, email, password)` | POST | `/api/register/` |
| `logout()` | POST | `/api/logout/` |
| `profileRequest()` | GET | `/api/profile/` |

A URL base da API está definida individualmente em cada arquivo de serviço como `http://localhost:8000`.

---

## Componentes

### `PrivateRoute`
Guard de rota que lê o token do `localStorage`. Se não houver token, redireciona para `/login` com `replace`.

### `Header`
Recebe `icon`, `redirectTo`, `showSearch`, `searchValue` e `onSearchChange` via props. Quando `showSearch=true`, renderiza o `InputSearch` como componente controlado, ligado ao estado da `Home`.

### `TaskList`
Orquestra o estado das tarefas. Responsável por:
- Buscar tarefas na API (`fetchMyData`, via `useCallback`)
- Re-buscar quando `searchQuery` muda
- Gerenciar os handlers de status (`handleStatusChange`), edição (`handleEdit`) e exclusão (`handleDelete`)
- Repassar tudo via props para `Task` e `AddTaskForm`

### `Task`
Recebe uma tarefa e os callbacks `onStatusChange`, `onEdit` e `onDelete`. Gerencia internamente o estado `editando` (boolean) que alterna entre a visualização normal e o formulário de edição inline.

### `Checkbox`
Componente controlado. Recebe `checked` e `onChange`. O `id` é gerado aleatoriamente por instância para evitar conflitos quando múltiplas checkboxes são renderizadas na mesma página.

---

## Como executar

### Pré-requisitos

- Docker instalado e rodando

> O backend precisa estar rodando em `http://localhost:8000` antes de usar o frontend. Consulte o README do repositório da API.

---

### Subir o projeto pela primeira vez

```bash
docker compose up --build
```

- Builda a imagem do Node
- Sobe o container
- Inicia o servidor em `http://localhost:5173/`

---

### Das próximas vezes

```bash
docker compose up
```

---

### Parar o container

```bash
docker compose down
```

---

### Rebuild

Rebuild é necessário ao alterar o `Dockerfile` ou o `package.json` (para que o Docker instale as novas dependências):

```bash
docker compose up --build
```