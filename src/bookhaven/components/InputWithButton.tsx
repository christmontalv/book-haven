export const InputWithButton = () => {
  return (
    <div className="mt-2 w-full">
      <input
        className="w-full rounded-md p-2"
        placeholder="enter your email"
        type="text"
      />
      <button className="absolute z-10 -ml-28 w-28 rounded-r-md bg-blue p-2 font-semibold text-white">
        send email
      </button>
    </div>
  );
};
