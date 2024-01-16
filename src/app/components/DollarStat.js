"use client";

import { useEffect, useState } from "react";

import { MdCurrencyExchange } from "react-icons/md";

const DollarStat = () => {
  const [currencyRate, setCurrencyRate] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const getCurrencyRate = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/get-exchange-rate", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      console.log(data.rates[0]);

      setLoading(false);
      setCurrencyRate(data.rates[0]);
    } catch (error) {
      setLoading(false);
      setErrorMsg("Something went wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrencyRate();
  }, []);

  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow w-[374px] h-[140px] border-2 border-gray-200">
      <div className="stat place-items-center">
        {/* LOADER */}
        {loading && !currencyRate && (
          <span className="loading loading-dots loading-lg"></span>
        )}
        {/* ERROR */}
        {!loading && errorMsg && !currencyRate && (
          <button
            className="btn btn-error btn-outline cursor-pointer hover:bg-error"
            onClick={() => getCurrencyRate()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            {errorMsg}
          </button>
        )}
        {/* STATS */}
        {!loading && currencyRate && (
          <>
            <div className="stat-figure text-primary">
              <MdCurrencyExchange size={40} />
            </div>
            <div className="stat-title">PLN exchange rate to the US dollar</div>
            <div className="stat-value text-primary pt-4 pb-2">
              {currencyRate.mid.toFixed(2)} PLN
            </div>
            <div className="stat-desc">Date: {currencyRate.effectiveDate}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default DollarStat;
