"use client";
import React, { useState } from "react";
import styles from "./menuCategory.module.css";
import Link from "next/link";
import { useCategory } from "../../../providers/CategoryContext";
import { getRandomDarkColor } from "../../page";

const MenuCategory = ({ edit, slcCat, cat }) => {
  const [newCat, setNewCat] = useState("New Category");
  const { category, loading, error } = useCategory();
  return (
    <div className={styles.categoryList}>
      {edit ? (
        <input
          className={`${styles.categoryItem} ${styles.new}`}
          value={newCat}
          onChange={(e) => setNewCat(e.target.value)}
          onClick={(e) => slcCat(e.target.value)} 
          placeholder="New Category"
        ></input>
      ) : (
        ""
      )}
      {category?.categories.map((category) =>
        edit ? (
          <input
            // className={`${styles.categoryItem} ${styles[category.slug]}`}
            className={`${styles.categoryItem}`}
            style={{ backgroundColor: getRandomDarkColor(0.7) }}
            value={category.title}
            key={category.id}
            onClick={(e) => slcCat(e.target.value)} 
            readOnly
          ></input>
        ) : (
          <Link
            href={`/blog?cat=${category.slug}`}
            // className={`${styles.categoryItem} ${styles[category.slug]}`}
            className={`${styles.categoryItem}`}
            style={{ backgroundColor: getRandomDarkColor(0.7) }}
            key={category.id}
          >
            {category.title}
          </Link>
        )
      )}
    </div>
  );
};

export default MenuCategory;
