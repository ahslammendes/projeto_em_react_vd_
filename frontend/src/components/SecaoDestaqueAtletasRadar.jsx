import React from 'react';

export function SecaoDestaqueAtletasRadar({
  partida,
  aoRegistrarAce,
  aoMarcarWinner,
}) {
  const {
    imagemHero,
    imagemGrafico,
    jogador1,
    jogador2,
    ritmoVelocidadeSaque,
    resumoMacros,
    sacadorAtual,
  } = partida;

  const velocidades = ritmoVelocidadeSaque.map((item) => item.velocidade);
  const velocidadePico = Math.max(...velocidades, jogador1.velocidadeForehand);
  const velocidadeMedia = Math.round(
    velocidades.reduce((acc, v) => acc + v, 0) /
      Math.max(velocidades.length, 1)
  );

  return (
    <section
      aria-label="Destaque Visual dos Atletas e Telemetria de Radar"
      className="mt-10 rounded-3xl bg-stone-50/95 p-6 sm:p-8 ring-1 ring-stone-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
    >
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-stone-200/90">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-stone-900 text-stone-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Athlete Spotlight &amp; Speed Radar
          </div>
          <h2 className="mt-2.5 text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            Galeria dos Atletas &amp; Telemetria de Radar
          </h2>
          <p className="mt-1 text-sm text-stone-600">
            Enquadramento de alta definição dos tenistas em quadra combinado ao
            rastreamento balístico por game.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={aoRegistrarAce}
            className="rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-100 px-3.5 py-2 text-xs font-semibold shadow-xs transition-colors"
          >
            + Registrar Ace no Radar
          </button>
        </div>
      </div>

      {/* Grid Principal: 2 Cards de Retrato dos Atletas (7 cols) + Painel Radar (5 cols) */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Coluna de Destaque Visual dos Atletas */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Card Visual Atleta 1 */}
          <article className="group relative overflow-hidden rounded-3xl bg-stone-900 text-white shadow-lg ring-1 ring-stone-900/10 min-h-[360px] flex flex-col justify-between">
            <img
              src={imagemHero}
              alt={`Destaque em quadra de ${jogador1.nome}`}
              className="absolute inset-0 h-full w-full object-cover scale-125 group-hover:scale-135 transition-transform duration-700"
              style={{ objectPosition: jogador1.posicaoAvatar }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-stone-950/20" />

            {/* Topo do Card Atleta 1 */}
            <div className="relative z-10 p-5 flex items-center justify-between">
              <span className="rounded-full bg-amber-400 text-stone-950 px-3 py-1 text-xs font-bold tracking-wide shadow-sm">
                RANK #{jogador1.ranking} • {jogador1.pais}
              </span>
              {sacadorAtual === 1 && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-900/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-amber-300 ring-1 ring-amber-400/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Sacando
                </span>
              )}
            </div>

            {/* Base com Telemetria Individual Atleta 1 */}
            <div className="relative z-10 p-5 space-y-3">
              <div>
                <p className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                  {jogador1.estilo}
                </p>
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  {jogador1.nome}
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-2 rounded-2xl bg-stone-900/80 backdrop-blur-md p-3 ring-1 ring-white/15 text-center">
                <div>
                  <p className="text-[10px] uppercase text-stone-400">
                    Forehand
                  </p>
                  <p className="text-sm font-bold text-amber-300">
                    {jogador1.velocidadeForehand} km/h
                  </p>
                </div>
                <div className="border-x border-white/10">
                  <p className="text-[10px] uppercase text-stone-400">
                    Fundo Quadra
                  </p>
                  <p className="text-sm font-bold text-white">
                    {jogador1.taxaFundoQuadra}%
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-stone-400">
                    Winners
                  </p>
                  <p className="text-sm font-bold text-emerald-300">
                    {resumoMacros.winnersJ1}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => aoMarcarWinner(1)}
                className="w-full rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-sm py-2 text-xs font-semibold text-white ring-1 ring-white/20 transition-colors"
              >
                + Winner para {jogador1.nomeCurto}
              </button>
            </div>
          </article>

          {/* Card Visual Atleta 2 */}
          <article className="group relative overflow-hidden rounded-3xl bg-stone-900 text-white shadow-lg ring-1 ring-stone-900/10 min-h-[360px] flex flex-col justify-between">
            <img
              src={imagemHero}
              alt={`Destaque em quadra de ${jogador2.nome}`}
              className="absolute inset-0 h-full w-full object-cover scale-125 group-hover:scale-135 transition-transform duration-700"
              style={{ objectPosition: jogador2.posicaoAvatar }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-stone-950/20" />

            {/* Topo do Card Atleta 2 */}
            <div className="relative z-10 p-5 flex items-center justify-between">
              <span className="rounded-full bg-cyan-400 text-stone-950 px-3 py-1 text-xs font-bold tracking-wide shadow-sm">
                RANK #{jogador2.ranking} • {jogador2.pais}
              </span>
              {sacadorAtual === 2 && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-900/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-cyan-300 ring-1 ring-cyan-400/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Sacando
                </span>
              )}
            </div>

            {/* Base com Telemetria Individual Atleta 2 */}
            <div className="relative z-10 p-5 space-y-3">
              <div>
                <p className="text-xs uppercase tracking-wider text-cyan-300 font-semibold">
                  {jogador2.estilo}
                </p>
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  {jogador2.nome}
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-2 rounded-2xl bg-stone-900/80 backdrop-blur-md p-3 ring-1 ring-white/15 text-center">
                <div>
                  <p className="text-[10px] uppercase text-stone-400">
                    Voleio
                  </p>
                  <p className="text-sm font-bold text-cyan-300">
                    {jogador2.precisaoVoleio}%
                  </p>
                </div>
                <div className="border-x border-white/10">
                  <p className="text-[10px] uppercase text-stone-400">
                    Pts na Rede
                  </p>
                  <p className="text-sm font-bold text-white">
                    {jogador2.pontosRedeGanhos}%
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-stone-400">
                    Winners
                  </p>
                  <p className="text-sm font-bold text-emerald-300">
                    {resumoMacros.winnersJ2}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => aoMarcarWinner(2)}
                className="w-full rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-sm py-2 text-xs font-semibold text-white ring-1 ring-white/20 transition-colors"
              >
                + Winner para {jogador2.nomeCurto}
              </button>
            </div>
          </article>
        </div>

        {/* Coluna Direita: Painel Especial do Radar Óptico de Impacto */}
        <article className="lg:col-span-5 relative overflow-hidden rounded-3xl bg-stone-950 text-stone-100 shadow-lg ring-1 ring-stone-900/10 p-6 flex flex-col justify-between min-h-[360px]">
          <img
            src={imagemGrafico}
            alt="Radar óptico de impacto na raquete"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-stone-950/90 via-stone-950/75 to-stone-900/85" />

          <div className="relative z-10 space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-amber-400">
                  <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
                  Hawk-Eye Radar Live
                </span>
                <h3 className="mt-1 text-xl font-bold tracking-tight text-white">
                  Telemetria de Impacto &amp; Saque
                </h3>
              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-md px-3 py-1.5 text-right ring-1 ring-white/15">
                <p className="text-[10px] uppercase text-stone-400">
                  Pico Registrado
                </p>
                <p className="font-mono text-lg font-bold text-amber-300">
                  {velocidadePico} km/h
                </p>
              </div>
            </div>

            {/* Indicadores Rápidos do Radar */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
                <p className="text-[11px] text-stone-400">Média do Set</p>
                <p className="mt-0.5 font-mono text-base font-bold text-white">
                  {velocidadeMedia} km/h
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
                <p className="text-[11px] text-stone-400">Total de Aces</p>
                <p className="mt-0.5 font-mono text-base font-bold text-emerald-300">
                  {resumoMacros.acesJ1 + resumoMacros.acesJ2} aces
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
                <p className="text-[11px] text-stone-400">RPM Médio</p>
                <p className="mt-0.5 font-mono text-base font-bold text-cyan-300">
                  3.240 rpm
                </p>
              </div>
            </div>

            {/* Barras de Velocidade por Game do Radar */}
            <div className="rounded-2xl bg-stone-900/75 backdrop-blur-md p-4 ring-1 ring-white/10 space-y-2.5">
              <div className="flex items-center justify-between text-xs text-stone-300">
                <span className="font-medium">
                  Monitoramento por Game (km/h)
                </span>
                <span className="font-mono text-[11px] text-amber-300">
                  Sensor Laser Ativo
                </span>
              </div>

              <div className="space-y-2">
                {ritmoVelocidadeSaque.map((registro) => {
                  const larguraBarra = Math.min(
                    100,
                    Math.max(35, Math.round((registro.velocidade / 210) * 100))
                  );
                  const ehPico = registro.velocidade === Math.max(...velocidades);

                  return (
                    <div
                      key={registro.game}
                      className="flex items-center gap-3 text-xs"
                    >
                      <span className="w-7 font-mono font-semibold text-stone-400">
                        {registro.game}
                      </span>
                      <div className="flex-1 h-2.5 rounded-full bg-stone-800 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            ehPico
                              ? 'bg-gradient-to-r from-amber-400 to-orange-400'
                              : 'bg-gradient-to-r from-stone-400 to-amber-200/80'
                          }`}
                          style={{ width: `${larguraBarra}%` }}
                        />
                      </div>
                      <span
                        className={`w-16 text-right font-mono font-semibold ${
                          ehPico ? 'text-amber-300' : 'text-stone-200'
                        }`}
                      >
                        {registro.velocidade} km/h
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-stone-400">
            <span>Câmeras de Alta Velocidade (340 fps)</span>
            <span className="text-stone-300 font-medium">
              Calibrado • Quadra Central
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
