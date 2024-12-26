import styles from "./SkeletonSociety.module.css";


export default function SkeletonCard(){
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonText}></div>
    </div>
  );
};