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
      className="mb-8 rounded-3xl bg-white p-6 sm:p-7 ring-1 ring-stone-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
    >
      {/* Cabeçalho da Seção Alinhado */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-stone-900 text-stone-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Athlete Spotlight &amp; Speed Radar
          </div>
          <h2 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-stone-900">
            Galeria dos Atletas &amp; Telemetria de Radar
          </h2>
          <p className="mt-0.5 text-sm text-stone-500">
            Enquadramento proporcional dos tenistas em quadra e rastreamento
            balístico game a game.
          </p>
        </div>

        <button
          type="button"
          onClick={aoRegistrarAce}
          className="self-start sm:self-center shrink-0 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-100 px-4 py-2.5 text-xs font-semibold shadow-xs transition-colors"
        >
          + Registrar Ace no Radar
        </button>
      </div>

      {/* Grid Simétrico de 3 Colunas Iguais (4 + 4 + 4 em 12 col) com mesma altura (h-[380px]) */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Card 1: Atleta 1 */}
        <article className="group relative overflow-hidden rounded-3xl bg-stone-900 text-white shadow-md ring-1 ring-stone-900/10 h-[380px] flex flex-col justify-between p-5">
          <img
            src={imagemHero}
            alt={`Destaque em quadra de ${jogador1.nome}`}
            className="absolute inset-0 h-full w-full object-cover scale-115 group-hover:scale-125 transition-transform duration-700"
            style={{ objectPosition: jogador1.posicaoAvatar }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-stone-950/20" />

          {/* Topo Simétrico Atleta 1 */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            <span className="rounded-full bg-amber-400 text-stone-950 px-3 py-1 text-xs font-bold tracking-wide shadow-sm">
              RANK #{jogador1.ranking} • {jogador1.pais}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full backdrop-blur-md px-2.5 py-1 text-[11px] font-medium ring-1 ${
                sacadorAtual === 1
                  ? 'bg-stone-900/85 text-amber-300 ring-amber-400/40'
                  : 'bg-stone-900/70 text-stone-300 ring-white/15'
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  sacadorAtual === 1
                    ? 'bg-amber-400 animate-pulse'
                    : 'bg-stone-400'
                }`}
              />
              {sacadorAtual === 1 ? 'Sacando' : 'Recebendo'}
            </span>
          </div>

          {/* Base Simétrica Atleta 1 */}
          <div className="relative z-10 space-y-3">
            <div>
              <p className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                {jogador1.estilo}
              </p>
              <h3 className="text-2xl font-bold tracking-tight text-white truncate">
                {jogador1.nome}
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-2 rounded-2xl bg-stone-900/85 backdrop-blur-md p-3 ring-1 ring-white/15 text-center">
              <div>
                <p className="text-[10px] uppercase text-stone-400">Forehand</p>
                <p className="mt-0.5 text-sm font-bold text-amber-300 tabular-nums">
                  {jogador1.velocidadeForehand} km/h
                </p>
              </div>
              <div className="border-x border-white/10">
                <p className="text-[10px] uppercase text-stone-400">Fundo</p>
                <p className="mt-0.5 text-sm font-bold text-white tabular-nums">
                  {jogador1.taxaFundoQuadra}%
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-stone-400">Winners</p>
                <p className="mt-0.5 text-sm font-bold text-emerald-300 tabular-nums">
                  {resumoMacros.winnersJ1}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => aoMarcarWinner(1)}
              className="w-full rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-sm py-2.5 text-xs font-semibold text-white ring-1 ring-white/20 transition-colors"
            >
              + Winner para {jogador1.nomeCurto}
            </button>
          </div>
        </article>

        {/* Card 2: Atleta 2 */}
        <article className="group relative overflow-hidden rounded-3xl bg-stone-900 text-white shadow-md ring-1 ring-stone-900/10 h-[380px] flex flex-col justify-between p-5">
          <img
            src={imagemHero}
            alt={`Destaque em quadra de ${jogador2.nome}`}
            className="absolute inset-0 h-full w-full object-cover scale-115 group-hover:scale-125 transition-transform duration-700"
            style={{ objectPosition: jogador2.posicaoAvatar }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-stone-950/20" />

          {/* Topo Simétrico Atleta 2 */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            <span className="rounded-full bg-cyan-400 text-stone-950 px-3 py-1 text-xs font-bold tracking-wide shadow-sm">
              RANK #{jogador2.ranking} • {jogador2.pais}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full backdrop-blur-md px-2.5 py-1 text-[11px] font-medium ring-1 ${
                sacadorAtual === 2
                  ? 'bg-stone-900/85 text-cyan-300 ring-cyan-400/40'
                  : 'bg-stone-900/70 text-stone-300 ring-white/15'
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  sacadorAtual === 2
                    ? 'bg-cyan-400 animate-pulse'
                    : 'bg-stone-400'
                }`}
              />
              {sacadorAtual === 2 ? 'Sacando' : 'Recebendo'}
            </span>
          </div>

          {/* Base Simétrica Atleta 2 */}
          <div className="relative z-10 space-y-3">
            <div>
              <p className="text-xs uppercase tracking-wider text-cyan-300 font-semibold">
                {jogador2.estilo}
              </p>
              <h3 className="text-2xl font-bold tracking-tight text-white truncate">
                {jogador2.nome}
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-2 rounded-2xl bg-stone-900/85 backdrop-blur-md p-3 ring-1 ring-white/15 text-center">
              <div>
                <p className="text-[10px] uppercase text-stone-400">Voleio</p>
                <p className="mt-0.5 text-sm font-bold text-cyan-300 tabular-nums">
                  {jogador2.precisaoVoleio}%
                </p>
              </div>
              <div className="border-x border-white/10">
                <p className="text-[10px] uppercase text-stone-400">Rede</p>
                <p className="mt-0.5 text-sm font-bold text-white tabular-nums">
                  {jogador2.pontosRedeGanhos}%
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-stone-400">Winners</p>
                <p className="mt-0.5 text-sm font-bold text-emerald-300 tabular-nums">
                  {resumoMacros.winnersJ2}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => aoMarcarWinner(2)}
              className="w-full rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-sm py-2.5 text-xs font-semibold text-white ring-1 ring-white/20 transition-colors"
            >
              + Winner para {jogador2.nomeCurto}
            </button>
          </div>
        </article>

        {/* Card 3: Radar Óptico de Impacto (Mesmas dimensões e alinhamento dos cards dos atletas) */}
        <article className="group relative overflow-hidden rounded-3xl bg-stone-950 text-stone-100 shadow-md ring-1 ring-stone-900/10 h-[380px] flex flex-col justify-between p-5">
          <img
            src={imagemGrafico}
            alt="Radar óptico de impacto na raquete"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-950/40" />

          {/* Topo Simétrico Radar */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            <span className="rounded-full bg-emerald-400 text-stone-950 px-3 py-1 text-xs font-bold tracking-wide shadow-sm">
              HAWK-EYE RADAR
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-900/85 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-amber-300 ring-1 ring-amber-400/40">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-ping" />
              340 FPS
            </span>
          </div>

          {/* Miolo Compacto de Barras do Radar */}
          <div className="relative z-10 my-auto py-2">
            <div className="rounded-2xl bg-stone-900/75 backdrop-blur-md p-3 ring-1 ring-white/10 space-y-1.5">
              {ritmoVelocidadeSaque.slice(0, 4).map((registro) => {
                const larguraBarra = Math.min(
                  100,
                  Math.max(35, Math.round((registro.velocidade / 205) * 100))
                );
                const ehPico = registro.velocidade === Math.max(...velocidades);

                return (
                  <div
                    key={registro.game}
                    className="flex items-center gap-2.5 text-[11px]"
                  >
                    <span className="w-6 font-mono font-semibold text-stone-400">
                      {registro.game}
                    </span>
                    <div className="flex-1 h-2 rounded-full bg-stone-800 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          ehPico
                            ? 'bg-gradient-to-r from-amber-400 to-orange-400'
                            : 'bg-gradient-to-r from-stone-400 to-amber-200/80'
                        }`}
                        style={{ width: `${larguraBarra}%` }}
                      />
                    </div>
                    <span
                      className={`w-14 text-right font-mono font-semibold tabular-nums ${
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

          {/* Base Simétrica Radar (Idêntica à estrutura da base dos atletas) */}
          <div className="relative z-10 space-y-3">
            <div>
              <p className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                Ballistics &amp; Spin Telemetry
              </p>
              <h3 className="text-2xl font-bold tracking-tight text-white truncate">
                Radar de Impacto
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-2 rounded-2xl bg-stone-900/85 backdrop-blur-md p-3 ring-1 ring-white/15 text-center">
              <div>
                <p className="text-[10px] uppercase text-stone-400">Pico</p>
                <p className="mt-0.5 text-sm font-bold text-amber-300 tabular-nums">
                  {velocidadePico} km/h
                </p>
              </div>
              <div className="border-x border-white/10">
                <p className="text-[10px] uppercase text-stone-400">Média</p>
                <p className="mt-0.5 text-sm font-bold text-white tabular-nums">
                  {velocidadeMedia} km/h
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-stone-400">Aces</p>
                <p className="mt-0.5 text-sm font-bold text-emerald-300 tabular-nums">
                  {resumoMacros.acesJ1 + resumoMacros.acesJ2}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={aoRegistrarAce}
              className="w-full rounded-xl bg-amber-400/90 hover:bg-amber-400 text-stone-950 py-2.5 text-xs font-semibold shadow-sm transition-colors"
            >
              + Disparar Saque Ace
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
