import React from "react";
import styles from "./EventSkeleton.module.scss";

const EventSkeleton = ({count}) => {
    return (
        <div className={styles.events}>
            <div className={styles.list}>
                {Array.from(new Array(count)).map((_, index) => (
                    <div key={index} className={styles.skeleton}>
                        <div className={styles.imageSkeleton} />
                        <div className={styles.contentSkeleton}>
                            <div className={styles.titleSkeleton} />
                            <div className={styles.dateSkeleton} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

EventSkeleton.displayName = "EventSkeleton";

export default EventSkeleton;
