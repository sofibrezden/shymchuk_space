import {Link} from 'react-router-dom';
import styles from './BreadcrumbSection.module.scss';

interface BreadcrumbProps {
    links: {
        to: string;
        label: string;
    }[];
    current: string;
}

const BreadcrumbSection = ({links, current}: BreadcrumbProps) => {
    return (
        <div className={styles.breadcrumb}>
            {links.map((link, index) => (
                <span key={index}>
          <Link to={link.to}>{link.label}</Link>
          <span> &gt;</span>
        </span>
            ))}
            <span className={styles.current}>{current}</span>
        </div>
    );
};

export default BreadcrumbSection;
