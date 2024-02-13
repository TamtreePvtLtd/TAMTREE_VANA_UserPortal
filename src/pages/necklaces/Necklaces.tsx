// NecklacesPage.tsx
import CommonPage from "../../common/component/commonpages/CommonPage";
import { useGetAllItemsByCollectionName } from "../../hooks/CustomRQHooks";

const Necklaces = () => {
  const {
    data: NecklacesCollection,
    isLoading,
    isError,
  } = useGetAllItemsByCollectionName("Necklaces");

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching collection</p>}
      {NecklacesCollection && (
        <CommonPage
          JewelleryCollectionName={NecklacesCollection!.JewelleryCollectionName}
          JewelleryCollectionDescription={
            NecklacesCollection!.JewelleryCollectionDescription || ""
          }
          jewelleryItems={NecklacesCollection!.jewelleryItems || []}
        />
      )}
    </>
  );
};

export default Necklaces;