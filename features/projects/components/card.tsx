import React from "react";

const Card = () => {
  return (
    <div
      className="h-[450px] sm:h-[280px] w-full sm:w-[45%] md:w-[30%] flex flex-col justify-end dark:bg-blue-950/40 bg-gray-100 drop-shadow-lg cursor-pointer rounded-4xl px-5 py-6 hover:scale-[1.01]"
      tabIndex={0}
    >
      <h2 className="text-2xl">Project 1</h2>
      <p
        className="text-muted-foreground text-xs pt-3 text-wrap text-ellipsis line-clamp-3"
        title="asd"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
        molestias quia? Excepturi numquam, esse assumenda necessitatibus magnam
        quas dolorem quis repellat itaque pariatur, vero nobis asperiores velit
        laborum. Ipsam, error!
      </p>
    </div>
  );
};

export default Card;
