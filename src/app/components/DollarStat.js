"use client";

import { useEffect, useState } from "react";

import { MdCurrencyExchange } from "react-icons/md";

const DollarStat = () => {
  const [currencyRate, setCurrencyRate] = useState("");

  const getCurrencyRate = async () => {
    const response = await fetch("/api/get-exchange-rate", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data.rates[0]);

    setCurrencyRate(data.rates[0]);
  };

  useEffect(() => {
    getCurrencyRate();
  }, []);

  return (
    <>
      {currencyRate && (
        <div className="stats shadow border-2 border-gray-200">
          <div className="stat place-items-center">
            <div className="stat-figure text-primary">
              <MdCurrencyExchange size={40} />
            </div>
            <div className="stat-title">PLN exchange rate to the US dollar</div>
            <div className="stat-value text-primary pt-4 pb-2">
              {currencyRate.mid.toFixed(2)} PLN
            </div>
            <div className="stat-desc">Date: {currencyRate.effectiveDate}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default DollarStat;
