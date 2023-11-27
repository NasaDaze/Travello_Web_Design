import React from "react";

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mx-5">
      {/* Single Card Element */}
      <div className="card w-200 border-b-2 border-l-2 hover:border-violet-600 hover:scale-105 hover:transition-all bg-white shadow-md text-black drop-shadow-xl ">
        <figure className="px-3 pt-3">
          <img
            src="./src/assets/Sea.jpg"
            alt="Yayy water"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">Putankina</h2>
          <p className="pb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            libero sit assumenda magnam omnis corrupti consectetur, autem
            distinctio vel suscipit error! At culpa eaque quia, aperiam
            exercitationem aspernatur, tenetur nemo illo atque modi corporis
            repe
          </p>
          {/* If we need a button we can add it here */}
          <div className="card-actions"></div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card w-200 bg-white shadow-md text-black drop-shadow-xl">
        <figure className="px-3 pt-3">
          <img
            src="./src/assets/Canyon.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">Putankina</h2>
          <p className="pb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            libero sit assumenda magnam omnis corrupti consectetur, autem
            distinctio vel suscipit error! At culpa eaque quia, aperiam
            exercitationem aspernatur, tenetur nemo illo atque modi corporis
            repe
          </p>
          {/* If we need a button we can add it here */}
          <div className="card-actions"></div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card w-200 bg-white shadow-md text-black drop-shadow-xl">
        <figure className="px-3 pt-3">
          <img
            src="./src/assets/Stone.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">Putankina</h2>
          <p className="pb-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            libero sit assumenda magnam omnis corrupti consectetur, autem
            distinctio vel suscipit error! At culpa eaque quia, aperiam
            exercitationem aspernatur, tenetur nemo illo atque modi corporis
            repe
          </p>
          {/* If we need a button we can add it here */}
          <div className="card-actions"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
