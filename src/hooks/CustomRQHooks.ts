import { useMutation, useQuery } from "@tanstack/react-query";
import {  getAllItemsByCollectionName, getAllItemsById, loginCredentials, signUpCredentials } from "../services/api";


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

 
  export const useLogin = () => {
    return useMutation ({
      mutationKey: ["login"],
      mutationFn:loginCredentials,
    });
  };