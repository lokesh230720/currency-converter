/* eslint-disable react/prop-types */
import React,{useId} from "react";

function InputBox({
  label,
  amount,
  onAmountChangre,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountdisable = false,
  currencydisable = false,

  className = "",
}) {
  const amountInput = useId();
  return (
    <div className={`bg-yellow-100 p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label htmlFor ={amountInput} className="text-black/40 mb-2 inline-block">{label}</label>
        <input id={amountInput}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountdisable}
          value={amount}
          onChange={(e) =>
            onAmountChangre && onAmountChangre(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg--100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onAmountChangre(e.target.value)}
          disabled={currencydisable}
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
