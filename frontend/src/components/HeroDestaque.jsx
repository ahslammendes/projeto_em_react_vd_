import React from 'react';

const PONTOS_LABELS = ['0', '15', '30', '40'];

export function HeroDestaque({
  partida,
  cronometroRodando,
  aoAlternarCronometro,
  aoSimularPontoAleatorio,
}) {
  const {
    torneio,
    quadra,
    fase,
    imagemHero,
    jogador1,
    jogador2,
    placar,
    sacadorAtual,
    setAtual,
  } = partida;

  const pontosJ1 =
    placar.vantagem === 1
      ? 'AD'
      : placar.vantagem === 2
      ? '40'
      : PONTOS_LABELS[placar.pontosIdx1];

  const pontosJ2 =
    placar.vantagem === 2
      ? 'AD'
      : placar.vantagem === 1
      ? '40'
      : PONTOS_LABELS[placar.pontosIdx2];

  return (
    <section className="relative overflow-hidden rounded-3xl bg-stone-950 text-stone-100 shadow-[0_12px_35px_rgba(0,0,0,0.18)] ring-1 ring-stone-900/10 mb-8">
      {/* Imagem de fundo principal com tratamento cinematográfico */}
      <div className="absolute inset-0">
        <img
          src={imagemHero}
          alt={`${jogador1.nome} vs ${jogador2.nome}`}
          className="h-full w-full object-cover object-center opacity-40 scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/60" />
      </div>

      <div className="relative z-10 p-6 sm:p-8 lg:p-10">
        {/* Topo da Hero: Badges de Transmissão e Ações Rápidas */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2.5">
            {cronometroRodando ? (
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/40 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                TRANSMISSÃO OFICIAL AO VIVO
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 ring-1 ring-amber-400/40 px-3 py-1 text-xs font-semibold tracking-wide text-amber-300">
                TRANSMISSÃO EM PAUSA
              </span>
            )}

            <span className="rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-medium text-stone-200 ring-1 ring-white/15">
              {torneio}
            </span>
            <span className="hidden sm:inline-block rounded-full bg-white/5 px-3 py-1 text-xs text-stone-300 ring-1 ring-white/10">
              {quadra}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => aoAlternarCronometro(!cronometroRodando)}
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 px-3.5 py-2 text-xs font-medium text-stone-200 ring-1 ring-white/15 transition-colors"
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  cronometroRodando ? 'bg-amber-400' : 'bg-emerald-400'
                }`}
              />
              {cronometroRodando ? 'Pausar Feed' : 'Retomar Feed'}
            </button>

            <button
              type="button"
              onClick={aoSimularPontoAleatorio}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 px-4 py-2 text-xs font-semibold shadow-md active:scale-95 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5"
              >
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
              </svg>
              Simular Jogada Ao Vivo
            </button>
          </div>
        </div>

        {/* Corpo Principal da Hero: Confronto + Placar Centralizado + Cards Visuais */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
          {/* Lado Esquerdo: Título Cinematográfico e Contexto */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <span>{fase}</span>
              <span>•</span>
              <span>Set {setAtual} em andamento</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              {jogador1.nomeCurto}{' '}
              <span className="text-stone-400 font-light">vs</span>{' '}
              {jogador2.nomeCurto}
            </h1>

            <p className="text-sm text-stone-300 leading-relaxed max-w-md">
              Cobertura completa com telemetria óptica Hawk-Eye, radar de
              velocidade de saque em tempo real e análise tática golpe a golpe.
            </p>

            {/* Mini parciais dos Sets */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              {placar.historicoSets.map((s) => (
                <div
                  key={s.set}
                  className={`rounded-xl px-3 py-1.5 text-xs ring-1 ${
                    s.set === setAtual
                      ? 'bg-amber-400/15 ring-amber-400/40 text-amber-200 font-semibold'
                      : 'bg-white/5 ring-white/10 text-stone-300'
                  }`}
                >
                  <span className="text-stone-400 mr-1.5">{s.label}:</span>
                  <span>
                    {s.j1} - {s.j2}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Confronto Visual dos Atletas + Placar Ao Vivo */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-11 gap-4 items-center">
            {/* Atleta 1 */}
            <div className="sm:col-span-4 relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/15 p-4 backdrop-blur-md">
              <div className="flex items-center gap-3.5">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl ring-2 ring-amber-400/70 shadow-md">
                  <img
                    src={jogador1.avatar}
                    alt={jogador1.nome}
                    className="h-full w-full object-cover scale-125"
                    style={{ objectPosition: jogador1.posicaoAvatar }}
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="rounded bg-amber-400/20 px-1.5 py-0.5 text-[10px] font-bold text-amber-300">
                      #{jogador1.ranking} ATP
                    </span>
                    <span className="text-xs font-medium text-stone-400">
                      {jogador1.pais}
                    </span>
                  </div>
                  <p className="mt-1 text-base font-semibold text-white truncate">
                    {jogador1.nome}
                  </p>
                  <p className="text-[11px] text-stone-400 truncate">
                    {jogador1.estilo}
                  </p>
                </div>
              </div>
              {sacadorAtual === 1 && (
                <div className="mt-3 flex items-center justify-between rounded-lg bg-amber-400/10 px-2.5 py-1 text-[11px] font-medium text-amber-300">
                  <span>Com o serviço</span>
                  <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
                </div>
              )}
            </div>

            {/* Placar Central da Hero */}
            <div className="sm:col-span-3 flex flex-col items-center justify-center rounded-2xl bg-stone-900/90 ring-1 ring-white/15 px-4 py-4 text-center shadow-inner">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-400">
                Game Atual
              </span>
              <div className="my-1 flex items-baseline gap-2.5 font-mono text-2xl sm:text-3xl font-bold text-white">
                <span className="text-amber-300">{pontosJ1}</span>
                <span className="text-stone-600 text-lg">:</span>
                <span className="text-cyan-300">{pontosJ2}</span>
              </div>
              <div className="text-xs text-stone-300 font-medium">
                Games: {placar.gamesJogador1} - {placar.gamesJogador2}
              </div>
              <div className="mt-1 text-[11px] text-stone-400">
                Sets: {placar.setsJogador1} - {placar.setsJogador2}
              </div>
            </div>

            {/* Atleta 2 */}
            <div className="sm:col-span-4 relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/15 p-4 backdrop-blur-md">
              <div className="flex items-center gap-3.5">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl ring-2 ring-cyan-400/70 shadow-md">
                  <img
                    src={jogador2.avatar}
                    alt={jogador2.nome}
                    className="h-full w-full object-cover scale-125"
                    style={{ objectPosition: jogador2.posicaoAvatar }}
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="rounded bg-cyan-400/20 px-1.5 py-0.5 text-[10px] font-bold text-cyan-300">
                      #{jogador2.ranking} ATP
                    </span>
                    <span className="text-xs font-medium text-stone-400">
                      {jogador2.pais}
                    </span>
                  </div>
                  <p className="mt-1 text-base font-semibold text-white truncate">
                    {jogador2.nome}
                  </p>
                  <p className="text-[11px] text-stone-400 truncate">
                    {jogador2.estilo}
                  </p>
                </div>
              </div>
              {sacadorAtual === 2 && (
                <div className="mt-3 flex items-center justify-between rounded-lg bg-cyan-400/10 px-2.5 py-1 text-[11px] font-medium text-cyan-300">
                  <span>Com o serviço</span>
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
