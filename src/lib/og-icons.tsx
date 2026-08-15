/**
 * Ícones SVG estáticos (sem dependência de lucide-react em runtime) para uso
 * dentro de `ImageResponse` (next/og), que renderiza via Satori e não pode
 * importar componentes React "normais" com toda a árvore de módulos do
 * lucide-react. Os paths abaixo são copiados diretamente dos ícones
 * lucide-react equivalentes (mesmo viewBox 24x24, mesmo traçado), então o
 * resultado visual é idêntico ao restante do site — apenas sem emoji como
 * substituto de ícone/logo/badge em metadata e imagens sociais (SPEC QA
 * final, item 9).
 */

type OgIconProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
};

const baseProps = (
  size: number,
  color: string,
  strokeWidth: number
) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function PuzzleOgIcon({ size = 24, color = "currentColor", strokeWidth = 2 }: OgIconProps) {
  return (
    <svg {...baseProps(size, color, strokeWidth)}>
      <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" />
    </svg>
  );
}

export function TrophyOgIcon({ size = 24, color = "currentColor", strokeWidth = 2 }: OgIconProps) {
  return (
    <svg {...baseProps(size, color, strokeWidth)}>
      <path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2" />
      <path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2" />
      <path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3" />
      <path d="M4 22h16" />
      <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
      <path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3" />
    </svg>
  );
}

export function BrainOgIcon({ size = 24, color = "currentColor", strokeWidth = 2 }: OgIconProps) {
  return (
    <svg {...baseProps(size, color, strokeWidth)}>
      <path d="M12 18V5" />
      <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
      <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
      <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
      <path d="M18 18a4 4 0 0 0 2-7.464" />
      <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
      <path d="M6 18a4 4 0 0 1-2-7.464" />
      <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
    </svg>
  );
}

export function BriefcaseOgIcon({ size = 24, color = "currentColor", strokeWidth = 2 }: OgIconProps) {
  return (
    <svg {...baseProps(size, color, strokeWidth)}>
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

export function DumbbellOgIcon({ size = 24, color = "currentColor", strokeWidth = 2 }: OgIconProps) {
  return (
    <svg {...baseProps(size, color, strokeWidth)}>
      <path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z" />
      <path d="m2.5 21.5 1.4-1.4" />
      <path d="m20.1 3.9 1.4-1.4" />
      <path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z" />
      <path d="m9.6 14.4 4.8-4.8" />
    </svg>
  );
}

export function ClapperboardOgIcon({ size = 24, color = "currentColor", strokeWidth = 2 }: OgIconProps) {
  return (
    <svg {...baseProps(size, color, strokeWidth)}>
      <path d="m12.296 3.464 3.02 3.956" />
      <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z" />
      <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="m6.18 5.276 3.1 3.899" />
    </svg>
  );
}

export function BookOpenOgIcon({ size = 24, color = "currentColor", strokeWidth = 2 }: OgIconProps) {
  return (
    <svg {...baseProps(size, color, strokeWidth)}>
      <path d="M12 5v16" />
      <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />
    </svg>
  );
}

/** Mesmo mapeamento categoria -> icone de src/lib/icons.tsx (CategoryIcon), em versão satori-safe. */
export function CategoryOgIcon({
  category,
  ...props
}: OgIconProps & { category: string }) {
  switch (category) {
    case "copa-do-mundo":
      return <TrophyOgIcon {...props} />;
    case "personalidade":
      return <BrainOgIcon {...props} />;
    case "series-filmes":
      return <ClapperboardOgIcon {...props} />;
    case "conhecimentos-gerais":
      return <BookOpenOgIcon {...props} />;
    case "esportes":
      return <DumbbellOgIcon {...props} />;
    case "carreira":
      return <BriefcaseOgIcon {...props} />;
    default:
      return <BookOpenOgIcon {...props} />;
  }
}
