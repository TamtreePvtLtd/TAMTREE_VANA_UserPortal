import { useQuery } from "@tanstack/react-query";
import { IProductDetails } from "../interface/type";
import { httpWithoutCredentials } from "../services/http";

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

export const useProductDetailById = (productId: string) => {
  return useQuery({
    queryKey: ["ProductById", productId],
    queryFn: () => fetchProductDetailById(productId),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
