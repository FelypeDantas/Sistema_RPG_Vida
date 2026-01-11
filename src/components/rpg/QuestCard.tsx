import { Check, Flame, Zap } from "lucide-react";

export interface Quest {
  title: string;
  xp: number;
  attribute: string;
  completed: boolean;
  streak: number;
}

interface QuestCardProps {
  quest: Quest;
  onComplete: () => void;
}

const attributeColors: Record<string, string> = {
  "Físico": "bg-red-100 text-red-600",
  "Mente": "bg-blue-100 text-blue-600",
  "Social": "bg-purple-100 text-purple-600",
  "Finanças": "bg-green-100 text-green-600"
};

export const QuestCard = ({ quest, onComplete }: QuestCardProps) => {
  return (
    <div
      onClick={onComplete}
      className={`
        p-4 rounded-xl border cursor-pointer transition
        ${quest.completed ? "bg-green-100 border-green-300" : "bg-background hover:bg-muted"}
      `}
    >
      <div className="flex justify-between items-start">
        <div>
          <h4 className={`font-medium ${quest.completed && "line-through text-muted-foreground"}`}>
            {quest.title}
          </h4>

          <div className="flex gap-2 mt-1">
            <span className={`text-xs px-2 py-0.5 rounded ${attributeColors[quest.attribute]}`}>
              {quest.attribute}
            </span>

            {quest.streak > 0 && (
              <span className="flex items-center gap-1 text-xs text-orange-500">
                <Flame className="w-3 h-3" />
                {quest.streak}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1 text-cyan-600 font-bold">
          <Zap className="w-4 h-4" />
          +{quest.xp}
        </div>
      </div>

      {quest.completed && (
        <div className="flex items-center gap-1 mt-2 text-green-600 text-xs">
          <Check className="w-3 h-3" />
          Concluída
        </div>
      )}
    </div>
  );
};
