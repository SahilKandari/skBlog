import Menu from "./components/menu/Menu";
import CategoryList from "./components/categoryList/CategoryList";
import Featured from "./components/featured/Featured";
import CardList from "./components/cardList/CardList";
import styles from "./homepage.module.css";

// export const getCategory = async () => {
//   const res = await fetch("http://localhost:3000/api/categories", {
//     cache: "no-store",
//   })
  
//   if (!res.ok) {
//     throw new Error("Failed")
//   }

//   return res.json();
// }
export const getRandomDarkColor = (opacity) => {
  if (opacity < 0 || opacity > 1) {
    throw new Error("Opacity should be a value between 0 and 1.");
  }

  // Generate random values for the red, green, and blue components
  const red = Math.floor(Math.random() * 128); // Values from 0 to 127
  const green = Math.floor(Math.random() * 128); // Values from 0 to 127
  const blue = Math.floor(Math.random() * 128); // Values from 0 to 127

  // Combine the components into a CSS color string
  const color = `rgba(${red},${green},${blue},${opacity})`;

  return color;
}
export default async function Home({searchParams}) {
  // const data = await getCategory();
  const page = parseInt(searchParams?.page) || 1;
  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList page={page}/>
        <Menu/>
      </div>
    </div>
  );
}
