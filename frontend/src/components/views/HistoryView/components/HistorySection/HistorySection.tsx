import React, {useEffect, useState} from 'react';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent
} from '@mui/lab';

import shirt1 from '../../../../../assets/images/history_page/shirt1.png';
import shirt2 from '../../../../../assets/images/history_page/shirt2.png';

import styles from './HistorySection.module.scss';
import Button from '../../../../ui/Button/Button';

const events = [
    {
        year: '1989',
        title: 'Роксоляна Шимчук придбала свою першу сорочку',
        text: `Першу свою сорочку я купила ще в минулому тисячолітті, 1989 році на фестивалі "Червона рута". 
    Вже не пригадаю хто підказав, що автентичний стрій можна знайти на Буковині. Перший свій стрій я купила 
    за студентські гроші і він для мене був надзвичайно красивий. Ця сорочка у мене є, але, звичайно 
    тьмяніє перед шедеврами, які вдалось назбирати за ці десятки років"`,
        note: '– поділилась спогадами під час брифінгу Роксоляна Шимчук.',
        image: shirt1
    },
    {
        year: '1993',
        title: 'Народження ідеї музею',
        text: `Що краще лілея чи троянда? Було б нецікаво, якби земля була засаджена одним видів квітів. 
    Так само і не можна порівнювати яка вишивка гарніша чи давніша. 
    Оце різноманіття у всій красі представлене у музеї"`,
        note: '– наголосив Юрій Мельничук, майстер народного мистецтва.',
        image: shirt2
    },
    {year: '2001', title: 'Подія 3', text: 'Опис події 3...', note: '', image: shirt1},
    {year: '2005', title: 'Подія 4', text: 'Опис події 4...', note: '', image: shirt2},
    {year: '2010', title: 'Подія 5', text: 'Опис події 5...', note: '', image: shirt1}
];

export default function HistorySection() {
    const [isClient, setIsClient] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const visibleCount = 2;
    return (
        <div className={styles.sectionRoot}>
            <h2 className={styles.sectionTitle}>Коли все почалось</h2>

            {isClient && (
                <>

                    <Timeline position="right" className={styles.timeline}>
                        {events.map((event, index) => {
                            const isFullyVisible = expanded || index < visibleCount;
                            const isNextPlaceholder = !expanded && index === visibleCount;

                            if (!isFullyVisible && !isNextPlaceholder) return null;

                            return (
                                <TimelineItem key={index} className={styles.timelineItem}>
                                    <TimelineOppositeContent className={styles.timelineOpposite}>
                                        {event.year}
                                    </TimelineOppositeContent>

                                    <TimelineSeparator>
                                        <span className={styles.diamond}/>
                                        {index < events.length - 1 && <TimelineConnector/>}
                                    </TimelineSeparator>

                                    <TimelineContent>
                                        {isFullyVisible ? (
                                            <div className={styles.timelineContent}>
                                                <div className={styles.contentInner}>
                                                    <h3 className={styles.contentTitle}>{event.title}</h3>
                                                    <p className={styles.contentText}>
                                                        <strong>{event.text}</strong>
                                                        {event.note && (
                                                            <span className={styles.inlineNote}> {event.note}</span>
                                                        )}
                                                    </p>


                                                </div>
                                                <img
                                                    src={event.image}
                                                    alt=""
                                                    className={styles.timelineImage}
                                                />
                                            </div>
                                        ) : (
                                            <div className={styles.hiddenEventPlaceholder}/>
                                        )}
                                    </TimelineContent>
                                </TimelineItem>
                            );
                        })}
                    </Timeline>

                    <div style={{textAlign: 'center'}}>
                        <Button onClick={() => setExpanded(prev => !prev)} className={styles.toggleButton}>
                            {expanded ? 'Згорнути' : 'Показати більше'}
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
}
