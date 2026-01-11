import { QuestCard } from "@/components/rpg/QuestCard";

interface Quest {
  title: string;
  xp: number;
  attribute: string;
  completed: boolean;
  streak: number;
}

interface QuestListProps {
  quests: Quest[];
  onComplete: (index: number) => void;
}

export const QuestList = ({ quests, onComplete }: QuestListProps) => {
  return (
    <>
      {quests.map((quest, index) => (
        <QuestCard
          key={index}
          quest={quest}
          onToggle={() => onComplete(index)}
        />
      ))}
    </>
  );
};
