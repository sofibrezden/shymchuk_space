import { useCallback, useState } from "react";
import styles from "./CollectionView.module.scss";
import Assortment from "./components/Assortment/Assortment";
import FiltersSidebar from "./components/FiltersSidebar/FiltersSidebar";

function CollectionView() {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = useCallback((val: boolean) => setIsOpen(val), []);

  return (
    <div className={styles.wrapper}>
      <FiltersSidebar isOpen={isOpen} isOpenHandler={isOpenHandler} />
      <Assortment isOpen={isOpen} isOpenHandler={isOpenHandler} />
    </div>
  );
}

export default CollectionView;
