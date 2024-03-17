"use client";
import BusinessList from "@/app/_components/BusinessList";
import GlobalApi from "@/app/_services/GlobalApi";
import React, { useState } from "react";
import { useEffect } from "react";

function BusinessByCategory({ params }) {
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    params && getBusinessList();
  }, [params]);

  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(params.category).then((response) => {
      setBusinessList(response?.businessLists);
    });
  };
  return (
    <div>
      <BusinessList businessList={businessList} title={params.category} />
    </div>
  );
}

export default BusinessByCategory;
