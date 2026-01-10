export const initialState = {
  player: {
    name: "Player One",
    title: "Cyber Warrior",
    level: 12,
    currentXP: 2450,
    nextLevelXP: 3000,
    totalXP: 15450,
    rank: "Silver II",
    avatar: "🧑‍💻"
  },

  missions: [
    { id: 1, title: "Treino Matinal", tag: "fisico", xp: 50, done: true },
    { id: 2, title: "Ler 30 minutos", tag: "mente", xp: 30, done: true },
    { id: 3, title: "Meditar 10 min", tag: "mente", xp: 25, done: false },
    { id: 4, title: "Estudar 1h", tag: "mente", xp: 75, done: false }
  ],

  attributes: {
    fisico: 68,
    mente: 85,
    social: 52,
    financas: 74
  }
};
