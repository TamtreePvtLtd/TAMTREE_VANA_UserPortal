import { ICollection, ILogin, ILoginResponse, ISignUp } from "../interface/type";
import { httpWithCredentials, httpWithoutCredentials } from "./http";
import { IProduct } from "../interface/type";

const getAllItemsByCollectionName = async (collectionName: string) => {
  try {
    const response = await httpWithoutCredentials.get<ICollection>(
      `/JewelleryItem/getJewelleryItemsByJewelleryCollectionId/${collectionName}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

const getAllItemsById = async (jewelleryItemsId: string) => {
  try {
    const response = await httpWithoutCredentials.get<IProduct[]>(
      `/JewelleryItem/getJewelleryItemById/${jewelleryItemsId}`
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
    throw error;
  }
};

export { getNewArrivalProductsData, getAllItemsByCollectionName, getAllItemsById };



const loginCredentials = async (credential: ILogin) => {
  try {
    const response = await httpWithCredentials.post<ILogin>(
      "/user/userlogin",
      credential
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};


const signUp = async (credential: ISignUp) => {
  try {
    const response = await httpWithCredentials.post<ILoginResponse>(
      "/customer/signup",
      credential
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};


export { loginCredentials, signUp };
