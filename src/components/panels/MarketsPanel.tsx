'use client';

import { MARKET_NAME_LABELS, getDisplayLabel } from '@/lib/displayLabels';
import { useDataFeed, formatPrice, formatChange } from '@/lib/hooks';

interface MarketItem {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  error?: boolean;
}

export default function MarketsPanel() {
  const { data: markets, loading } = useDataFeed<MarketItem[]>('/api/markets', 300000);

  const indices = markets?.filter(m =>
    ['^DJI', '^GSPC', '^VIX', 'GC=F', 'DX-Y.NYB'].includes(m.symbol)
  );
  const defense = markets?.filter(m =>
    !(['^DJI', '^GSPC', '^VIX', 'GC=F', 'DX-Y.NYB'].includes(m.symbol))
  );

  return (
    <div className="panel h-full flex flex-col">
      <div className="panel-header">
        <span className="status-dot" />
        ОБОРОНА И РЫНКИ
      </div>
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="space-y-2 p-3">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="loading-shimmer h-8 rounded" />
            ))}
          </div>
        ) : (
          <>
            <div className="px-3 pt-2 pb-1">
              <span className="text-[9px] text-[var(--text-accent)] tracking-widest">ИНДЕКСЫ</span>
            </div>
            {indices?.map((item, i) => (
              <div key={i} className="data-row flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-medium">{getDisplayLabel(item.name, MARKET_NAME_LABELS)}</span>
                </div>
                <div className="text-right flex items-center gap-3">
                  <span className="text-[11px] font-bold">
                    {item.error ? 'Н/Д' : `$${formatPrice(item.price)}`}
                  </span>
                  {!item.error && (
                    <span className={`text-[9px] w-16 text-right ${item.change >= 0 ? 'value-up' : 'value-down'}`}>
                      {(item.changePercent ?? 0) >= 0 ? '+' : ''}{(item.changePercent ?? 0).toFixed(2)}%
                    </span>
                  )}
                </div>
              </div>
            ))}

            <div className="px-3 pt-3 pb-1">
              <span className="text-[9px] text-[var(--text-accent)] tracking-widest">ОБОРОННЫЕ ПОДРЯДЧИКИ</span>
            </div>
            {defense?.map((item, i) => (
              <div key={i} className="data-row flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-[var(--text-secondary)] font-mono w-8">{item.symbol}</span>
                  <span className="text-[10px] font-medium">{getDisplayLabel(item.name, MARKET_NAME_LABELS)}</span>
                </div>
                <div className="text-right flex items-center gap-3">
                  <span className="text-[11px] font-bold">
                    {item.error ? 'Н/Д' : `$${formatPrice(item.price)}`}
                  </span>
                  {!item.error && (
                    <span className={`text-[9px] w-16 text-right ${item.change >= 0 ? 'value-up' : 'value-down'}`}>
                      {(item.changePercent ?? 0) >= 0 ? '+' : ''}{(item.changePercent ?? 0).toFixed(2)}%
                    </span>
                  )}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
