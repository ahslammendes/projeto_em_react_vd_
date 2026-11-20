# 🎾 CourtFlux — Tennis Live Match Dashboard

Aplicação web interativa desenvolvida em **React** para acompanhamento e simulação em tempo real de partidas de tênis, construída como projeto prático da disciplina **Frameworks Front-end (SENAI — Prof. Me. Deivison S. Takatu)**.

O visual e a arquitetura de interface seguem fielmente o **Moveflux Design System** (`stone-200` canvas, tipografia `Inter`, cartões `rounded-3xl` com anéis sutis e sombras multicamadas, medidores em `conic-gradient` e barras de progresso em gradiente), integrando as imagens oficiais de confronto, galeria de atletas e telemetria de radar em quadra.

---

## 📋 Descrição do Projeto

O **CourtFlux** simula um painel de transmissão e estatísticas ao vivo de tênis (*World Championship Series* e *Grand Slam Arena*), permitindo alternar entre dois confrontos principais:
1. **C. Ramirez (#4, ESP) vs L. Kowalski (#7, POL)** — *World Championship Series*
2. **M. Carter (#4, USA) vs A. Petrovic (#7, SRB)** — *Grand Slam Arena*

O usuário pode simular pontos ao vivo (`0` → `15` → `30` → `40` → `Deuce / Vantagem (AD)` → `Game` → `Set`), registrar **Aces** e **Winners**, acompanhar o cronômetro de quadra em tempo real e pesquisar/filtrar tanto as métricas táticas quanto o histórico ponto a ponto (*Play-by-Play*).

---

## 🗂️ Estrutura de Pastas do Repositório

O repositório está organizado em pastas independentes para facilitar a manutenção e a configuração de **Root Directory** (`frontend`) em plataformas de deploy como a **Vercel**:

```text
projeto_em_react_vd_/
├── frontend/                                     # Diretório raiz da aplicação React (Root Directory na Vercel)
│   ├── public/
│   │   ├── images/                               # Fotografias 2K dos atletas em quadra e impacto na raquete
│   │   ├── vendor/                               # Tailwind CSS e fontes locais (Inter)
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── BarraDePesquisa.jsx               # Input controlado de busca + pílulas de filtro por tipo de lance
│   │   │   ├── Cabecalho.jsx                     # Navbar sticky com status AO VIVO/PAUSADO e seletor de partidas
│   │   │   ├── CardHeroPartida.jsx               # Card visual da coluna esquerda com botão de simulação rápida
│   │   │   ├── CardMetricaCircular.jsx           # Medidor circular (conic-gradient) de velocidade de Forehand
│   │   │   ├── CardMetricaDestaque.jsx           # Indicador de Aces com avatares e botão "+ Ace"
│   │   │   ├── CardMetricaProgresso.jsx          # Componente reutilizável de barra de progresso (Baseline / Volley)
│   │   │   ├── CronometroPartida.jsx             # Cronômetro em tempo real (Play/Pause) + parciais dos Sets
│   │   │   ├── DestaquesTransmissao.jsx          # Feed de comentários táticos e análise da transmissão
│   │   │   ├── GraficoRitmoPartida.jsx           # Curva SVG de velocidade de saque por game sobre foto de impacto
│   │   │   ├── HeroDestaque.jsx                  # Hero principal cinematográfica com placar e retratos dos atletas
│   │   │   ├── HistoricoJogadas.jsx              # Histórico Play-by-Play com filtro e renderização condicional
│   │   │   ├── ItemEstatistica.jsx               # Linha reutilizável de estatística comparativa
│   │   │   ├── PainelPlacarAoVivo.jsx            # Placar oficial interativo + filtros de telemetria
│   │   │   ├── ResumoConfronto.jsx               # Comparativo Head-to-Head (Pontos, Aces, Winners, Break Points)
│   │   │   ├── Rodape.jsx                        # Rodapé institucional CourtFlux Telemetry Pro Suite
│   │   │   └── SecaoDestaqueAtletasRadar.jsx     # Seção Athlete Spotlight (retratos HD) & Hawk-Eye Speed Radar
│   │   ├── data/
│   │   │   └── partidasData.js                   # Dados iniciais estruturados das duas partidas
│   │   ├── App.jsx                               # Estado principal, motor de pontuação do tênis e composição
│   │   └── main.jsx                              # Ponto de entrada que monta a aplicação na #root
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── vercel.json                               # Configuração de build, cache e SPA rewrites para a Vercel
│   └── vite.config.js
├── docs/                                         # Documentação complementar de arquitetura do projeto
│   └── ARQUITETURA_DO_PROJETO.md
├── .gitignore
└── README.md
```

---

## ⚙️ Funcionalidades

- **Hero Cinematográfica Ao Vivo (`HeroDestaque.jsx`):** Painel de abertura com status da transmissão, retratos focalizados de cada atleta, ranking ATP, indicador de serviço ativo, placar instantâneo do game/sets e botões de simulação.
- **Placar de Tênis Interativo em Tempo Real (`PainelPlacarAoVivo.jsx`):** Cálculo automático das regras oficiais do tênis (`0`, `15`, `30`, `40`, `Deuce`, `Vantagem`, quebra de serviço `Break Point`, fechamento de `Game` e `Set`), alternando automaticamente o tenista sacador.
- **Seção Galeria dos Atletas & Telemetria de Radar (`SecaoDestaqueAtletasRadar.jsx`):**
  - *Athlete Spotlight*: Retratos verticais de alta definição dos dois tenistas com métricas individuais (*Forehand Speed*, *Fundo de Quadra*, *Voleio*, *Pontos na Rede*, *Winners*) e atalho para registrar `+ Winner`.
  - *Hawk-Eye Radar Live*: Painel com fotografia de impacto na raquete, velocidade de pico, média do set, RPM médio, barras de velocidade por game (`G1` a `G6`) e atalho `+ Registrar Ace no Radar`.
- **Alternância entre Partidas (`Cabecalho.jsx`):** Seleção instantânea entre os confrontos **Ramirez vs Kowalski** e **Carter vs Petrovic** na barra superior.
- **Cronômetro de Quadra Ao Vivo (`CronometroPartida.jsx`):** Contador em tempo real com controles de **Play** e **Pause** e resumo dos parciais de cada Set (`Set 1`, `Set 2`, `Set 3`).
- **Filtro de Estatísticas Táticas:** Pílulas seletoras (`Todos`, `Set 1`, `Set 2`, `Set 3`, `Saque`, `Rede`, `Fundo`) para filtrar indicadores comparativos.
- **Histórico de Lances (Play-by-Play) com Busca e Filtros (`HistoricoJogadas.jsx`):**
  - Campo de pesquisa textual em tempo real por jogador, golpe ou set.
  - Filtro rápido por categoria de lance (`Todos`, `Ace`, `Winner`, `Break Point`, `Erro`).
  - Atualização automática a cada novo ponto marcado no placar.
- **Gráfico de Ritmo de Saque & Head-to-Head (`GraficoRitmoPartida.jsx` & `ResumoConfronto.jsx`):** Visualização em curva SVG da velocidade de saque por game (`km/h`) e comparativo consolidado de pontos, aces, winners e quebras de serviço.
- **Rodapé Profissional (`Rodape.jsx`):** Identidade visual *CourtFlux Telemetry Pro Suite*, indicador de latência do feed, módulos de cobertura e especificações ópticas de transmissão.

---

## 🧠 Conceitos de React Utilizados (Requisitos da Aula)

### 1. JSX (JavaScript XML)
- Escrita declarativa combinando marcação visual e expressões JavaScript entre chaves `{ }`.
- Uso correto das convenções do JSX: `className` para classes CSS, `htmlFor` no `<label>` do campo de pesquisa (`frontend/src/components/BarraDePesquisa.jsx`), fechamento de tags sem conteúdo (`<img />`, `<input />`, `<path />`) e uso de `Fragment` (`<>...</>`) no componente raiz `frontend/src/App.jsx`.

### 2. Componentes: Criação, Composição e Reutilização
A aplicação foi dividida em **16 componentes funcionais** independentes e reutilizáveis, organizados na seguinte árvore hierárquica:

```text
App
├── Cabecalho
├── HeroDestaque
├── CardHeroPartida
├── CardMetricaCircular
├── CardMetricaDestaque
├── CardMetricaProgresso (reutilizado para Baseline Win e Volley Accuracy)
├── CronometroPartida
├── PainelPlacarAoVivo
│   └── ItemEstatistica (reutilizado para cada métrica da partida)
├── HistoricoJogadas
│   ├── BarraDePesquisa
│   └── ListaResultadosJogadas
├── GraficoRitmoPartida
├── ResumoConfronto
├── DestaquesTransmissao
├── SecaoDestaqueAtletasRadar
└── Rodape
```

### 3. Props (Propriedades)
- Fluxo unidirecional de dados (de componente pai para componente filho).
- Passagem de diferentes tipos de valores via `props`:
  - **Strings e Números:** `titulo`, `valor`, `unidade`, `percentual`, `segundosDecorridos`, `torneioAtual`.
  - **Booleanos:** `rodando`, `cronometroRodando`, `mostrarPercentualLateral`.
  - **Objetos e Arrays:** `partida`, `jogador1`, `jogador2`, `placar`, `jogadas`, `estatisticasComparativas`, `dadosRitmo`.
  - **Funções (Callbacks):** `aoMarcarPonto`, `aoSelecionarPartida`, `aoMudarBusca`, `aoAlternarCronometro`, `aoRegistrarAce`, `aoMarcarWinner`.

### 4. DOM e Virtual DOM (Reconciliação e Estado)
- Uso dos hooks `useState` e `useEffect` para gerenciar o estado da partida, cronômetro e filtros.
- Quando um ponto é marcado ou um filtro é alterado, o React recalcula a descrição da interface no **Virtual DOM**, realiza a **reconciliação** e atualiza apenas os nós necessários no DOM real — sem necessidade de manipulação imperativa (`document.querySelector` ou `.textContent`).
- Atualizações de listas e objetos em estado sempre produzem **novos arrays/objetos** (`map`, spread `...`), preservando a imutabilidade.

### 5. Listas e Keys
- Uso combinado de `.filter()` e `.map()` para transformar coleções de dados em elementos JSX (`estatisticasComparativas`, `jogadas`, `historicoSets`, `ritmoVelocidadeSaque`, `comentariosTransmissao`, `FILTROS_PILULAS`).
- Uso de identificadores únicos e estáveis na propriedade `key` (`key={jogada.id}`, `key={stat.id}`, `key={item.id}`, `key={registro.game}`) para garantir a identidade dos elementos durante a reconciliação.

### 6. Renderização Condicional
- **Com `if` e `return` antecipado:** No componente `ListaResultadosJogadas` (`frontend/src/components/HistoricoJogadas.jsx`), caso a filtragem não retorne itens (`if (resultados.length === 0)`), é retornado antecipadamente um aviso de *"Nenhum resultado encontrado para a busca atual"*.
- **Com Operador Ternário (`? :`) e Curto-Circuito (`&&`):**
  - Alternância do badge de status no cabeçalho e na Hero (`AO VIVO` vs `PAUSADO`).
  - Exibição dinâmica de estados críticos do game (`Break Point`, `Deuce (Iguais)` ou `Set X`).
  - Indicador visual ao lado do tenista que está sacando no momento (`sacadorAtual === 1 && ...`).

---

## ✅ Checklist Geral do Desafio e Entregáveis

| Requisito Proposto na Atividade | Status | Onde está no Projeto |
| :--- | :---: | :--- |
| **1. Utilizar JSX** (expressões `{}`, `className`, `htmlFor`, tags fechadas, `Fragment`) | ✅ Concluído | Em todos os componentes; `Fragment` (`<>...</>`) em `frontend/src/App.jsx` e `htmlFor="campo-busca-jogadas"` em `frontend/src/components/BarraDePesquisa.jsx`. |
| **2. Componentes** (criação, composição, árvore hierárquica e reutilização) | ✅ Concluído | 16 componentes modulares em `frontend/src/components/`, com reutilização direta em `CardMetricaProgresso.jsx` e `ItemEstatistica.jsx`. |
| **3. Props** (fluxo unidirecional pai → filho com diversos tipos de dados) | ✅ Concluído | Passagem de strings, números, booleanos, objetos (`partida`, `jogador1`, `placar`), arrays (`jogadas`, `partidas`) e funções de callback a partir do `frontend/src/App.jsx`. |
| **4. Virtual DOM e Reconciliação** (atualização declarativa via estado) | ✅ Concluído | Placar interativo ponto a ponto (`0` → `15` → `30` → `40` → `Deuce/AD` → `Game` → `Set`) e cronômetro ao vivo gerenciados com `useState` e `useEffect` em `frontend/src/App.jsx`. |
| **5. Listas e Keys** (`.map()`, `.filter()`, `key` única e imutabilidade) | ✅ Concluído | Filtragem e listagem de lances em `HistoricoJogadas.jsx`, métricas em `PainelPlacarAoVivo.jsx`, sets em `CronometroPartida.jsx`, radar em `SecaoDestaqueAtletasRadar.jsx` e feed em `DestaquesTransmissao.jsx`. |
| **6. Renderização Condicional** (`if / return` antecipado e ternário `? :`) | ✅ Concluído | `if (resultados.length === 0) return ...` em `ListaResultadosJogadas` (`HistoricoJogadas.jsx`), além de ternários e `&&` para *Break Point*, *Deuce*, tenista sacador e status *AO VIVO / PAUSADO*. |
| **7. README.md** (descrição, estrutura, funcionalidades e conceitos utilizados) | ✅ Concluído | Documentado integralmente neste arquivo `README.md`. |

---

## 🚀 Como Executar Localmente

1. Acesse a pasta da aplicação front-end:
   ```bash
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse o link local exibido no terminal (ex: `http://localhost:5173`).

---

## ☁️ Como Fazer Deploy na Vercel

1. Importe o repositório no painel da [Vercel](https://vercel.com/new).
2. Em **Root Directory**, clique em **Edit** e selecione a pasta **`frontend`**.
3. As configurações de build são detectadas automaticamente via `frontend/vercel.json`:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Clique em **Deploy**.
