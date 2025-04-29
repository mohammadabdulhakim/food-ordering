import MainHeading from "@/components/main_heading";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/formatters";
import { dp } from "@/lib/prisma";
import Image from 'next/image';

const OurBestDishes = async () => {
  const bestDishes = await dp.product.findMany({
    take: 3,
    orderBy: { salesCount: 'desc' },
  })

  return (
    <section className="section-gap">
      <div className="container">
        <div className="text-center mb-4">
          <MainHeading desc="Check Out" title="Our Best Dishes" />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
          {bestDishes.map((dish)=>(
            <li key={dish.id} className="border-1 flex items-center justify-between flex-col drop-shadow-lg bg-card rounded-lg p-4 gap-6">
              <Image src={dish.img} width={250} height={250} alt={dish.name} className="p-4" />

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                  {dish.name}
                  </h3>
                  <p className="font-semibold text-accent text-sm">
                    {formatCurrency(dish.basePrice)}
                  </p>
                </div>

              <p className="text-accent text-sm ml-1">
                {dish.desc}
              </p>
              </div>

              <Button className="w-full !p-5">
                Add To Cart
              </Button>

            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurBestDishes;
