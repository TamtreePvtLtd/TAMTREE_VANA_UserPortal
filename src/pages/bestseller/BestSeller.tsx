import CommonPage from "../../common/component/commonpages/CommonPage";
import { jewelryCollections } from "../../seed-data/seed-data";

const BestSeller = () => {
  const collectionName = "Bracelets";
    const collectionData = jewelryCollections.find(
      (collection) => collection.name === collectionName
    );

  return (
    <>
      <CommonPage
        JewelleryCollectionName={collectionName}
        JewelleryCollectionDescription={collectionData?.description || ""}
        jewelleryItems={collectionData?.products || []}
      />
    </>
  );
};

export default BestSeller;
