import styles from "./FiltersSidebar.module.scss";
import FilterImg from "../../../../../assets/images/collection_page/filter.png";
import DownArrowImg from "../../../../../assets/icons/down_arrow_marker.svg";
import RedDownArrowImg from "../../../../../assets/icons/red_down_arrow_marker.svg";
import CloseImg from "../../../../../assets/icons/close.svg";
import { list, regionKeyMap } from "./constants";

export default function FiltersSidebar({isOpen, isOpenHandler,}: {
  isOpen: boolean; isOpenHandler: (val: boolean) => void; }) {
  return (
    <div className={`${styles.wrapper} ${isOpen ? styles.open : ""}`}>
      <div className={styles.backdrop} onClick={() => isOpenHandler(false)} />

      <div className={styles.filtersBlock}>
        <img src={FilterImg} alt="Filters" />
        <h3>Фільтри</h3>
      </div>

      <div className={styles.section}>
        <button
          className={styles.closeBtn}
          onClick={() => isOpenHandler(false)}
        >
          <img src={CloseImg} alt="Close menu" />
        </button>

        {list.map((item) => (
          <details key={item.title}>
            <summary className={styles.topLevel}>
              <img
                src={RedDownArrowImg}
                alt="Arrow"
                className={styles.arrowIcon}
              />
              {item.title}
            </summary>

            <div className={styles.subsection}>
              {item.subCategory?.map((sub) => {
                const regionKey = regionKeyMap[sub.subCategoryName];

                return (
                  <details key={sub.subCategoryName}>
                    <summary>
                      <img
                        src={DownArrowImg}
                        alt="Arrow"
                        className={styles.arrowIcon}
                      />
                      <a href={regionKey}>{sub.subCategoryName}</a>
                    </summary>

                    <div>
                      <h6>
                        Одяг <span>({sub.clothesCounter})</span>
                      </h6>
                      <ul>
                        {sub.clothesList?.map((c) => (
                          <li key={c}>• {c}</li>
                        ))}
                      </ul>

                      <h6>
                        Аксесуари <span>({sub.accessoriesCounter})</span>
                      </h6>
                    </div>
                  </details>
                );
              })}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
