type LabelMap = Record<string, string>;

const COMPOSITE_SPLIT_RE = /(\s*(?:,|\/|•)\s*)/;

export const ALERT_TYPE_LABELS: LabelMap = {
  MISSILE: 'РАКЕТА',
  ROCKET: 'ОБСТРЕЛ',
  DRONE: 'БПЛА',
  MORTAR: 'МИНОМЕТ',
  INFILTRATION: 'ПРОНИКНОВЕНИЕ',
  ALERT: 'ТРЕВОГА',
  EARTHQUAKE: 'ЗЕМЛЕТРЯСЕНИЕ',
  TSUNAMI: 'ЦУНАМИ',
  HAZMAT: 'ОПАСНЫЕ ВЕЩЕСТВА',
};

export const STATUS_LABELS: LabelMap = {
  ACTIVE: 'АКТИВНО',
  CLEAR: 'ЧИСТО',
  ALERT: 'ТРЕВОГА',
  CRITICAL: 'КРИТИЧНО',
  MONITORING: 'МОНИТОРИНГ',
};

export const STRIKE_CATEGORY_LABELS: LabelMap = {
  MISSILE: 'РАКЕТА',
  INTERCEPTION: 'ПЕРЕХВАТ',
  DRONE: 'БПЛА',
  AIRSTRIKE: 'АВИАУДАР',
  ROCKET: 'ОБСТРЕЛ',
  STRIKE: 'УДАР',
  REPORT: 'СВОДКА',
};

export const SEVERITY_LABELS: LabelMap = {
  low: 'НИЗКИЙ',
  medium: 'СРЕДНИЙ',
  high: 'ВЫСОКИЙ',
  critical: 'КРИТИЧНЫЙ',
  LOW: 'НИЗКИЙ',
  MEDIUM: 'СРЕДНИЙ',
  HIGH: 'ВЫСОКИЙ',
  CRITICAL: 'КРИТИЧНЫЙ',
  extreme: 'ЭКСТРЕМАЛЬНЫЙ',
  EXTREME: 'ЭКСТРЕМАЛЬНЫЙ',
};

export const CONFLICT_TYPE_LABELS: LabelMap = {
  STRIKE: 'УДАР',
  DEFENSE: 'ОБОРОНА',
  MILITARY: 'ВОЕННЫЕ',
  DIPLOMATIC: 'ДИПЛОМАТИЯ',
  NUCLEAR: 'ЯДЕРНОЕ',
  DRONE: 'БПЛА',
  REPORT: 'СВОДКА',
};

export const COUNTRY_LABELS: LabelMap = {
  Iran: 'Иран',
  Israel: 'Израиль',
  Iraq: 'Ирак',
  Syria: 'Сирия',
  Lebanon: 'Ливан',
  'Saudi Arabia': 'Саудовская Аравия',
  UAE: 'ОАЭ',
  Qatar: 'Катар',
  Bahrain: 'Бахрейн',
  Jordan: 'Иордания',
  Egypt: 'Египет',
  Turkey: 'Турция',
  Yemen: 'Йемен',
  Oman: 'Оман',
  Kuwait: 'Кувейт',
  'United States': 'США',
  'United Kingdom': 'Великобритания',
  France: 'Франция',
  Germany: 'Германия',
  Italy: 'Италия',
  Spain: 'Испания',
  'NATO/Europe': 'НАТО/Европа',
  'Middle East': 'Ближний Восток',
  Gaza: 'Газа',
};

