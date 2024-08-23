import { useState } from 'react';
import {
  BookCard,
  Button,
  Footer,
  Navbar,
  WrapperContainer,
} from '../components';

const arr = Array.from({ length: 9 }, (_, i) => `book_${i}`);

const categories = [
  'Romance',
  'Action',
  'Sci-Fi',
  'Drama',
  'Horror',
  'Novel Drama',
  'Terror',
  'Zombies',
  'War',
  'Adventure',
  'Magic',
  'Fantasy',
];

export const ProductsPage = () => {
  const [isShowFilterCategories, setIsShowFilterCategories] = useState(false);

  const onShowFilterCategoriesToggle = () => {
    setIsShowFilterCategories(!isShowFilterCategories);
  };

  return (
    <WrapperContainer>
      <Navbar />
      <h1 className="text-center text-xl font-bold sm:text-2xl md:text-4xl">
        Our Products
      </h1>

      <main className="grid grid-cols-1 px-3 md:grid-cols-3">
        <div className="md:col-span-1 md:pr-3">
          {/* Input with button */}
          <div className="w-full">
            <input
              className="w-full rounded-md border-[1px] border-blue-grey p-1 outline-blue"
              placeholder="Book name"
              type="text"
            />
            <button className="absolute z-10 -ml-28 w-28 rounded-r-md border-[1px] border-blue bg-blue p-1 font-semibold text-white duration-300 hover:opacity-75">
              Search
              <i className="bx bx-search-alt-2 absolute ml-1 text-xl"></i>
            </button>
          </div>

          {/* Desktop Components*/}
          <h3 className="mt-3 hidden text-2xl font-bold md:block">
            Search by genders
          </h3>

          <div className="hidden flex-col gap-2 md:flex">
            {categories.map((category) => (
              <div key={`d-${category}`}>
                <input
                  type="checkbox"
                  className="inline"
                  value={category}
                  id={`d-${category}`}
                  name={`d-${category}`}
                />
                <label
                  className="ml-3 inline"
                  htmlFor={`d-${category}`}>
                  {category}
                </label>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <Button
            iconClassName="bx bx-filter-alt"
            className="mt-3 md:hidden"
            variant="outline"
            content={isShowFilterCategories ? 'Close' : 'Filter'}
            onClick={onShowFilterCategoriesToggle}
          />

          <hr className="mt-3 md:hidden" />

          <ul
            className={`${isShowFilterCategories ? 'h-full' : 'h-0'} absolute left-0 z-10 w-full overflow-y-hidden bg-white px-3 duration-300 md:hidden`}>
            {categories.map((category) => (
              <li key={`m-${category}`}>
                <input
                  type="checkbox"
                  value={category}
                  id={`m-${category}`}
                  name={`m-${category}`}
                  onClick={() => console.log('checkbox', category)}
                />
                <label
                  className="ml-2 inline"
                  htmlFor={`m-${category}`}>
                  {category}
                </label>
              </li>
            ))}
            <Button
              className={`mt-2 ${isShowFilterCategories ? 'block' : 'hidden'}`}
              content="Start"
              iconClassName="bx bxs-send"
              onClick={() => console.log('Start Filter!')}
            />
          </ul>
        </div>

        <div className="col-span-2 mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 md:mt-0">
          {arr.map((key) => (
            <BookCard key={key} />
          ))}
        </div>
      </main>
      <Footer />
    </WrapperContainer>
  );
};
