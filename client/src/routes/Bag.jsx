import { useState } from "react";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FetchItems from "../components/FetchItems";
import LoadingSpinner from "../components/LoadingSpinner";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const [finalItems, setFinalItems] = useState([]);

  useEffect(() => {
    const getItems = () => {
      const filteredItems = items.filter((item) => bagItems.includes(item.id));
      setFinalItems(filteredItems);
    };
    getItems();
  }, [fetchStatus, bagItems, items]);

  return (
    <>
      <main>
        <FetchItems />
        {fetchStatus.currentlyFetching ? (
          <LoadingSpinner />
        ) : (
          <div className="bag-page">
            <div className="bag-items-container">
              {finalItems.map((item) => (
                <BagItem item={item} />
              ))}
            </div>
            <BagSummary />
          </div>
        )}
      </main>
    </>
  );
};
export default Bag;
