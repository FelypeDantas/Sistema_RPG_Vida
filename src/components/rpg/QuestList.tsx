import { Quest, QuestCard } from "./QuestCard";

interface QuestListProps {
  quests: Quest[];
  onComplete: (index: number) => void;
}

export const QuestList = ({ quests, onComplete }: QuestListProps) => {
  return (
    <div className="space-y-3">
      {quests.map((quest, index) => (
        <QuestCard
          key={index}
          quest={quest}
          onComplete={() => onComplete(index)}
        />
      ))}
    </div>
  );
};
