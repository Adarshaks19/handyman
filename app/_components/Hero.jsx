import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center pt-14 pb-7 gap-3">
      <h2 className="font-bold text-[46px] text-center">
        Find Home
        <span className="text-primary"> Service/Repair </span>
        <br />
        Near You
      </h2>
      <h2 className="text-xl text-gray-400">
        Explore Home/Service Repair near you
      </h2>
      <div className="mt-4 flex gap-6">
        <Input placeholder="Search" className="rounded-full md:w-[350px]" />
        <Button className="rounded-full h-[46px]">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