export const LOCATION_LABELS: LabelMap = {
  ...COUNTRY_LABELS,
  'Arad, Israel': 'Арад, Израиль',
  'Dimona, Israel': 'Димона, Израиль',
  'Tel Aviv, Israel': 'Тель-Авив, Израиль',
  'Haifa, Israel': 'Хайфа, Израиль',
  'Eilat, Israel': 'Эйлат, Израиль',
  'Ashkelon, Israel': 'Ашкелон, Израиль',
  'Ashdod, Israel': 'Ашдод, Израиль',
  'Negev, Israel': 'Негев, Израиль',
  'Natanz, Iran': 'Натанз, Иран',
  'Isfahan, Iran': 'Исфахан, Иран',
  'Tehran, Iran': 'Тегеран, Иран',
  'South Pars, Iran': 'Южный Парс, Иран',
  'Bushehr, Iran': 'Бушер, Иран',
  'Tabriz, Iran': 'Тебриз, Иран',
  'Beirut, Lebanon': 'Бейрут, Ливан',
  'Damascus, Syria': 'Дамаск, Сирия',
  'Baghdad, Iraq': 'Багдад, Ирак',
  'Diego Garcia': 'Диего-Гарсия',
  'Arad': 'Арад',
  'Dimona': 'Димона',
  'Natanz': 'Натанз',
  'Ben Gurion Airport': 'Аэропорт Бен-Гурион',
  'Tel Aviv': 'Тель-Авив',
  'Haifa': 'Хайфа',
  'Beer Sheva': 'Беэр-Шева',
  'Eilat': 'Эйлат',
  'Ashkelon': 'Ашкелон',
  'Ashdod': 'Ашдод',
  'Negev': 'Негев',
  'Sderot': 'Сдерот',
  'Jerusalem': 'Иерусалим',
  'Tehran': 'Тегеран',
  'Isfahan': 'Исфахан',
  'Shiraz': 'Шираз',
  'Tabriz': 'Тебриз',
  'Bandar Abbas': 'Бендер-Аббас',
  'Bushehr': 'Бушер',
  'Kharg Island': 'остров Харк',
  'South Pars': 'Южный Парс',
  'Beirut': 'Бейрут',
  'Litani River': 'река Литани',
  'South Lebanon': 'Южный Ливан',
  'Damascus': 'Дамаск',
  'Baghdad': 'Багдад',
  'Red Sea': 'Красное море',
  'Strait of Hormuz': 'Ормузский пролив',
  'Persian Gulf': 'Персидский залив',
  'Eastern Med': 'Восточное Средиземноморье',
  'Arabian Sea': 'Аравийское море',
  'Doha': 'Доха',
  "Sana'a": 'Сана',
  'Kuwait City': 'Эль-Кувейт',
  'Amman': 'Амман',
  'Cairo': 'Каир',
  'Ankara': 'Анкара',
  'Muscat': 'Маскат',
  'Qatar/Bahrain': 'Катар/Бахрейн',
};

export const FLIGHT_TYPE_LABELS: LabelMap = {
  'RQ-4 Global Hawk (ISR)': 'RQ-4 Global Hawk (разведка)',
  'ISR Drone (UAV)': 'разведывательный БПЛА',
  'High-Alt ISR/Drone': 'высотный развед. БПЛА',
  'Fast Mover': 'высокоскоростной борт',
  'SIGINT/ELINT': 'радиоэлектронная разведка',
  AWACS: 'ДРЛО',
  JSTARS: 'JSTARS',
  'TACAMO (Nuclear C2)': 'TACAMO (ядерное C2)',
  'Hawkeye (AEW)': 'Hawkeye (ДРЛО)',
  'Maritime Patrol': 'морской патруль',
  ISR: 'разведка',
  Bomber: 'бомбардировщик',
  Fighter: 'истребитель',
  'Transport (C-17/C-5)': 'транспорт (C-17/C-5)',
  'Aerial Tanker (KC-135/KC-46)': 'воздушный танкер',
  'Navy P-8/MPA': 'морской патруль P-8',
  'Special Operations': 'спецоперации',
  'CSAR/Rescue': 'поиск и спасение',
  'VIP/Government': 'VIP/правительство',
  'RAF Transport': 'транспорт RAF',
  'Medical Evacuation': 'медэвак',
  'Tactical Transport': 'тактический транспорт',
  'Rotary/Low-Level': 'винтокрылый/маловысотный',
  Military: 'военный',
  'Aerial Tanker': 'воздушный танкер',
  'Strategic Airlift (C-17)': 'стратегический транспорт (C-17)',
  'Strategic Airlift (C-5)': 'стратегический транспорт (C-5)',
  'Strategic Airlift': 'стратегический транспорт',
  'Navy Transport (C-40)': 'транспорт ВМС (C-40)',
  'Tiltrotor (V-22)': 'конвертоплан (V-22)',
  Helicopter: 'вертолет',
  'Fighter (F-35)': 'истребитель (F-35)',
  'Fighter (F-22)': 'истребитель (F-22)',
  'Fighter (F-16)': 'истребитель (F-16)',
  'Fighter (F-15)': 'истребитель (F-15)',
  'Fighter (F/A-18)': 'истребитель (F/A-18)',
  'Fighter (NATO)': 'истребитель (НАТО)',
  'Attack (A-10)': 'штурмовик (A-10)',
  'Heavy Transport': 'тяжелый транспорт',
  'VIP/C2 Transport': 'VIP/C2 транспорт',
  'Navy Aviation': 'авиация ВМС',
  'Military Transport': 'военный транспорт',
  'Military Aircraft': 'военный самолет',
};

