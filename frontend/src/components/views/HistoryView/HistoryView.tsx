import styles from './HistoryView.module.scss';
import BiographySection from './components/BiorgraphySection/BiographySection';
import HistorySection from './components/HistorySection/HistorySection';
import MissionSection from "./components/MissionSection/MissionSection";
import PeopleSection from "./components/PeopleSection/PeopleSection";
import PartnerSection from "./components/PartnersSection/PartnersSection";
import DonationSection from "./components/DonationSection/DonationSection";
import BreadcrumbSection from "./components/BreadcrumbSection/BreadcrumbSection" ;

const HistoryView = () => {
    return (
        <div className={styles.historyView}>
            <BreadcrumbSection
                links={[
                    {to: '/', label: 'Головна'},
                ]}
                current="Про музей"
            />
            <BiographySection/>
            <HistorySection/>
            <MissionSection/>
            <PeopleSection/>
            <PartnerSection/>
            <DonationSection/>
        </div>
    );
};

export default HistoryView;