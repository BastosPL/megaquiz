interface AffiliateLink {
  url: string;
  label: string;
  price?: string;
}

type AffiliateMap = Record<string, Record<string, AffiliateLink>>;

const SHOPEE_BRASIL: AffiliateLink = {
  url: "https://s.shopee.com.br/8ATfTU5DPG",
  label: "Camiseta do Brasil 2026",
  price: "R$207",
};

const SHOPEE_ARGENTINA: AffiliateLink = {
  url: "https://s.shopee.com.br/AKYA3YdUiW",
  label: "Camiseta da Argentina 2026",
  price: "R$275",
};

const SHOPEE_FRANCA: AffiliateLink = {
  url: "https://s.shopee.com.br/2qS97rPTWb",
  label: "Camiseta da Franca 2026",
  price: "R$70",
};

const SHOPEE_PORTUGAL: AffiliateLink = {
  url: "https://s.shopee.com.br/902mTGzymp",
  label: "Camiseta de Portugal 2026",
  price: "R$405",
};

const SHOPEE_NORUEGA: AffiliateLink = {
  url: "https://s.shopee.com.br/3LOPivJJkt",
  label: "Camiseta da Noruega 2026",
  price: "R$70",
};

const SHOPEE_INGLATERRA: AffiliateLink = {
  url: "https://s.shopee.com.br/3qKgJuUALI",
  label: "Camiseta da Inglaterra 2026",
  price: "R$78",
};

const SHOPEE_CROACIA: AffiliateLink = {
  url: "https://s.shopee.com.br/1LdLLMGGbx",
  label: "Camiseta da Croacia",
  price: "R$85",
};

const affiliateMap: AffiliateMap = {
  "qual-jogador-copa-2026": {
    vini: SHOPEE_BRASIL,
    neymar: SHOPEE_BRASIL,
    endrick: SHOPEE_BRASIL,
    messi: SHOPEE_ARGENTINA,
    mbappe: SHOPEE_FRANCA,
    cr7: SHOPEE_PORTUGAL,
    haaland: SHOPEE_NORUEGA,
    bellingham: SHOPEE_INGLATERRA,
    modric: SHOPEE_CROACIA,
  },
  "qual-artilheiro-historico": {
    pele: SHOPEE_BRASIL,
    romario: SHOPEE_BRASIL,
    ronaldo: SHOPEE_BRASIL,
    marta: SHOPEE_BRASIL,
  },
};

export function getAffiliateLink(
  quizId: string,
  profileId: string,
): AffiliateLink | null {
  return affiliateMap[quizId]?.[profileId] ?? null;
}
