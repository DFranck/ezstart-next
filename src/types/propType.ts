// src/types/propType.ts

export const propTypesMap: { [key: string]: any } = {
  Nav: [
    {
      name: "t",
      type: "string",
      description: "Clé de traduction",
      default: "undefined",
    },
    {
      name: "render",
      type: "string",
      description: "Clé pour afficher un tableau ou un objet de liens",
      default: "undefined",
    },
    {
      name: "root",
      type: "number[]",
      description: "Indices racine (applicable uniquement si d est un tableau)",
      default: "[]",
    },
    {
      name: "links",
      type: "string[] | { [key: string]: string }",
      description: "Tableau ou objet de liens directs",
      default: "[]",
    },
    {
      name: "path",
      type: "string",
      description: "Chemin de base pour les liens non-racine",
      default: "''",
    },
    {
      name: "active",
      type: "boolean",
      description: "Applique des styles actifs en fonction du chemin actuel",
      default: "false",
    },
    {
      name: "navClass",
      type: "string",
      description: "Classe personnalisée pour le nav",
      default: "''",
    },
    {
      name: "ulClass",
      type: "string",
      description: "Classe personnalisée pour le ul",
      default: "''",
    },
    {
      name: "liClass",
      type: "string",
      description: "Classe personnalisée pour le li",
      default: "''",
    },
    {
      name: "variant",
      type: "string",
      description: "Variante de lien",
      default: "'default'",
      options: ["default", "primary", "secondary"],
    },
    {
      name: "anchorLinks",
      type: "boolean",
      description: "Utilise des liens d'ancrage si vrai",
      default: "false",
    },
    {
      name: "pos",
      type: "string",
      description: "Position",
      default: "'default'",
      options: ["default", "fixed"],
    },
    {
      name: "dir",
      type: "string",
      description: "Direction de navigation",
      default: "'row'",
      options: ["row", "col"],
    },
    {
      name: "setIsOpen",
      type: "function",
      description: "Fonction pour définir l'état ouvert",
      default: "undefined",
    },
  ],
  // Ajoutez d'autres composants ici si nécessaire
};

export const defaultPropsMap: { [key: string]: any } = {
  Nav: {
    t: "someTranslationKey",
    links: ["Home", "About", "Contact"],
    dir: "row",
  },
  // Ajoutez d'autres composants ici si nécessaire
};
