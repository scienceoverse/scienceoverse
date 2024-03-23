import React from "react";
import Home from "@/components/homepage/homepage";
import Intro from "@/components/homepage/intro";
import UpcomingEvents from "@/components/homepage/UpcomingEvents";

const page = () => {
  return (
    <div>
      <Home />
      <Intro />
      <UpcomingEvents />
    </div>
  );
};

export default page;
