import Navbar from "../components/navbar/navbar";
import { sansitaSwashed } from "../app/layout";
import Searchbar from "../components/Searchbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1
        className={sansitaSwashed.className}
        style={{
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Plan your date
      </h1>
      <Searchbar />
    </div>
  );
}
