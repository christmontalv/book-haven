import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="z-10 grid grid-cols-1 grid-rows-2 place-items-center rounded-t-3xl bg-blue-light px-3 md:grid-cols-2 md:grid-rows-1">
      <div className="flex flex-row gap-8 py-3">
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-blue">Sections</h3>
          <ul className="mt-2 flex flex-col items-center gap-1 text-blue-grey">
            <Link
              reloadDocument
              to="/">
              home
            </Link>
            <Link
              reloadDocument
              to="/products">
              products
            </Link>
            <Link
              reloadDocument
              to="/contact">
              contact
            </Link>
            <Link
              reloadDocument
              to="/about-us">
              about us
            </Link>
          </ul>
        </div>
      </div>
      <div className="py-3 text-center md:text-start">
        <h3 className="text-2xl font-extrabold text-blue">
          ¡Don't miss out on our deals!
        </h3>
        <p className="mt-2 text-blue-grey">
          Don't miss the news to come, stay up to date by entering your email to
          start receiving offers.
        </p>
        <div className="mt-2 w-full">
          <input
            className="w-full rounded-md p-2"
            placeholder="enter your email"
            type="text"
          />
          <button className="absolute z-10 -ml-28 w-28 rounded-r-md bg-blue p-2 font-semibold text-white duration-300 hover:opacity-75">
            send email
          </button>
        </div>

        <small className=" text-blue-grey">
          All rights reserved to @christmontalv&pexels
        </small>
      </div>
    </footer>
  );
};
