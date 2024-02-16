import { ICollection, ILogin, ILoginResponse, IProductDetails, ISignUp, IUser } from "../interface/type";
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

const fetchProductDetailById = async (productId: string) => {
  try {
    var response = await httpWithoutCredentials.get<IProductDetails>(
      `/JewelleryItem/getJewelleryItemByID/${productId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getNewArrivalProductsData, getAllItemsByCollectionName, getAllItemsById,fetchProductDetailById };



const Login = async (login:ILogin) => {
  try {
    const response = await httpWithCredentials.post<ILoginResponse>("/customer/login", login);
    return response.data;
  } catch (error) {
    throw error;
  }
};


const LogOut = async () => {
  try {
    const response = await httpWithCredentials.get<ILoginResponse>(
      "/customer/logout"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const isAuthorized = async () => {
  try {
    const response = await httpWithCredentials.get<IUser>(
      "/customer/isAuthorized"
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


export {  signUp,Login,LogOut,isAuthorized };
