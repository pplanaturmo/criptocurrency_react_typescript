import { useMemo } from "react";
import { useCryptoStore } from "../store";
import Spinner from "./Spinner";

export default function CryptoPriceDisplay() {
  const { result, loading } = useCryptoStore();

  const hasResult = useMemo(
    () => !Object.values(result).includes(""),
    [result]
  );

  return (
    <div className="result-wrapper">
      {loading ? (
        <Spinner />
      ) : (
        hasResult && (
          <>
            <h2>Cotización</h2>
            <div className="result">
              <div>
                <img
                  src={`https://cryptocompare.com/${result.IMAGEURL}`}
                  alt="Imagen criptomoneda"
                />
              </div>
              <div>
                <p>
                  El precio es de: <span>{result.PRICE}</span>
                </p>
                <p>
                  El precio máximo ha sido de: <span>{result.HIGHDAY}</span>
                </p>
                <p>
                  El precio mínimo ha sido de: <span>{result.LOWDAY}</span>
                </p>
                <p>
                  Cambio en las ultimas 24 horas:{" "}
                  <span>{result.CHANGEPCT24HOUR}%</span>
                </p>
                <p>
                  Última actualización: <span>{result.LASTUPDATE}</span>
                </p>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
}
