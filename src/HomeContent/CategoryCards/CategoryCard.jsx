import React from "react";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const CategoryCard = ({ toy }) => {
  // pic,name,price,rating,view details button
  return (
    <div>
      <div className="card h-full card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="object-cover h-52" src={toy?.photo} alt="Shoes" />
        </figure>
        <div className="card-body space-y-1">
          <h2 className="font-bold text-2xl text-center">{toy?.name}</h2>
          <div className="w-28 mx-auto">
            <p>price:- ${toy?.price}</p>
            <div>
              <Rating value={Math.floor(toy.rating)} readOnly></Rating>
            </div>
          </div>
          <div className="card-actions justify-center relative">
            <Link
              to={`/details/${toy._id}`}
              className="btn bg-gradient-to-r bottom-0 from-gray-950 border-e-[12px] border-s-[12px] to-sky-400 hover:text-yellow-500 hover:font-extrabold"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
