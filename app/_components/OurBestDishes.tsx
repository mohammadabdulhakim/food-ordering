import MainHeading from "@/components/main_heading";
import Menu from "@/components/menu";
import { dp } from "@/lib/prisma";

const OurBestDishes = async () => {
  const bestDishes = await dp.product.findMany({
    take: 3,
    orderBy: { salesCount: 'desc' },
    where:{
      OR: [{type: "TAGINE"}, {type: "KOSHARI"}]
    }
  })

  return (
    <section className="section-gap">
      <div className="container">
        <div className="text-center mb-4">
          <MainHeading desc="Check Out" title="Our Best Dishes" />
        </div>

        <Menu items={bestDishes} />
      </div>
    </section>
  );
};

export default OurBestDishes;
