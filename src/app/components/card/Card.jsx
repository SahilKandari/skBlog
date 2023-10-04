import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

export const convertDate = (dbFormat) => {   // Convert db date into readable date and time
  const isoDate = dbFormat;
  const date = new Date(isoDate);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const meridiem = hours >= 12 ? "PM" : "AM";
  
  // Convert hours to 12-hour format
  const hours12 = hours % 12 || 12; // If hours is 0, display it as 12
  const formattedDateTime = `${year}-${month}-${day} ${hours12}:${(minutes < 10 ? '0' : '')}${minutes} ${meridiem}`;

  return formattedDateTime;
}

const Card = ({key, item}) => {
  const date = convertDate(item.createdAt)
  
  console.log(item,'item');
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        {item.img && <Image src={item.img} alt="" fill className={styles.image}/>}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{date} - </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1 className={styles.title}>{item.title}</h1>
        </Link>
        <p className={styles.desc}>
          {item.desc}
        </p>
        <Link href={`/posts/${item.slug}`} className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
