import {
  decreaseProductQuantityById,
  deleteProductById,
  increaseProductQuantityById,
  useAppDispatch,
} from '../../store';
import { Book } from '../../types';

interface CartProduct extends Book {
  quantity: number;
}

export const ShoppingCartItem = ({
  id,
  title,
  author,
  photoURL,
  price,
  quantity,
}: CartProduct) => {
  const dispatch = useAppDispatch();

  const onIncreaseProduct = (id: string) => {
    dispatch(increaseProductQuantityById({ id }));
  };

  const onDecreaseProduct = (id: string) => {
    dispatch(decreaseProductQuantityById({ id }));
  };

  const onDeleteProduct = (id: string) => {
    dispatch(deleteProductById({ id }));
  };

  return (
    <article
      key={id}
      className="flex w-full items-center justify-between rounded-xl p-3 shadow-sm">
      <div className="flex items-center gap-3">
        <img
          className="w-12 object-cover"
          src={photoURL}
          alt="Book Product Image"
        />
        <div>
          <h3 className="text-md font-bold text-blue">{title}</h3>
          <p className="text-xs font-semibold text-blue-grey">{author}</p>
          <small className="text-xs text-blue-grey">per unit ${price}</small>
          <p className="mt-1 text-xs">
            Total: <span className="font-semibold">${price * quantity}</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center gap-y-1">
          <button
            className="flex h-7 w-7 justify-center rounded-full bg-blue-extra-light"
            onClick={() => onIncreaseProduct(id)}>
            +
          </button>
          <p className="text-xs">{quantity}</p>
          <button
            className="flex h-7 w-7 justify-center rounded-full bg-blue-extra-light"
            onClick={() => onDecreaseProduct(id)}>
            -
          </button>
        </div>

        <button onClick={() => onDeleteProduct(id)}>
          <i className="bx bx-trash-alt"></i>
        </button>
      </div>
    </article>
  );
};
