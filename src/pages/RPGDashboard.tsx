import { usePlayerState } from "@/hooks/usePlayerState";
import { AvatarCard } from "@/components/rpg/AvatarCard";
import { QuestList } from "@/components/rpg/QuestCard";

export default function Dashboard() {
  const { state, completeMission } = usePlayerState();

  const xpProgress =
    (state.player.currentXP / state.player.nextLevelXP) * 100;

  return (
    <main className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <AvatarCard
        player={state.player}
        xpProgress={xpProgress}
      />

      <QuestList
        quests={state.quests}
        onComplete={completeMission}
      />
    </main>
  );
}
