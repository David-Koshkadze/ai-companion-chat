import { Categories } from "@/components/categories";
import SearchInput from "@/components/search-input";
import prismadb from "@/lib/prisma_db";
import React from "react";

export default async function RootPage() {
  const categories = await prismadb.category.findMany();

  console.log(categories)

  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
      <Categories categories={categories}/>
    </div>
  );
}
