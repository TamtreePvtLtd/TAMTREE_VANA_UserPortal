import CommonPage from "../../common/component/commonpages/CommonPage";
import { useGetAllItemsByCollectionName } from "../../hooks/CustomRQHooks";


const NewArrivals = () => {
    const { data: NewArrivalsCollection } = useGetAllItemsByCollectionName(
      "New Arrivals"
    );

  return (
    <>
      {NewArrivalsCollection && (
        <CommonPage
          JewelleryCollectionName={
            NewArrivalsCollection.JewelleryCollectionName
          }
          JewelleryCollectionDescription={
            NewArrivalsCollection.JewelleryCollectionDescription || ""
          }
          jewelleryItems={NewArrivalsCollection.jewelleryItems || []}
        />
      )}
    </>
  );
};


export default NewArrivals;
