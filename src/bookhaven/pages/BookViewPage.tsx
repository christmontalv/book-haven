import { useParams } from 'react-router-dom';
import { Button, Footer, Navbar, WrapperContainer } from '..';
import { useEffect, useState } from 'react';
import { Book } from '../../types';
import { useAppSelector } from '../../store';

const DetailLabel = ({
  classNameIcon,
  content,
}: {
  classNameIcon: string;
  content: string;
}) => {
  return (
    <button className="w-[70px] cursor-default rounded-md p-1 outline outline-[1px] outline-blue">
      <i className={`${classNameIcon} text-xs text-blue md:text-xl`}></i>
      <small className="block text-xs text-blue">{content}</small>
    </button>
  );
};

export const BookViewPage = () => {
  const { id } = useParams();
  const { items } = useAppSelector((state) => state.product);
  const [amountValue, setAmountValue] = useState(1);
  const [showAllDescription, setShowAllDescription] = useState(false);
  const [bookState, setBookState] = useState<Book>();

  useEffect(() => {
    const book = items.find((item) => item.id === id) as Book;
    setBookState(book);
  }, []);

  return (
    <>
      <WrapperContainer>
        <Navbar />

        <div className="flex flex-wrap justify-center gap-3">
          <DetailLabel
            classNameIcon="bx bx-spreadsheet"
            content="193 pag."
          />

          <DetailLabel
            classNameIcon="bx bx-buildings"
            content="Book INC."
          />

          <DetailLabel
            classNameIcon="bx bx-calendar"
            content="23/09/2018"
          />

          <DetailLabel
            classNameIcon="bx bx-receipt"
            content="English"
          />
        </div>

        <main className="mx-3 grid grid-cols-1 grid-rows-[auto_auto] px-5 sm:grid-cols-2 sm:grid-rows-1">
          <div className="flex items-center justify-center">
            <img
              className="w-full border-l-[15px] border-l-blue shadow-lg sm:w-3/4"
              src={bookState?.photoURL}
              alt="Book Image"
            />
          </div>

          <div className="py-5">
            <h1 className="text-2xl font-bold text-blue sm:text-start">
              Fullmetal Alchemist
            </h1>
            <small className="text-center font-semibold italic text-blue-grey sm:text-start">
              By Hiromu Arakawa
            </small>

            <div className="mt-6">
              <p className={showAllDescription ? '' : 'line-clamp-2'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                debitis quia facilis tempora rerum? Harum repellendus error ex
                facere minus magni odio nemo quod. Odit, sapiente. Quibusdam
                asperiores iure aliquid?
              </p>
              <button
                onClick={() => setShowAllDescription(!showAllDescription)}
                className="block text-blue hover:opacity-80">
                {showAllDescription ? 'See less' : 'See more'}
                <i className="bx bx-chevron-down block text-xl"></i>
              </button>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Genders:</h3>
              <p>Romance, action, adventure, terror, fantasy.</p>
            </div>

            <p className="mt-6">
              Amount:{' '}
              <select
                onChange={(e) => setAmountValue(Number(e.target.value))}
                value={amountValue}
                className="mt-30 inline w-20 text-center font-bold">
                {Array.from({ length: 5 }, (_, i) => i + 1).map((amount) => (
                  <option
                    key={amount}
                    value={amount}>
                    {amount} units
                  </option>
                ))}
              </select>
            </p>

            <div className="mt-6 flex flex-col gap-2">
              <Button
                content="Buy"
                onClick={() => {}}
                iconClassName="bx bx-cart-download"
                className="w-full sm:w-48"
              />

              <Button
                content="Add"
                variant="outline"
                onClick={() => {}}
                iconClassName="bx bx-cart-add"
                className="w-full sm:w-48"
              />
            </div>
          </div>
        </main>
        <Footer />
      </WrapperContainer>
    </>
  );
};
