import { ICollection} from "../interface/type";
import { httpWithoutCredentials } from "./http";
import {  IProduct } from "../interface/type";

 const getAllItemsByCollectionName = async (collectionName:string) => {
    try {
      const response = await httpWithoutCredentials.get<ICollection>(
        `/JewelleryItem/getJewelleryItemsByJewelleryCollectionId/${collectionName}`
      );
  
      return response.data;
    } catch (error) {
      throw error;
    }
  };



const getNewArrivalProductsData = async () => {
  try {
    const response = await httpWithoutCredentials.get<IProduct[]>(
      "/JewelleryItem/getNewArrivalProducts"
    );
    return response.data;
  } catch (error) {
    console.error('Error in getNewArrivalProductsData:', error);
    throw error;
  }
};

export { getNewArrivalProductsData,getAllItemsByCollectionName };







