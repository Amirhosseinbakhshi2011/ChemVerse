export type AtomType = "H" | "C" | "O" | "N" | "Cl" | "S";

export interface Atom {
  element: AtomType;
  position: [number, number, number];
}

export interface Bond {
  from: number;
  to: number;
}

export interface Molecule {
  id: string;
  name: string;
  formula: string;
  description: string;
  atoms: Atom[];
  bonds: Bond[];
}

// Approximate colors for elements (CPK coloring)
export const ELEMENT_COLORS: Record<AtomType, string> = {
  H: "#ffffff",
  C: "#333333",
  O: "#ff2200",
  N: "#3050f8",
  Cl: "#1ff01f",
  S: "#ffff30",
};

export const ELEMENT_RADIUS: Record<AtomType, number> = {
  H: 0.35,
  C: 0.55,
  O: 0.52,
  N: 0.5,
  Cl: 0.7,
  S: 0.7,
};

export const MOLECULES: Molecule[] = [
  {
    id: "water",
    name: "آب",
    formula: "H₂O",
    description: "مولکول حیات — زاویه پیوند حدود ۱۰۴.۵ درجه",
    atoms: [
      { element: "O", position: [0, 0, 0] },
      { element: "H", position: [0.96, 0.0, 0] },
      { element: "H", position: [-0.24, 0.93, 0] },
    ],
    bonds: [
      { from: 0, to: 1 },
      { from: 0, to: 2 },
    ],
  },
  {
    id: "co2",
    name: "دی‌اکسید کربن",
    formula: "CO₂",
    description: "مولکول خطی — گاز گلخانه‌ای مهم",
    atoms: [
      { element: "C", position: [0, 0, 0] },
      { element: "O", position: [1.16, 0, 0] },
      { element: "O", position: [-1.16, 0, 0] },
    ],
    bonds: [
      { from: 0, to: 1 },
      { from: 0, to: 2 },
    ],
  },
  {
    id: "methane",
    name: "متان",
    formula: "CH₄",
    description: "ساده‌ترین هیدروکربن — ساختار چهاروجهی",
    atoms: [
      { element: "C", position: [0, 0, 0] },
      { element: "H", position: [0.63, 0.63, 0.63] },
      { element: "H", position: [-0.63, -0.63, 0.63] },
      { element: "H", position: [-0.63, 0.63, -0.63] },
      { element: "H", position: [0.63, -0.63, -0.63] },
    ],
    bonds: [
      { from: 0, to: 1 },
      { from: 0, to: 2 },
      { from: 0, to: 3 },
      { from: 0, to: 4 },
    ],
  },
  {
    id: "ammonia",
    name: "آمونیاک",
    formula: "NH₃",
    description: "مولکول هرمی شکل — پایه بسیاری از کودها",
    atoms: [
      { element: "N", position: [0, 0.2, 0] },
      { element: "H", position: [0.94, -0.2, 0] },
      { element: "H", position: [-0.47, -0.2, 0.82] },
      { element: "H", position: [-0.47, -0.2, -0.82] },
    ],
    bonds: [
      { from: 0, to: 1 },
      { from: 0, to: 2 },
      { from: 0, to: 3 },
    ],
  },
  {
    id: "ethanol",
    name: "اتانول",
    formula: "C₂H₅OH",
    description: "الکل معمولی — حلال و سوخت زیستی",
    atoms: [
      { element: "C", position: [-0.8, 0, 0] },
      { element: "C", position: [0.7, 0, 0] },
      { element: "O", position: [1.5, 1.1, 0] },
      { element: "H", position: [-1.2, 1.0, 0] },
      { element: "H", position: [-1.2, -0.5, 0.9] },
      { element: "H", position: [-1.2, -0.5, -0.9] },
      { element: "H", position: [1.1, -0.5, 0.9] },
      { element: "H", position: [1.1, -0.5, -0.9] },
      { element: "H", position: [2.4, 1.0, 0] },
    ],
    bonds: [
      { from: 0, to: 1 },
      { from: 1, to: 2 },
      { from: 0, to: 3 },
      { from: 0, to: 4 },
      { from: 0, to: 5 },
      { from: 1, to: 6 },
      { from: 1, to: 7 },
      { from: 2, to: 8 },
    ],
  },
  {
    id: "benzene",
    name: "بنزن",
    formula: "C₆H₆",
    description: "حلقه آروماتیک معروف — پایه بسیاری از ترکیبات آلی",
    atoms: [
      { element: "C", position: [1.2, 0, 0] },
      { element: "C", position: [0.6, 1.04, 0] },
      { element: "C", position: [-0.6, 1.04, 0] },
      { element: "C", position: [-1.2, 0, 0] },
      { element: "C", position: [-0.6, -1.04, 0] },
      { element: "C", position: [0.6, -1.04, 0] },
      { element: "H", position: [2.15, 0, 0] },
      { element: "H", position: [1.07, 1.86, 0] },
      { element: "H", position: [-1.07, 1.86, 0] },
      { element: "H", position: [-2.15, 0, 0] },
      { element: "H", position: [-1.07, -1.86, 0] },
      { element: "H", position: [1.07, -1.86, 0] },
    ],
    bonds: [
      { from: 0, to: 1 },
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 4 },
      { from: 4, to: 5 },
      { from: 5, to: 0 },
      { from: 0, to: 6 },
      { from: 1, to: 7 },
      { from: 2, to: 8 },
      { from: 3, to: 9 },
      { from: 4, to: 10 },
      { from: 5, to: 11 },
    ],
  },
];