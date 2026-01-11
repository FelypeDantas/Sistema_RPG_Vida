import { AvatarCard } from "@/components/rpg/AvatarCard";
import { QuestList } from "@/components/rpg/QuestList";
import { usePlayerState } from "@/hooks/usePlayerState";

export default function Dashboard() {
  const { state, completeMission } = usePlayerState();

  const xpProgress =
    (state.player.currentXP / state.player.nextLevelXP) * 100;

  return (
    <div className="space-y-6">
      {/* Card do Player */}
      <AvatarCard
        player={state.player}
        xpProgress={xpProgress}
      />

      {/* Quests */}
      <div className="rounded-xl border bg-background p-4 card-missoes">
        <h3 className="text-lg font-semibold mb-4">
          Quests do Dia
        </h3>

        <QuestList
          quests={state.quests}
          onComplete={completeMission}
        />

      </div>
    </div>
  );
}
