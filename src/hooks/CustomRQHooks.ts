import { useMutation, useQuery } from "@tanstack/react-query";
import {  LogOut, LoginCredentials, fetchProductDetailById, getAllItemsByCollectionName, getAllItemsById,  } from "../services/api";


export const useGetAllItemsByCollectionName = (collectionName:string) => {
    return useQuery({
     queryKey:["getAllItems"],
     queryFn:() => getAllItemsByCollectionName(collectionName),
      refetchOnWindowFocus: false,
    });
  };

  export const useGetAllItemsById = (jewelleryItemsId:string) => {
    return useQuery({
     queryKey:["getAllItemsbyId",jewelleryItemsId],
     queryFn:() => getAllItemsById(jewelleryItemsId),
      refetchOnWindowFocus: false,
    });
  };

  export const useProductDetailById = (productId: string) => {
    return useQuery({
      queryKey: ["ProductById", productId],
      queryFn: () => fetchProductDetailById(productId),
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    });
  };
 
  export const useLogin = () => {
    return useMutation ({
      mutationKey: ["login"],
      mutationFn:LoginCredentials,
    });
  };

  export const useLogout = () => {
    return useQuery({
      queryKey:["logout"],
      queryFn:LogOut
    });
  };

  
