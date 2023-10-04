import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1>
        <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ex.
            Ducimus accusamus.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            beatae dicta eius ex asperiores, illo, animi hic non fuga quam saepe
            exercitationem molestiae voluptatem ad? Quis cumque laboriosam ea modi
            iste. Numquam id est quos necessitatibus illum autem optio non
            aspernatur, dolor ipsam pariatur earum dolorum ex perspiciatis, quas
            voluptates.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
