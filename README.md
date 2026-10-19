# 💎 Portfólio Cinematográfico // Edição Masterclass

[![CTeSP](https://img.shields.io/badge/CTeSP-Programação_Web,_Dispositivos_e_Aplicações_Móveis-white?style=for-the-badge&logo=android&logoColor=black&color=09090b)](https://github.com)
[![Design](https://img.shields.io/badge/Aesthetic-Pure_Obsidian_&_Platinum_Luxury-e4e4e7?style=for-the-badge&logoColor=black&color=18181b)](https://github.com)
[![Stack](https://img.shields.io/badge/Stack-Vanilla_ES6+_•_CSS3_•_HTML5-white?style=for-the-badge&logo=javascript&logoColor=black&color=27272a)](https://github.com)
[![Build](https://img.shields.io/badge/Build-Zero_Steps_•_100%25_Offline-000000?style=for-the-badge&color=09090b)](https://github.com)
[![Performance](https://img.shields.io/badge/Lighthouse-100%2F100-white?style=for-the-badge&logo=lighthouse&logoColor=black&color=18181b)](https://github.com)

> Um portfólio de engenharia de software de nível mundial inspirado na estética editorial e minimalista de marcas de referência (*Linear, Apple Pro, Awwwards Site of the Year*). Criado especificamente para espelhar as competências técnicas e práticas do **CTeSP em Programação Web, Dispositivos e Aplicações Móveis**, unindo o rigor arquitetural do desenvolvimento nativo Android, a modelação de dados SQL e a elegância da Web moderna sem dependências externas.

---

## 📑 Índice

1. [Visão Geral & Filosofia de Design](#-visão-geral--filosofia-de-design)
2. [Arquitetura & Engenharia Técnica](#-arquitetura--engenharia-técnica)
3. [Funcionalidades Interativas Detalhadas](#-funcionalidades-interativas-detalhadas)
   - [Android Studio Simulator 2.0](#1-android-studio-simulator-20)
   - [Code Terminal & Compilador 2.0](#2-code-terminal--compilador-20)
   - [Esquema Relacional SQL Dinâmico](#3-esquema-relacional-sql-dinâmico)
   - [Sintetizador Web Audio API](#4-sintetizador-tátil-web-audio-api)
   - [Spotlight Command Palette (Ctrl+K)](#5-spotlight-command-palette-ctrl--k--cmd--k)
   - [Currículo A4 Print-Ready (Exportação PDF Direta)](#6-currículo-a4-print-ready-exportação-pdf)
   - [Navegação Flutuante, ScrollSpy & Mobile Drawer](#7-navegação-flutuante-scrollspy--mobile-drawer)
   - [Filtragem Reativa de Projetos & Modais Detalhados](#8-filtragem-reativa-de-projetos--modais-detalhados)
4. [Guia de Início Rápido (Quick Start)](#-guia-de-início-rápido-quick-start)
5. [Guia Passo a Passo de Personalização](#-guia-passo-a-passo-de-personalização)
6. [Atalhos Globais de Teclado](#-atalhos-globais-de-teclado)
7. [Alinhamento com o CTeSP](#-alinhamento-com-o-ctesp)
8. [Estrutura de Ficheiros](#-estrutura-de-ficheiros)

---

## 🌌 Visão Geral & Filosofia de Design

Este projeto afasta-se deliberadamente dos modelos de portfólio genéricos e sobrecarregados de dependências. Foi concebido como uma **peça de alta engenharia digital**:

* **Paleta Monocromática Rigorosa (*Pure Obsidian & Platinum Luxury*):** Utiliza tonalidades profundas de obsidiana (`#040406`, `#08080b`), titânio escovado (`#a1a1aa`, `#71717a`) e platina pura (`#ffffff`, `#f4f4f6`). A iluminação especular e os reflexos giroscópicos 3D conferem uma sensação tangível de produto premium.
* **Zero Etapas de Build (*Zero Build Steps*):** Sem necessidade de `npm install`, Webpack, Vite, Babel ou configurações complexas. O código-fonte é executado nativamente pelo motor dos browsers modernos.
* **100% Offline-Ready & Standalone:** Todos os componentes, efeitos gráficos (Canvas 2D) e sínteses sonoras (Web Audio API) funcionam de forma totalmente autónoma sem requisições a servidores externos ou CDNs de terceiros para a lógica nuclear.
* **Desempenho Imbatível (60+ FPS):** Renderização acelerada por GPU com `transform3d`, `will-change` seletivo, gestão de visibilidade com `IntersectionObserver` e suspensão de animações de fundo quando o separador está inativo.

---

## ⚡ Arquitetura & Engenharia Técnica

| Camada | Tecnologia / Padrão | Responsabilidade |
| :--- | :--- | :--- |
| **Apresentação** | HTML5 Semântico + CSS3 Modular | Estrutura limpa, acessibilidade WCAG, variáveis CSS dinâmicas e tipografia com *Plus Jakarta Sans* e *JetBrains Mono*. |
| **Dinâmica Visual** | Canvas 2D + Web Animations API | Constelação de filamentos com física de atrito e repulsão vetorial ao cursor, efeito Matrix Decrypt (*Text Scramble*) e rotação orbital 360°. |
| **Áudio Sintetizado** | Web Audio API (`AudioContext`) | Osciladores analógicos virtuais gerados por software em tempo real (0 ficheiros de som carregados na rede). |
| **Persistência & Estado** | Vanilla JavaScript ES6+ | Gestor de tarefas SQLite simulado, orquestração de modais, filtragem reativa e paleta de comandos Spotlight. |
| **Servidor Opcional** | Node.js Vanilla HTTP (`serve.js`) | Servidor ultraleve de ficheiros estáticos com mapeamento MIME completo e latência nula. |

---

## 🕹️ Funcionalidades Interativas Detalhadas

### 1. Android Studio Simulator 2.0
Localizado no Bento Grid principal, este módulo simula com fidelidade um dispositivo móvel topo de gama a executar uma aplicação nativa Android:
* **Chassi de Titânio & Dynamic Island:** Moldura com corte preciso, lente de câmara frontal, grelha de altifalante e barra de gestos inferior.
* **Relógio do Sistema em Tempo Real:** Sincronizado dinamicamente com o fuso horário local de Lisboa (`Europe/Lisbon`).
* **Gestor de Tarefas com SQLite/Room Database:**
  * Lista reativa de tarefas com *checkboxes* táteis funcionais.
  * Contador em tempo real que calcula o estado de integridade da base de dados (`Room DB: X de Y concluídas`).
  * Formulário de inserção direta para adicionar novos registos com notificação toast imediata.
* **Benchmark de Desempenho Room (1000 Transações):**
  * Simulação de lote de `1000 INSERTs` simultâneos com barra de progresso animada e medição da latência média de leitura/escrita do motor SQLite (~1.1 ms).
* **Inspetor de Arquitetura em Camadas (MVVM):**
  * Visualização interactiva das camadas **UI Layer** (`MainActivity.kt`), **ViewModel** (`TaskViewModel.kt`) e **Data Layer** (`Room / SQLite DB`), evidenciando o fluxo de dados unidirecional e Coroutines Flow.

### 2. Code Terminal & Compilador 2.0
Uma consola interativa inspirada em ambientes de desenvolvimento integrados profissionais:
* **Múltiplos Ambientes:** Alternância instantânea entre consultas analíticas SQL (`queries_gestao.sql`), classes nativas Android em Kotlin (`MainActivity.kt`) e data stores reativos em JavaScript (`app_reactive.js`).
* **Sintaxe Monocromática com Realce de Código:** Motor de realce de palavras-chave, literais, comentários e operadores.
* **Calha com Numeração de Linhas:** Gutter dinâmico sincronizado com a contagem de linhas do ficheiro ativo.
* **Execução Simulada (`⚡ EXECUTAR CÓDIGO`):** Avalia e simula a execução do código com relatórios de saída realistas, incluindo tabelas de dados SQL formatadas e logs de compilação do Gradle (`BUILD SUCCESSFUL`).
* **Cópia Instantânea para a Área de Transferência:** Botão de cópia num clique com feedback sonoro e visual através de cápsula toast.

### 3. Esquema Relacional SQL Dinâmico
Demonstração visual de engenharia de bases de dados relacionais e integridade referencial:
* **Tabelas Normalizadas:** Esquemas interativos das tabelas `produtos`, `categorias` (normalizada até à 3ª Forma Normal - 3FN) e `vendas` (registo transacional).
* **Identificação de Chaves:** Destaque claro para Chaves Primárias (`PK`), Chaves Estrangeiras (`FK`), tipos de dados SQL (`INT AUTO_INCREMENT`, `VARCHAR`, `DECIMAL`) e restrições de integridade.
* **Atalho Direto para Terminal (`Testar Query no Terminal ⚡`):** Navega suavemente para o terminal de código, seleciona automaticamente a aba SQL e desencadeia a execução da query analítica.

### 4. Sintetizador Tátil (Web Audio API)
Experiência háptica auditiva desenhada exclusivamente com código matemático, sem recorrer a ficheiros de áudio `.mp3` ou `.wav`:
* **Zero Overhead de Rede:** 0 kB transferidos para efeitos sonoros.
* **Eventos Sintetizados:**
  * *Hover Ticks:* Micro-pulsos de onda sinusoidal de alta frequência (1300 Hz → 750 Hz) de 25 ms.
  * *Pneumatic Click Snaps:* Impacto de onda triangular com descida exponencial de frequência (450 Hz → 90 Hz).
  * *Success Chimes:* Acorde harmónico em arpejo de 4 notas puras (Dó5, Mi5, Sol5, Dó6) com atenuação suave.
  * *Modal Swoosh:* Varrimento acústico ascendente que acompanha a abertura de caixas de diálogo.
* **Controlo Global & Atalho:** Alternador com animação de equalizador na barra superior (HUD) e atalho de teclado global <kbd>M</kbd>.

### 5. Spotlight Command Palette (`Ctrl + K` / `Cmd + K`)
Menu de comandos global no estilo *Raycast* e *Linear*:
* **Acesso Instantâneo:** Acionável via clique no botão `CTRL+K` do HUD ou pela combinação universal <kbd>Ctrl</kbd> + <kbd>K</kbd> (ou <kbd>Cmd</kbd> + <kbd>K</kbd> no macOS).
* **Filtro em Tempo Real:** Pesquisa rápida que indexa secções de navegação, utilitários, detalhes de cada projeto, atalhos de currículo e ações do sistema.
* **Navegação por Teclado:** Suporte integral para navegação com as setas <kbd>↑</kbd> <kbd>↓</kbd>, execução com <kbd>Enter</kbd> e encerramento com <kbd>Esc</kbd>.

### 6. Currículo A4 Print-Ready (Exportação PDF)
Modal de visualização curricular estruturado segundo os mais altos padrões de recrutamento técnico:
* **Folha de Estilos de Impressão (@media print):** Oculta automaticamente toda a interface web, barras de estado, botões e fundos escuros.
* **Exportação Direta para PDF:** O botão `🖨️ Imprimir / Guardar PDF` (ou atalho de teclado <kbd>C</kbd>) abre a janela de impressão do sistema operacional já formatada para folha A4 com tipografia nítida, margens balanceadas e separação por blocos curriculares.

### 7. Navegação Flutuante, ScrollSpy & Mobile Drawer
* **Cápsula de Vidro Fosco (*Glassmorphism*):** Barra de navegação com desfoque de fundo (*backdrop-filter*) e bordas especulares.
* **ScrollSpy Ativo:** Destaca dinamicamente a secção em visualização conforme o utilizador navega pela página.
* **Gaveta de Navegação Mobile:** Menu responsivo deslizante para ecrãs táteis com transição elástica.
* **Anel de Progresso de Scroll (*Progress Ring*):** Botão circular com indicador SVG perimetral que reflete a percentagem exata da página percorrida e permite o regresso imediato ao topo.

### 8. Filtragem Reativa de Projetos & Modais Detalhados
* **Filtros por Categoria:** Alternância com animação suave entre `Todos os Projetos`, `Android Studio`, `Web Responsiva` e `Bases de Dados & SQL`.
* **Modais com Enquadramento Cinematográfico:** Apresentam mockups em alta definição, resumo do projeto, destaques de engenharia (arquitetura, concorrência, persistência), tags de tecnologia e botões de ação contextuais com integração direta ao simulador ou terminal.

---

## 🚀 Guia de Início Rápido (Quick Start)

Podes abrir e interagir com o portfólio imediatamente através de dois métodos simples:

### Método 1: Duplo Clique Direto (Sem Dependências)
1. Navega até à pasta do projeto no Explorador de Ficheiros:
   ```text
   d:\Code Antigravity\Portfolio\
   ```
2. Clica duas vezes no ficheiro `index.html`.
3. O portfólio será carregado instantaneamente no teu browser com **todas as animações, sons e simuladores 100% operacionais**.

### Método 2: Servidor de Desenvolvimento Local com Node.js
Se preferires executar através de um servidor HTTP local:
```powershell
# A partir da raiz do projeto:
agy-node serve.js
# ou utilizando o runtime tradicional:
node serve.js
```
Abre o teu navegador no endereço indicado:
```text
http://localhost:3000
```

---

## 🛠️ Guia Passo a Passo de Personalização

Todo o conteúdo foi estruturado com comentários de edição identificados pelo ícone `✏️` para que possas adaptar o portfólio à tua identidade em poucos minutos:

### 1. Nome, Título Profissional e Bio
Abre `index.html` e localiza a secção **Hero Stage** (aproximadamente linha 170):
```html
<!-- ✏️ EDITA AQUI: Teu Nome e Apresentação -->
<h2 class="profile-title-name" data-scramble>Olá, sou o Teu Nome</h2>
<p class="profile-bio-text">
  Diplomado pelo CTeSP em Programação Web, Dispositivos e Aplicações Móveis...
</p>
```

### 2. Fotografia de Perfil Editorial
* Substitui o ficheiro `assets/images/hero-portrait.jpg` por uma fotografia tua em alta definição.
* **Dica de Estilo:** Para manter a estética cinematográfica de luxo, utiliza uma fotografia a preto e branco com iluminação de estúdio contrastada e fundo escuro.

### 3. Redes Sociais, Email e Contactos
No cabeçalho do cartão de perfil (`index.html`, linha 140) e na secção de contacto (linha 905):
```html
<!-- Substitui os links pelos teus perfis reais -->
<a href="https://github.com/oteu-utilizador" target="_blank" title="GitHub">...</a>
<a href="https://linkedin.com/in/oteu-perfil" target="_blank" title="LinkedIn">...</a>

<!-- Atualiza o teu endereço de email para o botão de cópia rápida -->
<button class="btn-copy-email" data-email="oteuemail@dominio.com">...</button>
```

### 4. Personalizar os Projetos em Destaque
Cada cartão na secção `#projetos` contém atributos `data-*` que alimentam o modal automaticamente:
```html
<button class="btn-project-inspect open-cinematic-modal"
  data-title="Nome do Teu Projeto"
  data-badge="Android Studio Native"
  data-image="assets/images/project-mobile.jpg"
  data-desc="Descrição detalhada dos objetivos do projeto..."
  data-features="Funcionalidade 1;Funcionalidade 2;Funcionalidade 3"
  data-github="https://github.com/oteu-utilizador/repositorio"
  data-demo="simulator"  <!-- Usa 'simulator', 'terminal' ou deixa vazio -->
  data-tech="Android Studio, Kotlin, Room DB, SQLite">
  <span>Ver Detalhes</span>
</button>
```

### 5. Personalizar Snippets do Terminal e Esquemas de Bases de Dados
No ficheiro `js/main.js`:
* **Trechos de Código do Terminal:** Edita o objeto `TERMINAL_SNIPPETS` (linha 598) com os teus próprios scripts SQL, classes Kotlin ou funções JavaScript.
* **Esquemas de Tabelas Relacionais:** Modifica o objeto `SCHEMA_DATA` (linha 786) para exibir as tuas próprias tabelas e diagramas relacionais.

---

## ⌨️ Atalhos Globais de Teclado

O portfólio integra aceleradores de teclado pensados para utilizadores avançados (*power users*) e recrutadores técnicos:

| Tecla / Combinação | Ação |
| :---: | :--- |
| <kbd>Ctrl</kbd> + <kbd>K</kbd> ou <kbd>Cmd</kbd> + <kbd>K</kbd> | Abre ou fecha o **Spotlight Command Palette** para pesquisa global rápida. |
| <kbd>M</kbd> | Alterna o som tátil da interface (*Mute / Unmute*) sintetizado via Web Audio API. |
| <kbd>C</kbd> | Abre o modal de **Currículo Profissional (CV)** pronto para consulta ou impressão A4. |
| <kbd>P</kbd> | Desloca a página diretamente para a secção de **Projetos em Destaque**. |
| <kbd>T</kbd> | Desloca a página para a consola interactiva do **Code Terminal**. |
| <kbd>Esc</kbd> | Fecha qualquer modal ou gaveta ativa (Spotlight, Detalhes de Projeto, CV, Menu Mobile). |

---

## 🎓 Alinhamento com o CTeSP

Este portfólio foi arquitetado para demonstrar de forma inequívoca o domínio das competências do **Curso Técnico Superior Profissional (CTeSP) em Programação Web, Dispositivos e Aplicações Móveis**:

```
                                 ┌─────────────────────────────────────────────────────────┐
                                 │       CTeSP PROGRAMAÇÃO WEB, DISPOSITIVOS & MÓVEIS       │
                                 └────────────────────────────┬────────────────────────────┘
                                                              │
                    ┌─────────────────────────────────────────┼─────────────────────────────────────────┐
                    │                                         │                                         │
                    ▼                                         ▼                                         ▼
      ┌───────────────────────────┐             ┌───────────────────────────┐             ┌───────────────────────────┐
      │   DISPOSITIVOS MÓVEIS     │             │     PROGRAMAÇÃO WEB       │             │   BASES DE DADOS & SQL    │
      ├───────────────────────────┤             ├───────────────────────────┤             ├───────────────────────────┤
      │ • Android Studio Nativo   │             │ • HTML5 Semântico & A11y  │             │ • Modelação Entidade-Rel. │
      │ • Kotlin & Java Core      │             │ • CSS3 Grid & Flexbox     │             │ • Normalização 1FN a 3FN  │
      │ • Arquitetura MVVM        │             │ • JavaScript Moderno ES6+ │             │ • SQLite / MySQL / Room   │
      │ • SQLite / Room DB        │             │ • Interfaces Responsivas  │             │ • Queries Analíticas & J. │
      │ • Background Services     │             │ • Arquitetura Modular     │             │ • Triggers & Transações   │
      └───────────────────────────┘             └───────────────────────────┘             └───────────────────────────┘
```

1. **Programação para Dispositivos Móveis:**
   * Evidenciada pelo simulador funcional de smartphone com persistência local em SQLite/Room, medição de latência de leitura/escrita e inspeção das camadas MVVM (*UI, ViewModel, Data Repository*).
2. **Desenvolvimento Web Frontend Moderno:**
   * Evidenciada pela estrutura modular semântica, acessibilidade e conformidade com os mais rigorosos padrões de usabilidade (*Mobile-First*).
3. **Engenharia de Dados e Bases de Dados Relacionais:**
   * Evidenciada pelas tabelas normalizadas do Bento Grid, integridade referencial com Chaves Primárias/Estrangeiras e consultas analíticas no terminal de código com junções `INNER JOIN`, agregações `SUM()` e filtros temporais.

---

## 📁 Estrutura de Ficheiros

```text
Portfolio/
├── index.html                   # Estrutura semântica principal e modais (CV, Spotlight, Projetos)
├── css/
│   ├── style.css                # Design system monocromático, tokens de cor, tipografia e layout
│   └── animations.css           # Keyframes de animação 60fps, preloader de abertura e rotações 3D
├── js/
│   └── main.js                  # Motor de orquestração: Web Audio, Canvas, Terminal, Simulador, Spotlight
├── assets/
│   └── images/                  # Ativos visuais em alta resolução
│       ├── hero-portrait.jpg    # Retrato editorial preto e branco
│       ├── project-mobile.jpg   # Mockup de aplicação Android nativa
│       ├── project-web.jpg      # Mockup de plataforma web responsiva
│       ├── project-sql.jpg      # Mockup de base de dados e servidor relacional
│       └── project-audio.jpg    # Mockup de leitor de áudio Android
├── serve.js                     # Servidor local de desenvolvimento opcional (Node.js Vanilla HTTP)
└── README.md                    # Documentação oficial e manual técnico do portfólio
```

---

<div align="center">

**Concebido com foco em Rigor Arquitetural, Código Limpo e Desempenho Extremo.**  
*Portfólio de Engenharia Digital // 2026*

</div>
