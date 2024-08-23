import {
  decreaseProductQuantityById,
  deleteProductById,
  increaseProductQuantityById,
  useAppDispatch,
  useAppSelector,
} from '../../store';
import { Button } from './Button';

export const ShoppingCart = () => {
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const totalPrice = items.reduce((acc, val) => acc + val.price, 0);

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
    <div className="absolute top-14 z-50 -ml-52 w-72 bg-white p-5 shadow-md outline outline-1 outline-grey md:h-[500px]">
      <button className="float-end h-8 w-8 rounded-full duration-300 hover:bg-blue-light">
        <i className="bx bx-x"></i>
      </button>

      <h1 className="text-center text-lg font-semibold md:text-2xl">
        Shopping Cart
      </h1>

      <div className="mt-5 flex h-80 w-full flex-col gap-y-5 overflow-y-auto">
        {items.map(({ id, title, author, photoURL, price, quantity }) => (
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
                <small className="text-xs text-blue-grey">
                  per unit ${price}
                </small>
                <p className="mt-1 text-xs">
                  Total:{' '}
                  <span className="font-semibold">${price * quantity}</span>
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
        ))}

        <h1
          className={`${!items.length ? '' : 'hidden'} font-bold text-blue-grey`}>
          no products in the shopping cart
        </h1>
      </div>

      <div
        className={`${items.length ? 'flex' : 'hidden'} flex-col items-center gap-3`}>
        <h3 className="mt-5 text-center">
          Total Price: <span className="font-bold">${totalPrice}</span>
        </h3>

        <Button
          content="Go to pay"
          onClick={() => console.log('buy!!!')}
        />
      </div>
    </div>
  );
};
