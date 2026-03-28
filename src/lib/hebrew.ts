import CITY_DATA from '../data/city-data.json';

// Hebrew translations for Pikud HaOref alert terms
// The alert system uses a fixed vocabulary so a dictionary works perfectly

type TranslationTarget = 'en' | 'ru';

// Threat type translations
const THREAT_TRANSLATIONS_EN: Record<string, string> = {
  // Missile threats
  'ירי רקטות וטילים': 'Rocket and Missile Fire',
  'ירי רקטות': 'Rocket Fire',
  'ירי טילים': 'Missile Fire',
  'טיל בליסטי': 'Ballistic Missile',
  'טילים': 'Missiles',
  'רקטות': 'Rockets',

  // Drone/UAV threats
  'חדירת כלי טיס עוין': 'Hostile Aircraft Intrusion',
  'חדירת כטבם': 'UAV Intrusion',
  'כלי טיס עוין': 'Hostile Aircraft',
  'כטבם': 'UAV/Drone',
  'כטב"ם': 'UAV/Drone',

  // Ground threats
  'חדירת מחבלים': 'Terrorist Infiltration',
  'חדירה': 'Infiltration',

  // Other threats
  'רעידת אדמה': 'Earthquake',
  'צונמי': 'Tsunami',
  'חומרים מסוכנים': 'Hazardous Materials',
  'אירוע חומרים מסוכנים': 'Hazmat Incident',
  'אירוע רדיולוגי': 'Radiological Event',
  'התרעה': 'Alert',
  'התרעת צבע אדום': 'Red Alert Warning',
  'צבע אדום': 'Red Alert',

  // Instructions
  'היכנסו למרחב המוגן': 'Enter Protected Space',
  'היכנסו למבנה': 'Enter Building',

  // Military/weapon terms for partial matching
  'טיל': 'Missile',
  'מטוס': 'Aircraft',
  'מסוק': 'Helicopter',
  'מל"ט': 'Drone',
  'רחפן': 'Drone',
};

const THREAT_TRANSLATIONS_RU: Record<string, string> = {
  // Missile threats
  'ירי רקטות וטילים': 'Ракетно-ракетный обстрел',
  'ירי רקטות': 'Ракетный обстрел',
  'ירי טילים': 'Ракетный удар',
  'טיל בליסטי': 'Баллистическая ракета',
  'טילים': 'Ракеты',
  'רקטות': 'Ракеты',

  // Drone/UAV threats
  'חדירת כלי טיס עוין': 'Проникновение вражеского летательного аппарата',
  'חדירת כטבם': 'Проникновение БПЛА',
  'כלי טיס עוין': 'Вражеский летательный аппарат',
  'כטבם': 'БПЛА/дрон',
  'כטב"ם': 'БПЛА/дрон',

  // Ground threats
  'חדירת מחבלים': 'Проникновение террористов',
  'חדירה': 'Проникновение',

  // Other threats
  'רעידת אדמה': 'Землетрясение',
  'צונמי': 'Цунами',
  'חומרים מסוכנים': 'Опасные вещества',
  'אירוע חומרים מסוכנים': 'Инцидент с опасными веществами',
  'אירוע רדיולוגי': 'Радиологическое событие',
  'התרעה': 'Тревога',
  'התרעת צבע אדום': 'Предупреждение "Цева Адом"',
  'צבע אדום': 'Цева Адом',

  // Instructions
  'היכנסו למרחב המוגן': 'Перейдите в защищенное помещение',
  'היכנסו למבנה': 'Зайдите в здание',

  // Military/weapon terms for partial matching
  'טיל': 'Ракета',
  'מטוס': 'Самолет',
  'מסוק': 'Вертолет',
  'מל"ט': 'Дрон',
  'רחפן': 'Дрон',
};

// Israeli locality translations - 1,266 official localities from Israel CBS (data.gov.il)
// plus custom additions for regions, alert-specific terms, and alternate spellings
export const CITY_TRANSLATIONS: Record<string, string> = CITY_DATA;

/**
 * Translate a Hebrew string using the lookup tables.
 * Falls back to the original string if no translation is found.
 */
export function translateHebrew(text: string, target: TranslationTarget = 'en'): string {
  if (!text) return text;
  const threatTranslations = target === 'ru' ? THREAT_TRANSLATIONS_RU : THREAT_TRANSLATIONS_EN;

  // Check for exact match in threat translations
  if (threatTranslations[text]) return threatTranslations[text];

  // Check for exact match in city translations
  if (CITY_TRANSLATIONS[text]) return CITY_TRANSLATIONS[text];

  // Try partial matching - replace known Hebrew terms within the string
  let translated = text;
  for (const [heb, replacement] of Object.entries(threatTranslations)) {
    if (translated.includes(heb)) {
      translated = translated.replace(heb, replacement);
    }
  }
  for (const [heb, eng] of Object.entries(CITY_TRANSLATIONS)) {
    if (translated.includes(heb)) {
      translated = translated.replace(heb, eng);
    }
  }

  return translated;
}

/**
 * Translate an array of Hebrew city names to English
 */
export function translateCities(cities: string[]): string[] {
  return cities.map(city => CITY_TRANSLATIONS[city.trim()] || translateHebrew(city.trim()));
}

/**
 * Detect if a string contains Hebrew characters
 */
export function isHebrew(text: string): boolean {
  return /[\u0590-\u05FF]/.test(text);
}

/**
 * Translate free-form text using Google Translate (free, no key)
 * Supports auto-detection of Hebrew, Arabic, Farsi
 * Falls back to original text on failure
 */
const FREE_TEXT_TRANSLATION_CACHE: Record<string, string> = {};

export async function translateFreeText(text: string, target: TranslationTarget = 'en'): Promise<string> {
  if (!text) return text;
  const cacheKey = `${target}:${text}`;
  if (FREE_TEXT_TRANSLATION_CACHE[cacheKey]) return FREE_TEXT_TRANSLATION_CACHE[cacheKey];

  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${target}&dt=t&q=${encodeURIComponent(text)}`;

    const res = await fetch(url, {
      signal: AbortSignal.timeout(3000),
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
    });

    if (!res.ok) return text;

    const data = await res.json();
    const translated = (data[0] as [string][]).map((part: [string]) => part[0]).join('');
    const result = translated || text;
    FREE_TEXT_TRANSLATION_CACHE[cacheKey] = result;
    return result;
  } catch {
    return text;
  }
}

/**
 * Batch translate multiple strings to the selected target language
 */
export async function translateBatch(texts: string[], target: TranslationTarget = 'en'): Promise<string[]> {
  const results: string[] = new Array(texts.length);
  const batchSize = 8;

  for (let i = 0; i < texts.length; i += batchSize) {
    const chunk = texts.slice(i, i + batchSize);
    const chunkResults = await Promise.allSettled(
      chunk.map(t => translateFreeText(t, target))
    );

    chunkResults.forEach((result, index) => {
      const originalIndex = i + index;
      results[originalIndex] = result.status === 'fulfilled' ? result.value : texts[originalIndex];
    });
  }

  return results;
}
