📱 EasyTasks Mobile — Aplicativo de Lista de Tarefas

Um aplicativo mobile simples, rápido e intuitivo para gerenciamento de tarefas diárias, desenvolvido com React Native, AsyncStorage, React Navigation e UUID. O objetivo do EasyTasks é permitir que o usuário organize sua rotina com eficiência, oferecendo uma interface elegante e totalmente offline.

🎯 Resumo do Projeto

O EasyTasks Mobile é um aplicativo que permite criar, listar, concluir e excluir tarefas. Todos os dados são persistidos localmente no dispositivo usando AsyncStorage, garantindo que as tarefas permaneçam salvas mesmo após fechar o app. O projeto foi construído com foco em simplicidade, performance e organização do código, seguindo boas práticas do ecossistema React Native.

✨ Funcionalidades

➕ Adicionar novas tarefas

✔️ Marcar tarefas como concluídas

❌ Excluir tarefas

💾 Persistência dos dados localmente com AsyncStorage

📱 Interface responsiva e moderna

🔄 Recarregamento automático das tarefas ao abrir o app

🎨 Design limpo com React Native + StyleSheet

🆔 Geração de IDs únicos com UUID

📂 Organização modular com componentes reutilizáveis

🛠️ Tecnologias Utilizadas

React Native (CLI)

JavaScript / ES2025+

AsyncStorage

React Navigation (Stack Navigator)

React Native Vector Icons / Feather Icons

UUID v4

Metro Bundler

🗂️ Estrutura de Pastas (Organizada)
EasyTasks/
│
├── android/
├── ios/
├── node_modules/
│
├── src/
│   ├── components/
│   │   └── TaskItem/
│   │       ├── index.jsx
│   │       └── styles.js
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── index.jsx
│   │   │   └── styles.js
│   │   ├── Sobre/
│   │   │   ├── index.jsx
│   │   │   └── styles.js
│   │
│   ├── routes/
│   │   └── index.jsx
│   │
│   └── assets/
│
├── App.js
├── package.json
└── README.md

🚀 Como Instalar e Rodar o Projeto
🔧 1. Clonar o repositório
git clone https://github.com/seuuser/easytasks-mobile.git
cd easytasks-mobile

📦 2. Instalar dependências
npm install

🧩 3. Instalar dependências nativas
npx pod-install

▶️ 4. Rodar o app no Android
npx react-native run-android

🍏 5. Rodar no iOS (Mac)
npx react-native run-ios

📸 Screenshots (adicione depois)

Substitua as imagens abaixo quando tiver os prints reais.

<img src="./screenshots/home.png" width="350"/> <img src="./screenshots/tasks.png" width="350"/>
🔍 Como o Aplicativo Funciona

O aplicativo segue um fluxo simples:

O usuário digita uma tarefa → clica no botão ✔️

O app cria um objeto com:

{ id: uuid.v4(), text: "Minha tarefa", status: false }


O objeto é adicionado ao array data e salvo no AsyncStorage

A lista é exibida automaticamente na tela usando FlatList

O usuário pode:

tocar no ícone para marcar como concluído

tocar na lixeira para excluir

O estado é sincronizado de volta no AsyncStorage após cada alteração

Simples. Desempenho rápido. Totalmente offline.

📦 Principais Arquivos
App.js

Responsável pela estrutura inicial e <NavigationContainer>.

src/routes/index.jsx

Onde ficam as rotas usando Stack Navigation.

src/pages/Home

Tela inicial com navegação.

src/pages/Sobre

Tela principal onde as tarefas são gerenciadas.

src/components/TaskItem

Componente responsável por exibir cada tarefa da lista.
