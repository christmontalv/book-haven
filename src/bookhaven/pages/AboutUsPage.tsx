import { Footer, Navbar, WrapperContainer } from '../';

export const AboutUsPage = () => {
  return (
    <WrapperContainer>
      <Navbar />
      <main>
        <h1 className="text-center text-xl font-bold sm:text-2xl md:text-4xl">
          Who we
          <span className="text-blue">&nbsp;are?</span>
          <i className="bx bxs-bulb absolute animate-bounce text-yellow"></i>
        </h1>

        <div className="mx-3 mt-8 flex flex-col gap-7 sm:flex-row">
          <div className="text-center">
            <h1 className="text-lg font-semibold">Principles</h1>

            <p className="mt-3 text-pretty px-5 md:px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ducimus quod vero aut laboriosam deserunt! Magni, fuga
              iusto. Iste nam quasi a saepe officia aliquam amet exercitationem,
              voluptates fugit inventore?
            </p>

            <i className="bx bx-street-view mt-5 text-7xl text-blue"></i>
          </div>
          <div className="text-center">
            <h1 className="text-lg font-semibold">Objetives</h1>

            <p className="mt-3 text-pretty px-5 md:px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ducimus quod vero aut laboriosam deserunt! Magni, fuga
              iusto. Iste nam quasi a saepe officia aliquam amet exercitationem,
              voluptates fugit inventore?
            </p>

            <i className="bx bxs-bookmark-alt-minus mt-5 text-7xl text-blue"></i>
          </div>
          <div className="text-center">
            <h1 className="text-lg font-semibold">Achievements</h1>

            <p className="mt-3 text-pretty px-5 md:px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ducimus quod vero aut laboriosam deserunt! Magni, fuga
              iusto. Iste nam quasi a saepe officia aliquam amet exercitationem,
              voluptates fugit inventore?
            </p>

            <i className="bx bxs-medal mt-5 text-7xl text-blue"></i>
          </div>
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
