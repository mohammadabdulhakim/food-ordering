import Hero from "./_components/Hero";
import OurBestDishes from "./_components/OurBestDishes";

export default function Home() {
  let newd = new Date();

  return (
    <main>
      <Hero />
      <OurBestDishes />
    </main>
  );
}
