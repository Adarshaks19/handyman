"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import GlobalApi from "@/app/_services/GlobalApi";
import { Mail, Phone, PhoneCall } from "lucide-react";
import Image from "next/image";

function About() {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((response) => {
      console.log(response.categories);
      setCategoryList(response.categories);
    });
  };
  return (
    <div className="flex flex-col">
      <div className="my-3">
        <h2 className="text-lg font-bold text-primary">About Us</h2>
        <p className="">
          Welcome to Handyman, your go-to destination for all your home service
          needs.
        </p>
      </div>
      <div className="my-3">
        <h2 className="text-lg font-bold text-primary">Our Story</h2>
        <p>
          Here at Handyman, we started with a simple idea: to make it easier for
          homeowners to find reliable and skilled professionals for their home
          maintenance and repair tasks.
        </p>
        <p className="font-italic">Our journey began...</p>
      </div>
      <div className="my-3">
        <h2 className="text-lg font-bold text-primary">Our Services</h2>
        <p>
          At Handyman, we offer a wide range of services to meet your home
          maintenance needs:
        </p>
        <div className="flex flex-col my-2 gap-1">
          {categoryList.map((category, index) => (
            <Link
              href={"/search/" + category.name}
              className={`flex items-center gap-2 p-5 rounded-lg cursor-pointer transition-all ease-in-out hover:scale-110 `}
            >
              {category?.icon && (
                <Image
                  src={category.icon.url}
                  alt="icon"
                  width={35}
                  height={35}
                />
              )}
              <h2 className="text-primary">{category.name}</h2>
            </Link>
          ))}
        </div>
      </div>

      {/* Add more content about your team, customer satisfaction, community involvement, etc. */}
      <div className="my-3 mb-10">
        <h2 className="text-lg font-bold text-primary"> Contact Us</h2>
        <p>
          If you have any questions or would like to book a service, please
          don't hesitate to get in touch with us:
        </p>
        <div className="flex items-center gap-2">
          <Phone />
          <p>Phone: +91 8294205868</p>
        </div>
        <div className="flex items-center gap-2">
          <Mail />
          <p>Email: info@handyman.com</p>
        </div>
      </div>

      {/* Add your social media links */}
    </div>
  );
}

export default About;
