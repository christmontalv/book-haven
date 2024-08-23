import { FormEvent } from 'react';
import { Button, TextField } from './';

export const RegisterModal = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('onSubmit!!!');
  };

  return (
    <div className="fixed left-[calc(50%_-_150px)] top-[calc(50%_-_225px)] z-50 h-[450px] w-[300px] bg-white px-10 py-14 opacity-100 shadow-md outline outline-[2px] outline-grey duration-300 hover:shadow-lg md:block">
      <button className="ml-full absolute right-0 top-0 mr-3 mt-3 h-8 w-8 rounded-full duration-300 hover:bg-blue-light">
        <i className="bx bx-x text-xl"></i>
      </button>
      <h3 className="text-center text-2xl font-bold">Register</h3>

      <form
        className="mt-3"
        onClick={onSubmit}>
        <TextField
          className="mt-5"
          width="w-full"
          id="fullname"
          label="Fullname"
          name="fullname"
          onChange={() => console.log('hehe')}
          value=""
        />

        <TextField
          className="mt-5"
          width="w-full"
          id="username"
          label="Username"
          name="username"
          onChange={() => console.log('hehe')}
          value=""
        />

        <TextField
          className="mt-5"
          width="w-full"
          id="password"
          label="Password"
          name="password"
          onChange={() => console.log('hehe')}
          value=""
        />

        <div className="mt-8 grid grid-cols-2 gap-1">
          <Button
            content="Login"
            iconClassName="bx bxs-user-plus"
            onClick={() => console.log('login!!!')}
          />

          <Button
            content="Google"
            iconClassName="bx bxl-google"
            onClick={() => console.log('register!!!')}
            variant="outline"
          />
        </div>

        <div className="mt-3 text-center">
          <small className="text-blue">
            Do you already have an account?{' '}
            <span className="cursor-pointer font-bold">Sign in</span>
          </small>
        </div>
      </form>
    </div>
  );
};
