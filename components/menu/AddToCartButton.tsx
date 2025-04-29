import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Product } from "@/lib/generated/prisma";
import { dp } from "@/lib/prisma";
import Image from "next/image";
import { Checkbox } from "../ui/checkbox";
import { formatCurrency } from "@/lib/formatters";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function AddToCartButton({ item }: { item: Product }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="w-full !p-5">
          Add To Cart
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>{item.name}</DialogTitle>
          <DialogDescription>{item.desc}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 items-center justify-center">
          <Image width={200} height={200} alt={item.name} src={item.img} />
        </div>
        <Additions />
        <DialogFooter>
          <Button type="submit" className="w-full !p-5">
            Add to Cart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

async function Additions() {
  const additions = await dp.product.findMany({
    where: {
      NOT: {
        OR: [{ type: "TAGINE" }, { type: "KOSHARI" }],
      },
    },
  });

  return (
    <div className="flex flex-col my-4">
      <h3 className="font-semibold">Do you want to pick a ...</h3>
      {additions.map((add, i) => (
        <div className="mx-2">
          {(add.type !== additions[i - 1]?.type || i == 0) && (
            <h4 className="font-semibold mt-2">{add.type} ?</h4>
          )}

            <HoverCard>
              <HoverCardTrigger className="w-full flex items-center space-x-2 space-y-2">
                <Checkbox id={add.id} className="bg-white" />
                <label
                  htmlFor={add.id}
                  className="flex items-center justify-between w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <p>{add.name}</p>

                  <span className="text-accent">
                    {formatCurrency(add.basePrice)}
                  </span>
                </label>
              </HoverCardTrigger>
              <HoverCardContent className="w-40 h-40 p-4">
                <Image src={add.img} fill className="object-contain p-4" alt={add.name} />
              </HoverCardContent>
            </HoverCard>

        </div>
      ))}
    </div>
  );
}
