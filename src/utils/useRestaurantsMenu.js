import { useEffect, useState } from "react";
import { MENU_API_BASE } from "../utils/constant";

const useRestaurantsMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(MENU_API_BASE + resId + "&query=Paratha&submitAction=ENTER&source=collection");
      const json = await data.json();
      setResInfo(json.data);
    };

    if (resId) {
      fetchData();
    }
  }, [resId]);

  return resInfo;
};

export default useRestaurantsMenu;
