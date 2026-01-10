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
      const mission = prev.missions.find(m => m.id === id);
      if (!mission || mission.done) return prev;

      let newXP = prev.player.currentXP + mission.xp;
      let newLevel = prev.player.level;
      let nextXP = prev.player.nextLevelXP;

      if (newXP >= nextXP) {
        newLevel++;
        newXP = newXP - nextXP;
        nextXP += 500;
      }

      return {
        ...prev,
        missions: prev.missions.map(m =>
          m.id === id ? { ...m, done: true } : m
        ),
        player: {
          ...prev.player,
          currentXP: newXP,
          totalXP: prev.player.totalXP + mission.xp,
          level: newLevel,
          nextLevelXP: nextXP
        },
        attributes: {
          ...prev.attributes,
          [mission.tag]:
            prev.attributes[mission.tag] + Math.floor(mission.xp / 10)
        }
      };
    });
  }

  return { state, completeMission };
}
