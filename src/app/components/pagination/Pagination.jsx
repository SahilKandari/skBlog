"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  const handlePreviousClick = () => {
    router.push(`?page=${page - 1}`);
  };

  const handleNextClick = () => {
    router.push(`?page=${page + 1}`);
  };

  return (
    <div className={styles.container}>
      <button disabled={!hasPrev} className={styles.button} onClick={handlePreviousClick}>
        Previous
      </button>
      <button disabled={!hasNext} className={styles.button} onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Pagination;


// "use client";

// import React from "react";
// import styles from "./pagination.module.css";
// import { useRouter } from "next/navigation";

// const Pagination = ({ page }) => {
//   const router = useRouter();
//   return (
//     <div className={styles.container}>
//       <button
//         className={styles.button}
//         onClick={router.push(`?page=${page - 1}`)}
//       >
//         Previous
//       </button>
//       <button
//         className={styles.button}
//         onClick={router.push(`?page=${page + 1}`)}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Pagination;
