import { MdCurrencyExchange } from "react-icons/md";

const DollarStat = () => {
  return (
    <div className="stats shadow border-2 border-gray-200">
      <div className="stat place-items-center">
        <div className="stat-figure text-primary">
          <MdCurrencyExchange size={40} />
        </div>
        <div className="stat-title">PLN exchange rate to the US dollar</div>
        <div className="stat-value text-primary pt-4 pb-2">3.99 PLN</div>
        <div className="stat-desc">Date: 2024-01-16</div>
      </div>
    </div>
  );
};

export default DollarStat;
