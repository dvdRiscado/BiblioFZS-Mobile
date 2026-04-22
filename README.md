# BiblioFZS - Sistema de Gerenciamento de Biblioteca (Fatec Zona Sul)

O **BiblioFZS** é um software desenvolvido para modernizar e otimizar os processos da biblioteca da Fatec Zona Sul, substituindo métodos manuais por uma solução tecnológica integrada e eficiente.

## 🚩 Problema
A biblioteca da Fatec Zona Sul enfrenta limitações operacionais devido à dependência de processos manuais, como o uso de planilhas do Microsoft Excel e registros físicos em cadernos. O sistema institucional atual não atende plenamente às necessidades específicas da unidade, resultando em:
* Inconsistência nos registros e falta de dados confiáveis para tomada de decisões.
* Dificuldade na gestão integrada do acervo e no controle de fluxo de usuários.
* Risco elevado de erros manuais e retrabalho constante.

## 🚀 Solução
A solução consiste em um sistema informatizado capaz de centralizar todas as informações e automatizar rotinas essenciais. O BiblioFZS moderniza:
* O controle de acervo, permitindo cadastros detalhados de livros, monografias, periódicos e outros.
* O ciclo de empréstimos, renovações e devoluções.
* A autonomia do usuário, que passa a contar com um aplicativo móvel para consultas e reservas.

## 🛠️ Tecnologias
O projeto foi desenvolvido utilizando tecnologias modernas para garantir escalabilidade e robustez:
* **Mobile:** React Native, Expo e TypeScript.
* **Front-End (Web):** React e TypeScript.
* **Back-End:** FastAPI (Python).
* **Banco de Dados:** PostgreSQL.
* **Design & Modelagem:** Figma, Adobe Color e Astah UML.

## ✨ Funcionalidades
* **Gestão de Acervos Diversificados:** Suporte para livros, monografias (TCC), periódicos, multimeios e apostilas.
* **Sistema de Empréstimos e Multas:** Controle automático de prazos e geração de multas em caso de atrasos.
* **Reserva Online e Notificações:** Alunos podem reservar exemplares e receber alertas de disponibilidade.
* **Registro de Presença via QR Code:** Substituição do caderno físico pelo escaneamento via app, gerando relatórios de fluxo automaticamente.
* **Relatórios Gerenciais:** Visualização de indicadores como movimentação mensal e total de exemplares.
* **Segurança e Privacidade:** Sistema projetado em conformidade com a Lei Geral de Proteção de Dados (LGPD).

## 📲 Como Usar (Aplicação Mobile)

Siga os passos abaixo para rodar o projeto mobile em sua máquina:

### 1. Pré-requisitos
Antes de começar, certifique-se de que tem instalado:
* **Node.js** (versão LTS).
* Um gestor de pacotes (**npm** ou **yarn**).
* A aplicação **Expo Go** no seu smartphone (disponível na [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent) ou [App Store](https://apps.apple.com/app/expo-go/id982107779)).
* *Opcional:* Um emulador Android ou simulador iOS configurado.

### 2. Instalação
No seu terminal, execute os seguintes comandos para clonar o repositório e instalar as dependências:

```bash
# Clonar o repositório
git clone [https://github.com/dvdRiscado/BiblioFZS-Mobile.git](https://github.com/dvdRiscado/BiblioFZS-Mobile.git)

# Entrar na pasta do projeto
cd BiblioFZS-Mobile

# Instalar as dependências
npm install
```
### 3. Execução
Para iniciar o servidor de desenvolvimento do Expo, execute o seguinte comando no seu terminal:

```bash
npx expo start
```

Este comando irá abrir o Expo Dev Tools no seu terminal e gerar um QR Code.

### 4. Aceder à Aplicação
Existem duas formas principais de visualizar e testar o BiblioFZS Mobile:

* **No Dispositivo Físico:**
    1. Instale a aplicação **Expo Go** (disponível na App Store ou Google Play).
    2. Certifique-se de que o seu telemóvel e o computador estão ligados à **mesma rede Wi-Fi**.
    3. Abra a câmara do telemóvel ou a aplicação Expo Go e leia o **QR Code** gerado no terminal.
* **No Emulador/Simulador:**
    * Pressione a tecla `a` para abrir no emulador **Android**.
    * Pressione a tecla `i` para abrir no simulador **iOS**.

---

### ⚠️ Notas Importantes para o Funcionamento

#### 🔗 Conexão com o Back-End
A aplicação mobile depende da API construída em **FastAPI**. Para que o login e as consultas funcionem:
1. O servidor back-end deve estar em execução.
2. No ficheiro de configuração (ex: `services/api.ts`), certifique-se de que a `BASE_URL` aponta para o **IP local da sua máquina** (ex: `http://192.168.x.x:8000`) em vez de `localhost`, caso esteja a testar num dispositivo físico.

#### 📸 Funcionalidades de Hardware (QR Code)
O sistema utiliza a câmara do dispositivo para o **Registo de Presença**. 
* Ao testar num telemóvel real, será solicitada permissão de acesso à câmara.
* Em emuladores, a funcionalidade de leitura de QR Code pode necessitar de configuração adicional de imagem virtual.

---

## 🔗 Links
* **Repositório Mobile:** [BiblioFZS-Mobile](https://github.com/dvdRiscado/BiblioFZS-Mobile)
* **Repositório Web/FrontEnd:** [BiblioFZS-FrontEnd](https://github.com/gabrielmmarcos/biblio-fzs-frontend)
* **Repositório BackEnd:** [BiblioFZS-BackEnd](https://github.com/gabrielmmarcos/biblio-fzs-backend)
* **Link da Prototipação:** [Figma](https://www.figma.com/design/c8rdjPsVfnpG80KzMui4NY/Projeto-BiblioFZS?node-id=0-1&t=0GEQ3v8bpG15QVzK-1)
* **Monografia:** [Google Drive](https://drive.google.com/file/d/10rYaAymKmici3LLiROKJKVBX_lcT-yaS/view?usp=sharing)
* **Instituição:** [Fatec Zona Sul](https://www.fateczonasul.edu.br/)

## 👥 Autores
Projeto desenvolvido pelos alunos da Fatec Zona Sul:
* **Kaio Gomes do Nascimento Araújo**
* **Gabriel Marcos Lopes Santos**
* **David Vasconcelos Torquato**
* **Allan Bellusci Medeiros**
* **Orientadora:** Profª. Josenyr Santos Rosa
