import CommonPage from "../../common/component/commonpages/CommonPage";
import { useGetAllItemsByCollectionName } from "../../hooks/CustomRQHooks";

const BestSeller = () => {
  const { data: BestSellerCollection } =
    useGetAllItemsByCollectionName("Best Seller");

  return (
    <>
      {BestSellerCollection && (
        <CommonPage
          JewelleryCollectionName={BestSellerCollection.JewelleryCollectionName}
          JewelleryCollectionDescription={
            BestSellerCollection.JewelleryCollectionDescription || ""
          }
          jewelleryItems={BestSellerCollection.jewelleryItems || []}
        />
      )}
    </>
  );
};

export default BestSeller;
