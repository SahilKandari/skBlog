'use client'
import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { useCategory } from "@/providers/CategoryContext";



const CategoryList = ({data}) => {
  const { category, loading, error } = useCategory();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {category?.categories.map((category) => (
          <Link key={category.id} href={`/blog?cat=${category.slug}`} className={`${styles.category} ${styles[category.slug]}`}>
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
