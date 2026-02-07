import React, { useState } from "react";
import { deletePost, fetchPost } from "../../Api/api";
import {
  keepPreviousData,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => fetchPost(pageNumber),
    placeholderData: keepPreviousData,
    // staleTime: 5000,
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true,
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      queryClient.setQueryData(["posts", pageNumber], (curElm) => {
       return curElm?.filter((post) => post.id !== id);
      });
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return (
    <div>
      <section className="body-font">
        <div className=" px-5  ">
          <div className="flex flex-wrap m-4 ">
            {data?.map((curElm) => {
              const { id, title, body } = curElm;
              return (
                <div
                  key={id}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full border gap-2"
                >
                  <NavLink to={`/rq/${id}`}>
                    <div className="mt-4 text-justify">
                      <p>{id}</p>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {title}
                      </h2>
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {body}
                      </h3>
                    </div>
                  </NavLink>
                  <button
                    onClick={() => deleteMutation.mutate(id)}
                    className="bg-red-400 font-bold text-white rounded-2xl py-1 px-3 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
          <div className="flex pl-4 gap-6">
            <button
              disabled={pageNumber === 0}
              onClick={() => setPageNumber((prev) => prev - 8)}
              className="bg-blue-700 px-3 py-1 rounded-xl text-white cursor-pointer"
            >
              Prev
            </button>
            <h2>{pageNumber / 8 + 1} </h2>
            <button
              onClick={() => setPageNumber((prev) => prev + 8)}
              className="bg-blue-700 px-3 py-1 rounded-xl text-white cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FetchRQ;
