"use client";
import React, { useState } from "react";
import styles from "./comment.module.css";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { convertDate } from "../card/Card";

// const fetcher = async (url) => {
//   const res = await fetch(url);
//   const data = await res.json();

//   if (!res.ok) {
//     const error = new Error(data.message);
//     throw error;
//   }

//   return data;
// };

const fetcher = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
      const error = new Error(data.message);
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    mutate();
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment..."
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a commnet</Link>
      )}
      <div className={styles.comments}>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          data?.map((comment) => {
            const date = convertDate(comment.createdAt);
            return (
              <div className={styles.comment} key={comment.id}>
                <div className={styles.user}>
                  <Image
                    src={comment.user.image}
                    alt=""
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                  <div className={styles.userInfo}>
                    <span className={styles.userName}>
                      {" "}
                      {comment.user.name}
                    </span>
                    <span className={styles.date}>{date}</span>
                  </div>
                </div>
                <p className={styles.desc}>{comment.desc}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Comments;
