import { QuestCard } from "./QuestCard";

interface Quest {
  id: number;
  title: string;
  xp: number;
  attribute: string;
  completed: boolean;
  streak: number;
}

interface QuestListProps {
  quests: Quest[];
  onComplete: (id: number) => void;
}

export const QuestList = ({ quests, onComplete }: QuestListProps) => {
  return (
    <div className="space-y-3">
      {quests.map(q => (
        <QuestCard
          key={q.id}
          quest={q}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
};
