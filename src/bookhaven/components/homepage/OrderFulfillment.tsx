import { SectionTitle } from './SectionTitle';

const orderStatuses = [
  {
    title: 'Order processing',
    content:
      'Involves receiving and preparing orders for shipment, ensuring that products are ready to be delivered to customers.',
    iconClassName: 'bx bx-notepad',
  },
  {
    title: 'Packing and labeling',
    content:
      'In this step, products are securely packaged and appropriately labeled for shipment, including adding shipping labels with customer addresses and other relevant information.',
    iconClassName: 'bx bx-package',
  },
  {
    title: 'Shipping and delivery',
    content:
      'The packaged items are sent out using courier services or carriers and delivered to the customers, ensuring a smooth and timely delivery process.',
    iconClassName: 'bx bxs-shopping-bags',
  },
];

export const OrderFulfillment = () => {
  return (
    <section>
      <SectionTitle content="Order Fullfillment" />

      <ul className="grid grid-cols-1 gap-5 border-[1px] border-grey px-5 py-10 text-center sm:grid-cols-3">
        {orderStatuses.map(({ title, content, iconClassName }) => (
          <li
            key={title}
            className="p-7 shadow-md md:p-7">
            <i className={`${iconClassName} text-7xl text-blue`}></i>
            <h1 className="mt-1 text-lg font-semibold text-blue opacity-70">
              {title}
            </h1>
            <p className="mt-2 text-blue-grey">{content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
