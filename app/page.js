"use client";
import { useEffect, useState } from "react";
import CategoryList from "./_components/CategoryList";
import Hero from "./_components/Hero";
import GlobalApi from "./_services/GlobalApi";
import BusinessList from "./_components/BusinessList";

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    getCategoryList();
    getAllBusinessList();
  }, []);
  const getCategoryList = () => {
    GlobalApi.getCategory().then((response) => {
      setCategoryList(response.categories);
    });
  };

  const getAllBusinessList = () => {
    GlobalApi.getAllBusinessList().then((response) => {
      
      setBusinessList(response.businessLists);
    });
  };
  return (
    <div>
      <Hero />
      <CategoryList categoryList={categoryList} />
      <BusinessList businessList={businessList} title="Popular Business" />
    </div>
  );
}
