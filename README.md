📱 EasyTasks — Aplicativo Mobile de Lista de Tarefas

Um aplicativo simples, rápido e eficiente para gerenciamento de tarefas desenvolvido em React Native.
Criado com foco em produtividade, organização e facilidade de uso no dia a dia.

🚀 Tecnologias Utilizadas

React Native 0.74+

React Navigation

AsyncStorage (para persistência local)

UUID (para geração de IDs únicos)

Vector Icons

JavaScript (ES2020+)

📝 Funcionalidades

➕ Adicionar tarefas

🗂 Listar todas as tarefas

✔️ Marcar tarefa como concluída

❌ Excluir uma tarefa

💾 Persistência local com AsyncStorage

🎨 Interface simples e intuitiva

🌙 Tema suave + design clean

📂 Estrutura das pastas
EasyTasks/
 ├── src/
 │   ├── components/
 │   │      └── TaskItem/
 │   │             ├── index.jsx
 │   │             └── styles.js
 │   ├── pages/
 │   │      ├── Home/
 │   │      ├── Sobre/
 │   ├── routes/
 │   │      └── index.jsx
 │   ├── assets/
 │   └── styles/
 ├── App.js
 ├── package.json
 └── README.md

 ⚙️ Instalação e Execução do Projeto
📌 1. Pré-requisitos

Você precisa ter instalado:

Node.js LTS (18 ou superior)

Java JDK 17+

Android Studio (para emulador ou build Android)

Yarn ou NPM

React Native CLI

📱 2. Rodando com React Native CLI
🔹 Instale as dependências:
npm install
# ou
yarn install

🔹 Instale o UUID:
npm install react-native-uuid

🔹 Instale o AsyncStorage:
npm install @react-native-async-storage/async-storage

🔹 Instale os ícones:
npm install react-native-vector-icons

▶️ Executar no Android
npm run android


Ou:

npx react-native run-android

🧪 3. Rodando com Expo (opcional)

Se quiser rodar via Expo, basta instalar:

npm install expo
npx expo start


⚠️ Mas note:
Como o projeto usa react-native-vector-icons e AsyncStorage, o Expo precisa rodar em modo prebuild:

npx expo prebuild

📦 Build de Produção (APK / AAB)
Gerar APK:
cd android
./gradlew assembleRelease

Gerar AAB:
cd android
./gradlew bundleRelease


O arquivo final ficará em:

android/app/build/outputs/

🖼 Demonstração

(adicione prints ou GIFs aqui quando quiser)

🧠 Como funciona internamente
✔️ Adicionar tarefa

Valida texto vazio

Gera ID com uuid

Salva em memória (state)

Persiste no AsyncStorage

✔️ Carregar tarefas

Ao iniciar:

const storedData = await AsyncStorage.getItem("@tasks");

✔️ Excluir tarefa

Filtra pelo ID e salva novamente no AsyncStorage.

✔️ Marcar como concluída

Atualiza o campo status: true/false.
