import { Product } from "@/lib/generated/prisma";
import MenuItem from "./MenuItem";

const index = ({ items }: { items: Product[] }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
      {items.map((dish) => (
        <MenuItem key={dish.id} item={dish} />
      ))}
    </ul>
  );
};

export default index;
