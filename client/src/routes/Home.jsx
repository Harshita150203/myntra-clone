import HomeItem from "../components/HomeItem";
import FetchItems from "../components/FetchItems";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <main>
      <FetchItems />
      {fetchStatus.currentlyFetching ? (
        <LoadingSpinner />
      ) : (
        <div className="items-container">
          {items.map((item) => (
            <HomeItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </main>
  );
};
export default Home;
