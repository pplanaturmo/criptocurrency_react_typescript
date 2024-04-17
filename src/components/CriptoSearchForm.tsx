import { ChangeEvent, useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

export default function CriptoSearchForm() {
  const { cryptocurrencies } = useCryptoStore();

    const [pair,setPair] = useState<Pair>({
        currency:"",
        crypto:""
    })
    const [error,setError] = useState("")

    const handleChange = (event: ChangeEvent<HTMLSelectElement>)=> {
        setPair({
            ...pair,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(Object.values(pair).includes("")){
            setError("Todos los campos son obligatorios")

        }else{
            setError("")
            //consulta la api


        }


    }


  return (
    <form className="form"
    onSubmit={handleSubmit}
    >
        {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency" onChange={handleChange} value={pair.currency}>
          <option value={""}>--Seleccione--</option>

          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda:</label>
        <select name="criptocurrency" id="criptocurrency" onChange={handleChange} value={pair.crypto}>
          <option value={""}>--Seleccione--</option>
          {cryptocurrencies.map((cryptocurrency) => (
            <option
              key={cryptocurrency.CoinInfo.Name}
              value={cryptocurrency.CoinInfo.Name}
            >
              {cryptocurrency.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value={"Cotizar"}></input>
    </form>
  );
}
