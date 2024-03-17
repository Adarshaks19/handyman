"use client";

import React from "react";
import { useState, useEffect } from "react";
import GlobalApi from "@/app/_services/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function CategorySideBar() {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const params = usePathname();
  const category = params.split("/")[2];

  useEffect(() => {
    setSelectedCategory(category);
  }, [category]);

  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = () => {
    GlobalApi.getCategory().then((response) => {
      setCategoryList(response.categories);
    });
  };
  return (
    <div>
      <h2 className="font-bold m-3 text-lg text-primary">Categories</h2>
      <div>
        {categoryList.map((category, index) => (
          <Link
            href={"/search/" + category.name}
            className={`flex gap-2 p-3 border rounded-lg mb-3 mr-10 cursor-pointer hover:bg-purple-50 hover:text-primary hover:border-primary hover:shadow-md items-center ${
              selectedCategory == category.name &&
              "border-primary text-primary shadow-md bg-purple-50"
            }`}
            key={index}
          >
            <Image src={category.icon.url} alt="icon" width={30} height={30} />
            <h2>{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategorySideBar;
