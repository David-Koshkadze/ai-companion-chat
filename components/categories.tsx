"use client";

import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface CategoryProps {
  categories: Category[];
}

export const Categories = ({ categories }: CategoryProps) => {
  console.log(categories);

  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");

  function onClick(id: string | undefined) {
    const query = { categoryId: id };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      {
        skipNull: true,
      }
    );

    router.push(url);
  }

  return (
    <div className="w-full overflow-x-auto space-x-2 flex p-1">
      <button
        onClick={() => onClick(undefined)}
        className={cn(`
        flex
        items-center
        text-xs
        text-center
        bg-primary/10
        hover:opacity-75
        px-2
        md:px-4
        py-2
        md:py-3
        rounded-lg
        transition
        `)}
      >
        Newest
      </button>

      {categories.map((item) => (
        <button
          onClick={() => onClick(item.id)}
          key={item.id}
          className={cn(
            `
              flex
              items-center
              text-xs
              text-center
              bg-primary/10
              hover:opacity-75
              px-2
              md:px-4
              py-2
              md:py-3
              rounded-lg
              transition
        `,
            item.id === categoryId ? "bg-primary/25" : ""
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
