import { useEffect, useState } from "react";
import { initialState } from "@/data/initialState";

export function usePlayerState() {
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem("lifeRPG");
    return saved ? JSON.parse(saved) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("lifeRPG", JSON.stringify(state));
  }, [state]);

  function completeMission(id: number) {
    setState(prev => {
      const quest = prev.quests.find(q => q.id === id);
      if (!quest || quest.completed) return prev;

      let newXP = prev.player.currentXP + quest.xp;
      let newLevel = prev.player.level;
      let nextXP = prev.player.nextLevelXP;

      if (newXP >= nextXP) {
        newLevel++;
        newXP = newXP - nextXP;
        nextXP += 500;
      }

      return {
        ...prev,
        quests: prev.quests.map(q =>
          q.id === id ? { ...q, completed: true, streak: q.streak + 1 } : q
        ),
        player: {
          ...prev.player,
          currentXP: newXP,
          totalXP: prev.player.totalXP + quest.xp,
          level: newLevel,
          nextLevelXP: nextXP
        },
        attributes: {
          ...prev.attributes,
          [quest.attribute]:
            prev.attributes[quest.attribute] + Math.floor(quest.xp / 10)
        }
      };
    });
  }

  return { state, completeMission };
}