export const NAVY_LABELS: LabelMap = {
  'US Navy': 'ВМС США',
  'Royal Navy': 'ВМС Великобритании',
  'French Navy': 'ВМС Франции',
  'Israeli Navy': 'ВМС Израиля',
  'Iran Navy': 'ВМС Ирана',
  'IRGC Navy': 'ВМС КСИР',
  'Saudi Navy': 'ВМС Саудовской Аравии',
  'German Navy': 'ВМС Германии',
  'UAE Navy': 'ВМС ОАЭ',
  'Qatar Navy': 'ВМС Катара',
  'Turkey Navy': 'ВМС Турции',
  'Italy Navy': 'ВМС Италии',
};

export const NAVAL_STATUS_LABELS: LabelMap = {
  Active: 'Активен',
  Deployed: 'Развернут',
  Patrol: 'Патруль',
};

export const NAVAL_REGION_LABELS: LabelMap = {
  'Persian Gulf': 'Персидский залив',
  'Red Sea': 'Красное море',
  'Eastern Med': 'Восточное Средиземноморье',
  'Strait of Hormuz': 'Ормузский пролив',
  'Arabian Sea': 'Аравийское море',
};

export const NAVAL_TYPE_LABELS: LabelMap = {
  'Aircraft Carrier': 'авианосец',
  Destroyer: 'эсминец',
  Cruiser: 'крейсер',
  Frigate: 'фрегат',
  Corvette: 'корвет',
  Submarine: 'подлодка',
  'Guided Missile Submarine': 'ракетная подлодка',
  'Amphibious Assault Ship': 'десантный корабль',
  'Forward Base Ship': 'плавбаза',
  'Fast Attack Craft': 'скоростной ударный катер',
};

export const NAVAL_GROUP_LABELS: LabelMap = {
  '5th Fleet': '5-й флот',
  'Red Sea Task Force': 'оперативная группа в Красном море',
  'Carrier Strike Group': 'авианосная ударная группа',
  CENTCOM: 'CENTCOM',
  'Op Prosperity Guardian': 'операция Prosperity Guardian',
  'IRGCN Patrol': 'патруль КСИР',
};

export const COMMODITY_TYPE_LABELS: LabelMap = {
  crude_wti: 'WTI',
  crude_brent: 'Brent',
  natural_gas: 'природный газ',
  heating_oil: 'печное топливо',
  gasoline: 'бензин',
};

export const ENERGY_NAME_LABELS: LabelMap = {
  'WTI Crude Oil': 'Нефть WTI',
  'Brent Crude': 'Нефть Brent',
  'Natural Gas': 'Природный газ',
  'Heating Oil': 'Печное топливо',
  'RBOB Gasoline': 'Бензин RBOB',
};

export const MARKET_NAME_LABELS: LabelMap = {
  'S&P 500': 'Индекс S&P 500',
  'Dow Jones': 'Индекс Dow Jones',
  'VIX (Fear Index)': 'VIX (индекс страха)',
  Gold: 'Золото',
  'US Dollar Index': 'Индекс доллара США',
};

export const CRYPTO_NAME_LABELS: LabelMap = {
  Bitcoin: 'Биткоин',
  Ethereum: 'Эфириум',
  Solana: 'Солана',
  BNB: 'BNB',
};

export const INTENSITY_LABELS: LabelMap = {
  low: 'НИЗКАЯ',
  medium: 'СРЕДНЯЯ',
  high: 'ВЫСОКАЯ',
  extreme: 'ЭКСТРЕМАЛЬНАЯ',
};

export function getDisplayLabel(value: string | null | undefined, labels: LabelMap): string {
  if (!value) return '';
  return labels[value] || value;
}

export function formatLocationLabel(value: string | null | undefined): string {
  if (!value) return '';
  if (LOCATION_LABELS[value]) return LOCATION_LABELS[value];

  return value
    .split(COMPOSITE_SPLIT_RE)
    .map(part => {
      const trimmed = part.trim();
      if (!trimmed) return part;
      return LOCATION_LABELS[trimmed] || part;
    })
    .join('');
}
