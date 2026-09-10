export interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  icon: "flame" | "wine" | "heart";
}

export const experienceItems: ExperienceItem[] = [
  {
    id: "lezzet",
    title: "Lezzet",
    description:
      "Kemalpaşa’da ızgara, kebap ve pide: doğru ateş ve doğru zamanlama ile gerçek et lezzeti.",
    icon: "flame",
  },
  {
    id: "atmosfer",
    title: "Atmosfer",
    description:
      "İzmir Kemalpaşa’da aile sofraları, yol molası ve özel günler için samimi bir restoran.",
    icon: "wine",
  },
  {
    id: "misafir",
    title: "Misafirperverlik",
    description:
      "Kemalpaşa’daki soframızda her masada özen, her serviste dikkat.",
    icon: "heart",
  },
];
