import styles from "./Assortment.module.scss";
import SearchImg from "../../../../../assets/images/collection_page/search.png";
import MapImg from "../../../../../assets/images/collection_page/map.png";
import MapRegionsImg from "../../../../../assets/images/collection_page/map_regions.png";
import { gallery } from "./constants";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import FilterImg from "../../../../../assets/images/collection_page/filter.png";

function Assortment({
  isOpen,
  isOpenHandler,
}: {
  isOpen: boolean;
  isOpenHandler: (val: boolean) => void;
}) {
  const [itemOffset, setItemOffset] = useState(0);
  const currentItems = gallery.slice(itemOffset, itemOffset + 8);

  const [isMapShown, setIsMapShown] = useState(false);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 8) % gallery.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={styles.wrapper}>
      <h5><a href="https://localhost:3000">Головна</a>{">"} Колекція</h5>

      <div className={styles.search}>
        <button
          className={styles.filterToggle}
          onClick={() => isOpenHandler(!isOpen)}
        >
          <img src={FilterImg} alt="Filters" />
        </button>

        <input type="text" placeholder="Шукати" />
        <img src={SearchImg} alt="Search" className={styles.searchImg} />
        {/*<button*/}
        {/*  className={styles.mapButton}*/}
        {/*  onClick={() => setIsMapShown(!isMapShown)}*/}
        {/*>*/}
        {/*  <img src={MapImg} className={styles.map} alt="Map" />*/}
        {/*</button>*/}
      </div>

      {isMapShown == true ? (
        <div className={styles.mapContainer}>
          <img src={MapRegionsImg} alt="Regions Map" />
        </div>
      ) : (
        <>
          <div className={styles.galleryWrapper}>
            {currentItems.map((item) => (
              <div className={styles.cardWrapper}>
                <img src={item.image} alt="Assortment" />
                <h4>{item.title}</h4>
              </div>
            ))}
          </div>
          <ReactPaginate
            breakLabel="…"
            nextLabel=""
            onPageChange={handlePageClick}
            previousLabel=""
            pageRangeDisplayed={3}
            pageCount={20}
            marginPagesDisplayed={1}
            renderOnZeroPageCount={null}
            containerClassName={styles.pagination}
            pageClassName={styles.pageItem}
            pageLinkClassName={styles.pageLink}
            activeClassName={styles.active}
            breakClassName={styles.break}
            previousClassName={`${styles.arrow} ${styles.prev}`}
            nextClassName={`${styles.arrow} ${styles.next}`}
            disabledClassName={styles.disabled}
          />
        </>
      )}
    </div>
  );
}

export default Assortment;
