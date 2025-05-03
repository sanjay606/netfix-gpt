import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setshowIndex, index }) => {
  
  const handleClick = () => {
    if (showItems) {
      setshowIndex(null);  // Same category clicked, so collapse
    } else {
      setshowIndex(index); // Open clicked category
    }
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      {/* Header */}
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data?.title} ({data?.itemCards?.length || 0})
        </span>
        <span>⬇️</span>
      </div>

      {/* Items List */}
      {showItems && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
