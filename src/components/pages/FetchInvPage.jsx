import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchInvPost } from "../../Api/api";
import { NavLink, useParams } from "react-router-dom";

const FetchInvPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchInvPost(id),
  });
  console.log(data);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return (
    <div className="mt-4 text-justify px-20">
      <p>Post Id Number: {data.id}</p>
      <h2 className="text-gray-900 title-font text-lg font-medium">{data.title}</h2>
      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
        {data.body}
      </h3>
      <NavLink to={'/rq'}><button className="bg-orange-400 px-4 py-1 font-bold cursor-pointer">Go Back</button></NavLink>
    </div>
  );
};

export default FetchInvPage;
