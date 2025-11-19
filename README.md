# 📱 EasyTasks — Aplicativo Mobile de Lista de Tarefas

O **EasyTasks** é um aplicativo mobile simples, rápido e intuitivo criado com **React Native**, focado em produtividade pessoal.  
Permite **criar**, **listar**, **concluir** e **excluir** tarefas, mantendo tudo salvo localmente com **AsyncStorage**, garantindo que nenhuma tarefa seja perdida mesmo após fechar o app.

---

## 🚀 Funcionalidades

- 📝 **Adicionar tarefas** rapidamente
- 📋 **Listar todas as tarefas** em ordem de criação
- ✔️ **Marcar como concluída** (toggle com estilo visual)
- 🗑️ **Excluir tarefas** com modal de confirmação
- 💾 **Persistência local automática** com AsyncStorage
- 🎨 Interface minimalista e responsiva
- ⚡ Carregamento inicial com `ActivityIndicator`
- 🧭 Navegação entre telas usando React Navigation

---

## 🛠️ Tecnologias Utilizadas

- **React Native**
- **React Navigation (Stack Navigator)**
- **AsyncStorage**
- **UUID (para gerar IDs de tarefas)**
- **Vector Icons (Feather Icons)**
- **JavaScript (ES2025)**
- **StyleSheet + Flexbox**

---

## 📁 Estrutura do Projeto
EasyTasks/
│
├── src/
│ ├── components/
│ │ └── TaskItem/
│ │ ├── index.jsx
│ │ └── styles.js
│ │
│ ├── pages/
│ │ ├── Home/
│ │ │ ├── index.jsx
│ │ │ └── styles.js
│ │ └── Sobre/
│ │ ├── index.jsx
│ │ └── styles.js
│ │
│ ├── routes/
│ │ └── index.jsx
│ │
│ └── assets/
│
├── App.js
└── package.json


---

## 📲 Instalação e Execução do Projeto

### 🔧 1. Instalar dependências

```bash
npm install
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install @react-native-async-storage/async-storage
npm install react-native-vector-icons
npm install react-native-uuid

⚠️ Caso esteja usando Android, não esqueça de rodar:

npx react-native link react-native-vector-icons

▶️ Executar o app no Android
npm run android


Ou:

npx react-native run-android

▶️ Executar o app no iOS (macOS)
npm run ios

📌 Lógica Principal (Resumo Técnico)
✔️ Salvar tarefas

Cada tarefa possui:

{
  id: uuid.v4(),
  text: "Minha tarefa",
  status: false
}


As tarefas são salvas via:

await AsyncStorage.setItem('@tasks', JSON.stringify(newData));

✔️ Carregar tarefas no início
const stored = await AsyncStorage.getItem('@tasks');
setData(JSON.parse(stored));

✔️ Alternar concluída/não concluída
status: !item.status

✔️ Excluir tarefas
const updated = data.filter(t => t.id !== id);

🧩 Estrutura de Componentes
Home

Tela de apresentação

Botão de acesso para a lista de tarefas

Sobre (Lista principal)

Input para adicionar

Botão para salvar

Lista renderizada com FlatList

TaskItem componetizado

TaskItem

Ícone de check (toggle)

Texto da tarefa

Ícone de lixeira

Estilização condicional quando concluída

🎨 Design / UX

Paleta baseada em Royal Blue (#4169e1)

Tarefas concluídas ficam mais claras

Botões com boa área de toque

Ícones Feather integrados

Layout responsivo via Flexbox

👨‍💻 Desenvolvimento

Este projeto foi desenvolvido por Geovane Silva, como prática e aplicação dos estudos em:

React Native

Organização de projetos

Gerenciamento de estado

Persistência local

Navegação mobile

