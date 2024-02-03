import React from "react";
import axios from "axios";

const fetchData = async () => {
  const res = await axios("http://localhost:3000/api/about");
  const data = await res.data;
  console.log(data);
};

export default async function page() {
  const getData = await fetchData();

  return (
    <div>
      <p className="text-xl font-semibold uppercase">About</p>
    </div>
  );
}
