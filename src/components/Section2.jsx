import React from "react";

const Section2 = () => {
  return (
    <div className="text-black mt-10 w-full mb-10">
      {/* Content */}
      <div className="w-full max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-4 gap-3">
        <img
          className="rounded-l w-[400px] sm:block mx-auto my-4 translate-y-10 shadow-purple-600/40 drop-shadow-l"
          src="./src/assets/Bridge.jpg"
          alt=""
        />
        <img
          className="rounded-l lg:w-[400px] hidden sm:block mx-auto  my-4 shadow-purple-600/40 drop-shadow-l"
          src="./src/assets/Kayak.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center p-5 col-span-2">
          <h2 className="text-lg font-bold md:text-4xl sm:text-3xl row-span-2 text-left pb-3 mt-4">
            Taal Volcano, Batangas
          </h2>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            deleniti perferendis neque molestiae voluptatibus adipisci. Aut
            porro, facilis amet quasi facere nihil provident modi quas possimus
            consectetur, enim vel ut at temporibus quisquam, tempora odio fuga
            unde alias voluptate. Eius voluptatem distinctio, corrupti minus
            tenetur deleniti numquam ea corporis nobis veniam earum autem eum
            hic unde perferendis repellendus a ducimus maxime fugit, nemo ullam
            aliquam sequi ratione deserunt. Ut dignissimos fuga dolorem expedita
            possimus debitis dolor saepe nisi ipsam est molestiae molestias
            numquam voluptas neque beatae iure architecto illo illum provident,
            laboriosam quod.
          </p>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Section2;
