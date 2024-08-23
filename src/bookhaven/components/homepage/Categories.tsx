import { useEffect, useRef, useState } from 'react';
import { BookCard, Button } from '../../';
import { usePagination } from '../../hooks/usePagination';
import { SectionTitle } from './';
import { useAppSelector } from '../../../store';

const categories = ['All', 'Action', 'Romance', 'Sci-Fi', 'Terror'];

export const Categories = () => {
  const { items } = useAppSelector((state) => state.product);

  const {
    currentPage,
    onNextPage,
    onPreviousPage,
    isTheFirstPage,
    isTheLastPage,
  } = usePagination(items, 8);
  const sectionRef = useRef<HTMLTableSectionElement>(null);
  const [isTheFirstRender, setIsTheFirstRender] = useState(true);

  useEffect(() => {
    if (sectionRef.current && !isTheFirstRender) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsTheFirstRender(!isTheFirstRender);
    }
  }, [currentPage]);

  return (
    <section
      ref={sectionRef}
      className="px-3">
      <SectionTitle content="Categories" />

      <div className="inline-block w-full text-center">
        {categories.map((category) => (
          <Button
            key={category}
            content={category}
            onClick={() =>
              console.log(`Category ${category} has been selected.`)
            }
            className="mr-1"
          />
        ))}

        <Button
          content={'view more'}
          variant="outline"
          onClick={() => console.log('view more categories')}
          className="mt-2"
        />
      </div>

      <hr className="mt-3" />

      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-8 md:grid-cols-4 md:gap-10">
        {items.map((item) => (
          <BookCard
            {...item}
            key={item.id}
          />
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-2">
        <Button
          disabled={isTheFirstPage}
          variant="outline"
          content="<"
          onClick={onPreviousPage}
        />
        <Button
          content={!isTheLastPage ? currentPage : currentPage - 1}
          variant={!isTheLastPage ? 'solid' : 'outline'}
          onClick={() => {
            if (isTheLastPage) {
              onPreviousPage();
            }
          }}
        />
        <Button
          content={!isTheLastPage ? currentPage + 1 : currentPage}
          onClick={() => {
            if (!isTheLastPage) {
              onNextPage();
            }
          }}
          variant={!isTheLastPage ? 'outline' : 'solid'}
        />
        <Button
          disabled={isTheLastPage}
          content=">"
          variant="outline"
          onClick={onNextPage}
        />
      </div>
    </section>
  );
};
