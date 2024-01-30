import HomeBanner from "./components/HomeBanner";
import HomeCategory from "./components/HomeCategory";

export default function Home() {
  return (
    <>
      <section className="container sm:p-0 pt-[1.3rem] px-[2rem]">
        <HomeBanner />
        <HomeCategory />
      </section>
    </>
  );
}
