import React from 'react';

export function Rodape({ torneioAtual, quadraAtual }) {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-stone-300/80 bg-stone-100/70 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Identidade da Marca e Status */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-stone-900 text-stone-100 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                </svg>
              </span>
              <span className="text-sm font-semibold tracking-tight text-stone-900">
                CourtFlux Telemetry
              </span>
              <span className="rounded-md bg-stone-200/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-stone-600">
                Pro Suite v2.4
              </span>
            </div>

            <p className="text-xs leading-relaxed text-stone-500 max-w-sm">
              Plataforma de monitoramento esportivo em tempo real, análise de
              desempenho de quadra, velocidade de saque e estatísticas oficiais
              de transmissão.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-stone-600 ring-1 ring-stone-200/80 shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Feed de Telemetria Operacional</span>
              <span className="text-stone-300">•</span>
              <span className="font-mono text-[11px] text-stone-500">18ms</span>
            </div>
          </div>

          {/* Navegação Rápida / Cobertura */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs">
            <div className="space-y-2.5">
              <h4 className="font-semibold uppercase tracking-wider text-stone-800 text-[11px]">
                Cobertura Ativa
              </h4>
              <ul className="space-y-2 text-stone-500">
                <li className="truncate font-medium text-stone-700">
                  {torneioAtual || 'ATP Finals • Turim'}
                </li>
                <li className="truncate">
                  {quadraAtual || 'Quadra Central • Inalpi Arena'}
                </li>
                <li>Hawk-Eye Live Tracking</li>
                <li>Radar de Velocidade IBM</li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <h4 className="font-semibold uppercase tracking-wider text-stone-800 text-[11px]">
                Módulos
              </h4>
              <ul className="space-y-2 text-stone-500">
                <li>
                  <a
                    href="#top"
                    className="hover:text-stone-900 transition-colors"
                  >
                    Match Center Ao Vivo
                  </a>
                </li>
                <li>
                  <a
                    href="#top"
                    className="hover:text-stone-900 transition-colors"
                  >
                    Telemetria &amp; Ritmo
                  </a>
                </li>
                <li>
                  <a
                    href="#top"
                    className="hover:text-stone-900 transition-colors"
                  >
                    Play-by-Play Oficial
                  </a>
                </li>
                <li>
                  <a
                    href="#top"
                    className="hover:text-stone-900 transition-colors"
                  >
                    Comparativo Head-to-Head
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Especificações Técnicas / Broadcast */}
          <div className="md:col-span-3 space-y-2.5 text-xs">
            <h4 className="font-semibold uppercase tracking-wider text-stone-800 text-[11px]">
              Padrão de Transmissão
            </h4>
            <div className="rounded-xl bg-white/80 p-3.5 ring-1 ring-stone-200/80 space-y-2">
              <div className="flex items-center justify-between text-stone-500">
                <span>Sincronização</span>
                <span className="font-medium text-stone-800">Tempo Real</span>
              </div>
              <div className="flex items-center justify-between text-stone-500">
                <span>Precisão Óptica</span>
                <span className="font-medium text-stone-800">± 2.2 mm</span>
              </div>
              <div className="flex items-center justify-between text-stone-500">
                <span>Protocolo</span>
                <span className="font-mono text-[11px] text-stone-700">
                  ATP-FEED-SSL
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior de Direitos e Links */}
        <div className="mt-8 pt-6 border-t border-stone-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {anoAtual}{' '}
            <strong className="font-semibold text-stone-700">
              CourtFlux Sports Media Inc.
            </strong>{' '}
            Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#top" className="hover:text-stone-800 transition-colors">
              Termos de Uso
            </a>
            <span className="text-stone-300">•</span>
            <a href="#top" className="hover:text-stone-800 transition-colors">
              Privacidade de Dados
            </a>
            <span className="text-stone-300">•</span>
            <a href="#top" className="hover:text-stone-800 transition-colors">
              API &amp; Imprensa
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
