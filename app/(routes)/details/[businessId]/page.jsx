"use client";
import GlobalApi from "@/app/_services/GlobalApi";
import { signIn, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import BusinessInfo from "../_components/BusinessInfo";
import BusinessDescription from "../_components/BusinessDescription";
import SuggestedBusinessList from "../_components/SuggestedBusinessList";

function BusinessDetails({ params }) {
  const { data, status } = useSession();
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    params && getBusinessById();
  }, [params]);

  useEffect(() => {
    checkUserAuth();
  }, []);

  const checkUserAuth = () => {
    if (status == "loading") {
      return <p>Loading...</p>;
    }
    if (status == "unauthenticated") {
      signIn("descope");
    }
  };

  const getBusinessById = () => {
    GlobalApi.getBusinessById(params.businessId).then((response) => {
      setBusiness(response.businessList);
    });
  };
  return (
    status == "authenticated" &&
    business && (
      <div className="py-8 px-10 md:py-20 md:px-36 ">
        <BusinessInfo business={business} />
        <div className="grid grid-cols-3 mt-16">
          <div className="col-span-3 md:col-span-2">
            <BusinessDescription business={business} />
          </div>
          <div>
            <SuggestedBusinessList business={business} />
          </div>
        </div>
      </div>
    )
  );
}

export default BusinessDetails;
