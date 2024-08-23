import { useState } from 'react';
import {
  Banner,
  BestSeller,
  Categories,
  Footer,
  LoginModal,
  Navbar,
  OrderFulfillment,
  RegisterModal,
  WrapperContainer,
} from '../';

export const HomePage = () => {
  const [modalLoginIsOpen, _setModalLoginIsOpen] = useState(false);
  const [modalRegisterIsOpen, _setModalRegisterIsOpen] = useState(false);

  return (
    <>
      <WrapperContainer
        className={modalLoginIsOpen || modalRegisterIsOpen ? 'opacity-40' : ''}>
        <Navbar />
        {/* Modals */}
        {/* </> */}
        <Banner />
        <OrderFulfillment />
        <Categories />
        <BestSeller />
        <Footer />
      </WrapperContainer>

      {modalLoginIsOpen && <LoginModal />}
      {modalRegisterIsOpen && <RegisterModal />}
    </>
  );
};
