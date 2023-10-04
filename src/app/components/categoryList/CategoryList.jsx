import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  })
  
  if (!res.ok) {
    throw new Error("Failed")
  }

  return res.json();
}

const CategoryList = async () => {
  const data = await getData();
  console.log(data,'data');
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.categories.map((category) => (
          <Link key={category._id} href="/blog?cat=style" className={`${styles.category} ${styles[category.slug]}`}>
            {category.img &&
            <Image
              src={category.img}
              className={styles.image}
              width={32}
              height={32}
              alt=""
            />
          }
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
