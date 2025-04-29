import { Button } from "../ui/button";
import { formatCurrency } from "@/lib/formatters";
import Image from "next/image";
import { Product } from "@/lib/generated/prisma";
import { AddToCartButton } from "./AddToCartButton";

const MenuItem = ({item}:{item: Product}) => {
  return (
    <li
      className="border-1 flex items-center justify-between flex-col drop-shadow-lg bg-card rounded-lg p-4 gap-6"
    >
      <Image
        src={item.img}
        width={250}
        height={250}
        alt={item.name}
        className="p-4"
      />

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{item.name}</h3>
          <p className="font-semibold text-accent text-sm">
            {formatCurrency(item.basePrice)}
          </p>
        </div>

        <p className="text-accent text-sm ml-1">{item.desc}</p>
      </div>

      <AddToCartButton item={item} />
    </li>
  );
};

export default MenuItem;
