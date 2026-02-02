import React from "react";
import { fetchPost } from "../../Api/api";
import { useQuery } from "@tanstack/react-query";

const FetchRQ = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPost,
  });

  if(isLoading) return <p>Loading...</p>
  if(isError) return <p>Error: {error.message}</p>
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap m-4 ">
            {data?.map((curElm) => {
              const { id, title, body } = curElm;
              return (
                <div
                  key={id}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full border gap-2"
                >
                  <div className="mt-4 text-justify">
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {title}
                    </h2>
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {body}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FetchRQ;
