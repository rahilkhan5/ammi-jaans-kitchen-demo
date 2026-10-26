// Shared helpers for the build and for the browser scripts.

const FRACTIONS = [
  [0, ''],
  [0.25, '¼'],
  [1 / 3, '⅓'],
  [0.5, '½'],
  [2 / 3, '⅔'],
  [0.75, '¾'],
  [1, ''],
];

// Rounds a scaled amount the way a cook measures it: grams to 5, big counts
// to whole numbers, spoons and cups to quarters or thirds.
export function roundAmount(q, unit) {
  if (unit === 'g' || unit === 'ml') return q >= 50 ? Math.round(q / 5) * 5 : Math.round(q);
  if (q >= 10) return Math.round(q);
  return q;
}

export function formatAmount(q, unit = '') {
  if (q == null) return '';
  const value = roundAmount(q, unit);
  if (unit === 'g' || unit === 'ml' || value >= 10) return String(Math.round(value));
  let whole = Math.floor(value);
  const rest = value - whole;
  let best = FRACTIONS[0];
  for (const f of FRACTIONS) if (Math.abs(rest - f[0]) < Math.abs(rest - best[0])) best = f;
  if (best[0] === 1) {
    whole += 1;
    best = FRACTIONS[0];
  }
  if (whole === 0 && !best[1]) return value > 0 ? '¼' : '0';
  return `${whole || ''}${best[1]}`;
}

const PLURAL = { cup: 'cups', clove: 'cloves', stick: 'sticks', glass: 'glasses' };

export function formatUnit(q, unit = '') {
  if (!unit) return '';
  const single = unit === 'cups' ? 'cup' : unit;
  if (q != null && q > 1 && PLURAL[single]) return PLURAL[single];
  return single;
}

export function minutes(total) {
  if (total < 60) return `${total} min`;
  const h = Math.floor(total / 60);
  const m = total % 60;
  return m ? `${h} hr ${m} min` : `${h} hr`;
}

export function longDate(iso) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

// The last word of a title sits on the category bar: "Chicken <Karahi>".
export function splitTitle(title) {
  const i = title.lastIndexOf(' ');
  return i === -1 ? ['', title] : [title.slice(0, i), title.slice(i + 1)];
}
