import { useState } from 'react';

const stars = Array.from({ length: 5 }, () => '');

export const BestSeller = () => {
  const [isHoverButton, setIsHoverButton] = useState(false);

  const onMouseOverAndOutToggle = () => {
    setIsHoverButton(!isHoverButton);
    console.log(isHoverButton);
  };

  return (
    <section className="mb-5 px-3">
      <article className="flex flex-col overflow-hidden rounded-3xl shadow-xl sm:grid-cols-2 sm:grid-rows-1 sm:flex-row">
        <div className="px-10 py-16 sm:w-1/2">
          <h1 className="text-2xl font-extrabold text-blue sm:text-4xl">
            Best Seller
          </h1>

          <p className="mt-3 text-base font-semibold sm:mt-6 sm:text-lg">
            Don't miss out on the best-selling book in our store! Our customers
            love it, and the reviews are raving. This best seller has taken the
            charts by storm and promises to hook you from the first page. Hurry
            and grab your copy to find out why everyone is talking about it!
          </p>
          <div>
            <br />
            {stars.map((_, i) => (
              <i
                key={i}
                className="bx bxs-star text-2xl text-yellow"></i>
            ))}
          </div>
          <p className="inline font-semibold">5.0</p>
        </div>
        <div className="flex items-center justify-center overflow-hidden bg-blue-medium object-cover sm:w-1/2">
          <img
            className={`h-full ${isHoverButton ? 'scale-150 opacity-50' : ''}  object-cover duration-300`}
            src="/assets/discounts.jpg"
            alt="Book Image"
          />
          <button
            className="absolute z-10 border-[2px] border-white p-2 text-lg text-white sm:font-semibold"
            onMouseOver={onMouseOverAndOutToggle}
            onMouseOut={onMouseOverAndOutToggle}>
            See more
          </button>
        </div>
      </article>
    </section>
  );
};
