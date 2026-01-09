import { 
  TrendingUp, 
  TrendingDown, 
  PiggyBank, 
  Wallet,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { Header } from "@/components/dashboard/Header";
import { StatCard } from "@/components/dashboard/StatCard";
import { ProgressCard } from "@/components/dashboard/ProgressCard";
import { TransactionItem } from "@/components/dashboard/TransactionItem";
import { InvestmentCard } from "@/components/dashboard/InvestmentCard";
import { SummaryCard } from "@/components/dashboard/SummaryCard";
import { CategoryChart } from "@/components/dashboard/CategoryChart";

// Dados da planilha
const incomeData = [
  { date: "15/12/25", source: "Salário", category: "Fixa", value: "R$ 109,38" },
  { date: "20/12/25", source: "Moedas", category: "Extra", value: "R$ 8,00" },
];

const expenseData = [
  { date: "18/12/25", description: "Sorvete com amigos", category: "Lazer", value: "R$ 30,00" },
];

const investmentData = [
  { 
    date: "21/12/25", 
    type: "Poupança", 
    institution: "CAIXA", 
    investedValue: "R$ 16.000,00", 
    currentValue: "R$ 16.053,00", 
    profitability: 0 
  },
  { 
    date: "15/12/25", 
    type: "CDI DI", 
    institution: "Bradesco", 
    investedValue: "R$ 300,00", 
    currentValue: "R$ 302,02", 
    profitability: 1 
  },
];

const categoryData = [
  { name: "Lazer", value: 30.00, color: "hsl(38, 92%, 50%)" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />

        {/* Stats Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="animate-slide-up" style={{ animationDelay: "0ms" }}>
            <StatCard
              title="Total Receitas"
              value="R$ 117,38"
              icon={TrendingUp}
              gradient="income"
              subtitle="Dezembro 2025"
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "100ms" }}>
            <StatCard
              title="Total Despesas"
              value="R$ 30,00"
              icon={TrendingDown}
              gradient="expense"
              subtitle="Dezembro 2025"
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
            <StatCard
              title="Investimentos"
              value="R$ 16.355,02"
              icon={PiggyBank}
              gradient="investment"
              subtitle="Patrimônio total"
              trend={{ value: 1, positive: true }}
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "300ms" }}>
            <StatCard
              title="Saldo Mensal"
              value="R$ 87,38"
              icon={Wallet}
              gradient="balance"
              subtitle="Disponível"
            />
          </div>
        </section>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Meta e Resumo */}
          <div className="space-y-6">
            <div className="animate-scale-in" style={{ animationDelay: "400ms" }}>
              <ProgressCard
                title="Meta Financeira"
                targetValue="R$ 20.000,00"
                currentValue="R$ 16.140,38"
                progress={81}
                deadline="07/05/25"
              />
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "500ms" }}>
              <SummaryCard
                totalIncome="R$ 117,38"
                totalExpenses="R$ 30,00"
                balance="R$ 87,38"
                status="healthy"
              />
            </div>
          </div>

          {/* Transações */}
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <div className="card-financial">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Movimentações Recentes</h3>
                <span className="text-sm text-muted-foreground">Dezembro 2025</span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 px-4 py-2">
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Receitas</span>
                </div>
                {incomeData.map((item, index) => (
                  <TransactionItem
                    key={`income-${index}`}
                    date={item.date}
                    description={item.source}
                    category={item.category}
                    value={item.value}
                    type="income"
                  />
                ))}

                <div className="h-4" />

                <div className="flex items-center gap-2 px-4 py-2">
                  <ArrowDownRight className="w-4 h-4 text-destructive" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Despesas</span>
                </div>
                {expenseData.map((item, index) => (
                  <TransactionItem
                    key={`expense-${index}`}
                    date={item.date}
                    description={item.description}
                    category={item.category}
                    value={item.value}
                    type="expense"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Investimentos e Gráfico */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="animate-fade-in" style={{ animationDelay: "700ms" }}>
            <div className="card-financial">
              <h3 className="text-lg font-semibold text-foreground mb-6">Meus Investimentos</h3>
              <div className="space-y-4">
                {investmentData.map((investment, index) => (
                  <InvestmentCard
                    key={index}
                    date={investment.date}
                    type={investment.type}
                    institution={investment.institution}
                    investedValue={investment.investedValue}
                    currentValue={investment.currentValue}
                    profitability={investment.profitability}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "800ms" }}>
            <CategoryChart 
              data={categoryData}
              title="Gastos por Categoria"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
