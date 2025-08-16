import PolissyaRegion from "../../../assets/images/qr_page/polisssya_region.png";
import WestPodillyaShirt from "../../../assets/images/qr_page/west_podillya.png";
import WestPodillyaShirt_2 from "../../../assets/images/qr_page/west_podillya_2.png";

export const regions: Record<
  string,
  { title: string; img: string; content: React.ReactNode }
> = {
  polissya: {
    title: "Полісся",
    img: PolissyaRegion,
    content: (
      <>
        <p>
          <strong>Полісся</strong> — один із найзагадковіших і найзеленіших
          регіонів України, що простягається вздовж північного кордону країни.
          Це край непрохідних лісів, болот і тихих річок, що створюють особливу
          атмосферу спокою та первозданності.
        </p>
        <p>
          <strong>Жителі Полісся</strong> — працьовиті, мудрі й тісно пов’язані
          з землею та лісом. Вони з покоління в покоління передають знання про
          лікарські рослини, бджільництво, рибальство та ремесла. Традиційна
          поліська хата — це приклад гармонії з природою: побудована з дерева,
          прикрашена рушниками, з теплим глинобитним припічком.
        </p>
        <p>
          <strong>Культура Полісся</strong> глибока й самобутня: тут збереглися
          архаїчні пісні, обряди, легенди й діалекти, що не зустрічаються більше
          ніде в Україні. Особливо вражають давні весільні традиції, купальські
          свята, щедрування та народне ворожіння.{" "}
        </p>
        <p>
          <strong>Полісся</strong> відкривається тим, хто готовий побачити красу
          у тиші, простоті та природній мудрості.
        </p>
      </>
    ),
  },
};

export const regionCollectionItems = [
  {
    img: WestPodillyaShirt,
    title: "Сорочка жіноча. Рукав’янка.Західне Поділля",
  },

  {
    img: WestPodillyaShirt_2,
    title: "Cорочка жіноча. Рукав’янка.Західне Поділля",
  },

  {
    img: WestPodillyaShirt,
    title: "Сорочка жіноча. Рукав’янка.Західне Поділля",
  },

  {
    img: WestPodillyaShirt_2,
    title: "Cорочка жіноча. Рукав’янка.Західне Поділля",
  },

  {
    img: WestPodillyaShirt,
    title: "Сорочка жіноча. Рукав’янка.Західне Поділля",
  },
];
