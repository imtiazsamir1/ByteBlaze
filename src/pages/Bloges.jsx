import React, { useEffect, useState } from "react";
import{useLoaderData} from 'react-router-dom'
const Bloges = () => {
  //const [bloges, setBloges] = useState([]);

  //useEffect(() => {
   // fetch("https://dev.to/api/articles?per_page=20&top=7")
     // .then((res) => res.json())
     // .then((data) => setBloges(data))
     // .catch((err) => console.error(err));
 // }, []);


const blogs =useLoaderData()




  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 ">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        {/* Featured Blog (first item) */}
        {blogs.length > 0 && (
          <a
            rel="noopener noreferrer"
            href={blogs[0].url}
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <img
              src={blogs[0].cover_image || "https://source.unsplash.com/random/480x360"}
              alt={blogs[0].title}
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {blogs[0].title}
              </h3>
              <span className="text-xs dark:text-gray-600">
                {new Date(blogs[0].published_at).toDateString()}
              </span>
              <p>{blogs[0].description}</p>
            </div>
          </a>
        )}

        {/* Grid of other blogs */}
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(1).map((blog) => (
            <a
              key={blog.id}
              rel="noopener noreferrer"
              href={blog.url}
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={blog.cover_image || "https://source.unsplash.com/random/480x360"}
                alt={blog.title}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {blog.title}
                </h3>
                <span className="text-xs dark:text-gray-600">
                  {new Date(blog.published_at).toDateString()}
                </span>
                <p>{blog.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
          >
            Load more posts...
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bloges;
