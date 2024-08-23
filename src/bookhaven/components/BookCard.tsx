import { useNavigate } from 'react-router-dom';
import { addProductToCart, useAppDispatch } from '../../store';
import { Book } from '../../types';
import { Button } from './Button';

export const BookCard = ({
  id,
  title,
  description,
  author,
  photoURL,
  genders,
  price,
  stock,
}: Book) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onNavigateToProductBook = () => {
    navigate(`/products/${id}`);
  };

  const onAddProductToCart = () => {
    dispatch(
      addProductToCart({
        id,
        title,
        price,
        author,
        photoURL,
        description,
        stock,
        genders,
      }),
    );
  };

  return (
    <article className="text-center shadow-md">
      <img
        className="w-full"
        src={photoURL}
        alt="Book Product Image"
      />
      <div className="mt-3 flex flex-col items-center">
        <h1 className="text-base font-bold text-blue opacity-70">{title}</h1>
        <p>{price}</p>
        <div className="mt-3 flex w-full">
          <Button
            onClick={onNavigateToProductBook}
            content="more"
            rounded={false}
            variant="outline"
            className="w-full"
            iconClassName="bx bx-link-external"
          />
          <Button
            onClick={onAddProductToCart}
            content="add"
            rounded={false}
            className="w-full"
            iconClassName="bx bx-cart-add"
          />
        </div>
      </div>
    </article>
  );
};
