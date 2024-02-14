
import CommonPage from "../../common/component/commonpages/CommonPage";
import { useGetAllItemsByCollectionName } from "../../hooks/CustomRQHooks";

const NewArrivals = () => {
  const {
    data: BraceletsCollection,
    isLoading,
    isError,
  } = useGetAllItemsByCollectionName("Bracelets");

  return (
    <>
      {BraceletsCollection && (
        <CommonPage
          JewelleryCollectionName={BraceletsCollection.JewelleryCollectionName}
          JewelleryCollectionDescription={
            BraceletsCollection.JewelleryCollectionDescription || ""
          }
          jewelleryItems={BraceletsCollection.jewelleryItems || []}
        />
      )}
    </>
  );
};

export default NewArrivals;
