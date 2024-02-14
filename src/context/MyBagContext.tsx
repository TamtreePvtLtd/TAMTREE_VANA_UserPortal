import  { ReactNode, useContext } from "react";
import { useState, createContext, useEffect } from "react";
import { IMyBagCountValue } from "../interface/type";
import { VANA_ITEMS } from "../constants/Constants";

export const MyBagContext = createContext<IMyBagCountValue>({
  mybagCount: 0,
  updateMyBagCount: () => {},
});

function BagProvider({ children }: { children: ReactNode }) {
  const [mybagCount, setMybagCount] = useState(0);

  const updateMyBagCount = () => {
    var localStorageProductData = localStorage.getItem(VANA_ITEMS);

    var localStorageProductParse = localStorageProductData
      ? JSON.parse(localStorageProductData)
      : null;
    const arrayCount = localStorageProductParse
      ? localStorageProductParse.length
      : 0;

    if (!isNaN(arrayCount)) {
      setMybagCount(arrayCount);
    } else {
      setMybagCount(0);
    }
  };

  useEffect(() => {
    updateMyBagCount();
  }, []);

  const contextValue: IMyBagCountValue = {
    mybagCount,
    updateMyBagCount,
  };

  return (
    <MyBagContext.Provider value={contextValue}>
      {children}
    </MyBagContext.Provider>
  );
}
export function useMyBag() {
  const context = useContext<IMyBagCountValue>(MyBagContext);
  return context;
}

export default BagProvider;
