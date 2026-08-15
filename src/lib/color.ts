/**
 * Utilitário de acessibilidade de cor — SPEC secao 9: "Contraste WCAG AA
 * mínimo em todos os pares."
 *
 * Os 31 quizzes trazem uma cor de detalhe própria (`quiz.color`) e cada
 * categoria também (`CategoryInfo.color`), preservadas como estão (dados
 * não são reescritos nesta rodada). Algumas dessas cores legadas (ex.:
 * "#FFD700", "#F59E0B") são claras demais para servir de cor de texto ou
 * ícone sobre fundos claros — abaixo de 4.5:1 contra branco.
 *
 * Esta função escurece deterministicamente (mistura com preto) apenas as
 * cores que já falhariam o contraste, e devolve a cor original sem
 * alteração quando ela já é segura. Usada sempre que uma cor de
 * categoria/quiz é aplicada como `color` (texto ou ícone) — nunca quando é
 * usada como background tintado (nesses casos o texto por cima já usa um
 * token fixo e seguro, como --color-ink ou --color-brand-dark).
 */

interface RGB {
  r: number;
  g: number;
  b: number;
}

function hexToRgb(hex: string): RGB {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

function rgbToHex({ r, g, b }: RGB): string {
  const toHex = (n: number) =>
    Math.round(Math.min(255, Math.max(0, n)))
      .toString(16)
      .padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function channelLuminance(c: number): number {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

function relativeLuminance({ r, g, b }: RGB): number {
  return (
    0.2126 * channelLuminance(r) +
    0.7152 * channelLuminance(g) +
    0.0722 * channelLuminance(b)
  );
}

function contrastRatio(a: RGB, b: RGB): number {
  const l1 = relativeLuminance(a);
  const l2 = relativeLuminance(b);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function mixWithBlack(rgb: RGB, t: number): RGB {
  return {
    r: rgb.r * (1 - t),
    g: rgb.g * (1 - t),
    b: rgb.b * (1 - t),
  };
}

const WHITE: RGB = { r: 255, g: 255, b: 255 };
const MIN_CONTRAST = 4.5;

const cache = new Map<string, string>();

/**
 * Devolve uma versão da cor segura para uso como texto/ícone sobre fundo
 * claro (branco/quase-branco), garantindo >= 4.5:1 de contraste (WCAG AA).
 * Cores que já atendem o mínimo são retornadas sem alteração.
 */
export function accessibleForeground(hex: string): string {
  const cached = cache.get(hex);
  if (cached) return cached;

  let rgb: RGB;
  try {
    rgb = hexToRgb(hex);
  } catch {
    return hex;
  }

  let t = 0;
  let current = rgb;
  while (contrastRatio(current, WHITE) < MIN_CONTRAST && t < 0.85) {
    t += 0.08;
    current = mixWithBlack(rgb, t);
  }

  const result = t === 0 ? hex : rgbToHex(current);
  cache.set(hex, result);
  return result;
}
