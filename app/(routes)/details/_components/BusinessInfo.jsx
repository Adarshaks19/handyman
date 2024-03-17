import { Button } from "@/components/ui/button";
import { MapPin, Mail, Share, User, Clock } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

function BusinessInfo({ business }) {
  const [copied, setCopied] = useState(false);

  const copyUrlToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
        toast("Link Copied Successfully");
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  };

  return (
    <div className="md:flex gap-4 items-center">
      {business.images && business.images[0] && (
        <Image
          className="rounded-full h-[150px] object-cover"
          src={business?.images[0]?.url}
          alt={business.name}
          width={150}
          height={200}
        />
      )}
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col items-baseline gap-3 mt-4 md:mt-0 ">
          <h2 className="text-primary bg-purple-100 rounded-full p-1 px-3 text-lg">
            {business?.category?.name}
          </h2>
          <h2 className=" text-[40px] font-bold">{business.name}</h2>
          <h2 className="flex gap-2 text-lg text-gray-500">
            <MapPin />
            {business.address}
          </h2>
          <h2 className="flex gap-2 text-lg text-gray-500">
            <Mail />
            {business?.email}
          </h2>
        </div>
        <div className="flex flex-col gap-5 items-end">
          <Button onClick={copyUrlToClipboard}>
            <Share />
          </Button>
          <h2 className="flex gap-2 text-xl text-primary">
            <User /> {business.contactPerson}
          </h2>
          <h2 className="flex gap-2 text-xl text-gray-500">
            <Clock /> Available 10:00AM to 10:00PM
          </h2>
        </div>
      </div>
    </div>
  );
}

export default BusinessInfo;
