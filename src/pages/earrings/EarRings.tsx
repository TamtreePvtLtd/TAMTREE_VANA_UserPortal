// EarringsPage.tsx
import Loader from "../../common/Loader";
import CommonPage from "../../common/component/commonpages/CommonPage";
import { useGetAllItemsByCollectionName } from "../../hooks/CustomRQHooks";

const Earrings = () => {
  const {
    data: EarringsCollection,
    isLoading,
    isError,
  } = useGetAllItemsByCollectionName("Earrings");

  return (
    <>
      {isLoading && <Loader/>}
      {isError && <p>Error fetching collection</p>}
      {EarringsCollection && (
        <CommonPage
          JewelleryCollectionName={EarringsCollection.JewelleryCollectionName}
          JewelleryCollectionDescription={
            EarringsCollection.JewelleryCollectionDescription || ""
          }
          jewelleryItems={EarringsCollection.jewelleryItems || []}
        />
      )}
    </>
  );
};

export default Earrings;