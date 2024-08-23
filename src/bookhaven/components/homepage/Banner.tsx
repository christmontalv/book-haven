import { Button } from '..';

export const Banner = () => {
  return (
    <section className="grid gap-11 px-3 md:grid-cols-2 md:gap-0 md:text-start">
      <div className="row-span-6 text-center md:col-span-1 md:text-start">
        <h1 className="text-5xl font-bold md:text-6xl md:font-extrabold">
          Your literary adventure starts here.
        </h1>

        <small className="font-semibold uppercase text-blue md:text-base">
          Embark on an unparalleled literary journey.
        </small>

        <p className="mt-5 font-semibold md:text-3xl">
          Fast shipping. Exceptional service. Your reading experience starts
          here! 📚✨
        </p>

        <div className="mt-2">
          <Button
            content="more"
            onClick={() => console.log('click more')}
            className="mr-1 w-20 md:w-28"
          />
          <Button
            content="discounts"
            onClick={() => console.log('click #discounts')}
            className="w-20 md:w-28"
          />
        </div>
      </div>

      <div className="row-span-6 flex content-center items-center justify-center py-1 sm:justify-center md:col-span-1">
        <img
          className="mb-8 w-96 rounded-b-full rounded-tl-full"
          id="girl-book-image"
          src="/assets/girl-book.png"
          alt="girl-book"
        />
      </div>
    </section>
  );
};
