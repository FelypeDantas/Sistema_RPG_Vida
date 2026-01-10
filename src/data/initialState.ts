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

  quests: [
    {
      id: 1,
      title: "Treino Matinal",
      xp: 50,
      attribute: "Físico",
      completed: true,
      streak: 3
    },
    {
      id: 2,
      title: "Ler 30 minutos",
      xp: 30,
      attribute: "Mente",
      completed: true,
      streak: 5
    },
    {
      id: 3,
      title: "Meditar 10 min",
      xp: 25,
      attribute: "Mente",
      completed: false,
      streak: 0
    },
    {
      id: 4,
      title: "Estudar 1h",
      xp: 75,
      attribute: "Mente",
      completed: false,
      streak: 0
    }
  ],

  attributes: {
    Físico: 68,
    Mente: 85,
    Social: 52,
    Finanças: 74
  }
};
