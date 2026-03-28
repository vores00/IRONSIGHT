'use client';

import { COMMODITY_TYPE_LABELS, ENERGY_NAME_LABELS, getDisplayLabel } from '@/lib/displayLabels';
import { useDataFeed, formatPrice, formatChange } from '@/lib/hooks';

interface OilData {
  type: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  error?: boolean;
}

export default function OilPanel() {
  const { data: prices, loading } = useDataFeed<OilData[]>('/api/oil', 300000);

  return (
    <div className="panel h-full flex flex-col">
      <div className="panel-header">
        <span className="status-dot" />
        ЭНЕРГОРЫНКИ
      </div>
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="space-y-2 p-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="loading-shimmer h-10 rounded" />
            ))}
          </div>
        ) : (
          prices?.map((item, i) => (
            <div key={i} className="data-row flex items-center justify-between">
              <div>
                <div className="text-[11px] font-medium text-[var(--text-primary)]">
                  {getDisplayLabel(item.name, ENERGY_NAME_LABELS)}
                </div>
                <div className="text-[9px] text-[var(--text-secondary)] uppercase">
                  {getDisplayLabel(item.type, COMMODITY_TYPE_LABELS)}
                </div>
              </div>
              <div className="text-right">
                <div className={`text-sm font-bold ${item.error ? 'text-[var(--text-secondary)]' : ''}`}>
                  {item.error ? 'Н/Д' : `$${formatPrice(item.price)}`}
                </div>
                {!item.error && (
                  <div
                    className={`text-[10px] ${
                      item.change >= 0 ? 'value-up' : 'value-down'
                    }`}
                  >
                    {formatChange(item.change, item.changePercent)}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
