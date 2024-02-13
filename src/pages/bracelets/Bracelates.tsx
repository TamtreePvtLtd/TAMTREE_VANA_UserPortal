// BraceletsPage.tsx
import CommonPage from "../../common/component/commonpages/CommonPage";
import { useGetAllItemsByCollectionName } from "../../hooks/CustomRQHooks";

const Bracelets = () => {
  const {
    data: BraceletsCollection,
    isLoading,
    isError,
  } = useGetAllItemsByCollectionName("Bracelets");

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching collection</p>}
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

export default Bracelets;