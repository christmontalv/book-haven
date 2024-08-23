import { useForm } from '../../hooks';
import { TextField, Footer, Navbar, WrapperContainer } from '../';

const form = {
  fullname: '',
  email: '',
  comment: '',
  phone: '',
};

export const ContactPage = () => {
  const { onInputChange, fullname, email, phone, comment } = useForm(form);

  return (
    <WrapperContainer>
      <Navbar />

      <main className="grid grid-cols-1 gap-y-5 px-3 md:grid-cols-3 md:gap-x-5">
        <div className="flex flex-col sm:flex-row sm:gap-x-3 md:col-span-1 md:flex-col md:gap-x-0">
          <article className="flex items-start rounded-2xl p-5 shadow-md">
            <i className="bx bx-conversation text-4xl text-blue"></i>
            <div className="ml-5">
              <h3 className="font-bold text-blue">Chat to us</h3>
              <p className="text-sm font-normal text-blue-grey">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum velit laborum
              </p>
            </div>
          </article>
          <article className="flex items-start rounded-2xl p-5 shadow-md">
            <i className="bx bx-trending-up text-4xl text-blue"></i>
            <div className="ml-5">
              <h3 className="font-bold text-blue">Help us to improve</h3>
              <p className="text-sm font-normal text-blue-grey">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum velit laborum
              </p>
            </div>
          </article>
        </div>

        <div className="col-span-2 rounded-2xl bg-blue-extra-light px-16 pb-10 pt-3 shadow-md">
          <h3 className="text-center text-3xl font-bold md:text-start">
            Do you have ideas for us? Let us know to continue improving
          </h3>
          <p className="mt-2 text-center text-base font-semibold text-blue-grey md:text-start">
            We talk more about your ideas
          </p>

          <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <TextField
              width="w-full"
              id="fullname"
              name="fullname"
              label="Fullname"
              onChange={onInputChange}
              value={fullname}
            />

            <TextField
              width="w-full"
              id="email"
              name="email"
              label="Email"
              onChange={onInputChange}
              value={email}
            />

            <TextField
              width="w-full"
              id="email"
              name="email"
              label="Email"
              onChange={onInputChange}
              value={email}
            />

            <TextField
              width="w-full"
              id="phone"
              name="phone"
              label="Phone"
              onChange={onInputChange}
              value={phone}
            />

            <TextField
              className="md:col-span-2"
              width="w-full"
              id="comment"
              name="comment"
              label="Comment"
              type="textarea"
              onChange={onInputChange}
              value={comment}
            />
          </form>
        </div>
      </main>

      <div className="mx-3 hidden overflow-x-hidden rounded-xl sm:block">
        <img
          className="w-full"
          src="/assets/about-us.png"
          alt="People working in the office"
        />
      </div>
      <Footer />
    </WrapperContainer>
  );
};
