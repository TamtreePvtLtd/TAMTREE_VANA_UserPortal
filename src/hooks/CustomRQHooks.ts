import { useQuery } from "@tanstack/react-query";
import {  getAllItemsByCollectionName } from "../services/api";

export const useGetAllItemsByCollectionName = (collectionName:string) => {
    return useQuery({
     queryKey:["getAllItems"],
     queryFn:() => getAllItemsByCollectionName(collectionName),
      refetchOnWindowFocus: false,
    });
  };
