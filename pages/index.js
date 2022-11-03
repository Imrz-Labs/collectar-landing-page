import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>CollectAR ✦ Reality is your canvas</title>
        <meta
          name="description"
          content="Building the real world metaverse - coming soon!!!"
        />
        <link rel="icon" href="/favicon-ii.png" />
      </Head>

      <main className="flex flex-col w-full bg-[#FAFAFA] text-[#191d2a] overflow-x-hidden">
        {/* //Hero */}
        <section className=" w-full flex justify-center items-center">
          <img
            src="/hero.jpg"
            className="flex h-screen w-full object-cover items-center md:hidden "
          />
          <div className="absolute md:relative md:h-screen md:items-center left-20 md:flex md:flex-col md:justify-center md:ml-0  md:left-0 md:w-full md:m-auto">
            <img src="/logo.svg" className="h-10 mb-10" />
            <h1 className="font-extrabold text-[50px] w-9/12 md:text-base lg:text-lg md:text-center md:w-11/12">
              Location Based AR Marketing Platform
            </h1>
            <p className="pb-10 pt-7 text-base lg:text-sm font-medium">
              Launching 2023
            </p>
            <a href="https://www.imrzlabs.com/contact">
              <button className="rounded-full h-[60px] w-[300px] text-white font-bold bg-[#9025FB] md:bg-gradient-to-r from-[#9000FF] to-[#00FBFF]">
                BOOK A DEMO
              </button>
            </a>
          </div>
        </section>

        {/* //CTA */}
        <section className="flex justify-center items-center bg-gradient-to-r from-[#9000FF] to-[#00FBFF] py-10 lg:w-full lg:m-auto">
          <div className="flex flex-row items-center justify-center w-full m-auto mx-auto md:flex-col ">
            <div className="flex w-full ">
              <h1 className="w-10/12 text-center flex justify-end md:justify-center text-white font-extrabold text-[30px] lg:text-sm mr-10 md:mx-auto md:mb-4">
                Sign up for Early Access
              </h1>
            </div>

            <div className="w-full flex">
              <form
                action=""
                className="flex flex-row w-10/12 md:w-11/12 md:justify-center md:items-center md:m-auto"
              >
                <input
                  required
                  className="w-9/12  md:w-full md:m-auto bg-white h-[60px] border-none rounded-tl-full rounded-bl-full px-10 flex justify-center font-bold"
                  type="email"
                  placeholder="ENTER EMAIL"
                />
                <button
                  type="submit"
                  className="w-3/12 text-white text-center md:w-4/12 md:m-auto h-[60px] bg-[#9025FB] rounded-tr-full rounded-br-full font-bold"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* //Features Images */}
        <section className="w-full justify-center items-center py-20 grid grid-cols-3 sm:grid-cols-1">
          <div className="flex flex-col justify-center items-center">
            <div className="h-[250px] w-[250px] bg-white-500">
              <img
                src="/1.png"
                className="object-scale-down relative h-[200px] w-[200px] m-auto top-12"
              />
            </div>
            <h1 className="font-bold text-sm text-center  mt-4">
              Discover & Collect
            </h1>
            <p className="text-center w-8/12 lg:md:w-full md:w-6/12 sm:w-11/12 mt-2">
              Discover and find Collectibles around you.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="h-[250px] w-[250px] bg-white-500">
              <img
                src="/2.png"
                className="object-scale-down relative h-[200px] w-[250px] m-auto top-12"
              />
            </div>
            <h1 className="font-bold text-sm text-center mt-4">
              Collectibles Unlock Rewards
            </h1>
            <p className="text-center w-8/12 lg:md:w-full md:w-6/12 sm:w-11/12 mt-2">
              The more you collect, the more rewards you will receive.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="h-[250px] w-[250px] bg-white-500 mb-6">
              <img
                src="/3.png"
                className="object-scale-down relative h-[180px] w-[200px] m-auto top-24"
              />
            </div>
            <h1 className="font-bold text-sm text-center mt-4">
              Upcoming Collectibles
            </h1>
            <p className="text-center w-8/12 lg:md:w-full md:w-6/12 sm:w-11/12 mt-2">
              View upcoming collectibles in launchpad to claim them before they
              are gone!
            </p>
          </div>

 
        </section>

        {/* //Footer CTA */}
        <section className="flex justify-center items-center bg-gradient-to-r from-[#9000FF] to-[#00FBFF] py-10">
          <div className="flex flex-row items-center justify-center w-full m-auto mx-auto sm:flex-col ">
            <h1 className="w-full flex items-center justify-end lg:justify-center text-white font-extrabold text-[30px] mr-10 lg:mx-auto lg:mb-4">
              Launching 2023
            </h1>
            <div className="w-full flex lg:w-full lg:justify-center  lg:m-auto lg:mx-10">
              <a href="https://www.imrzlabs.com/contact">
                <button className="rounded-full h-[60px] w-[300px] text-white font-bold bg-[#9000FF]">
                  BOOK A DEMO
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* //Footer */}
        <section className="imrz-black pt-8">
          <div className="pl-48 lg:pl-0 imrz-black m-auto flex h-auto w-full items-center justify-around lg:flex-col lg:pt-10 ">
            {/*** Logo row***/}
            <div className="">
              <a href="https://www.imrzlabs.com/" className="">
                <img
                  className="h-auto object-cover w-[155px]"
                  src="/imrzlight.svg"
                  alt="Imrz Labs"
                />
              </a>
            </div>
            {/*** Links row***/}
            <div className="m-auto lg:my-10 uppercase">
              <div className="flex items-center justify-center space-x-10 text-center font-extrabold text-white md:w-full ">
                <a
                  href="https://www.imrzlabs.com/media"
                  className="link-style-default m-auto text-tiny text-white"
                >
                  Media
                </a>

                <a
                  href="https://www.imrzlabs.com/careers"
                  className="link-style-default text-tiny text-white indicator"
                >
                  <div className="grid h-8 place-items-center">Careers</div>
                </a>

                <a
                  href="https://www.imrzlabs.com/privacy"
                  className="link-style-default m-auto text-tiny text-white"
                >
                  Privacy
                </a>
              </div>
            </div>
            {/*** Social row ***/}

            <div className="pr-48 lg:pr-0 ">
              <ul className="flex items-center gap-5">
                <li>
                  <a href="https://discord.gg/5eruR3BAH7">
                    <img src="/discord.svg" className="h-[20px] w-[20px]" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/imrzlabs">
                    <img src="/twi.svg" className="h-[20px] w-[20px]" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://www.linkedin.com/company/imrzlabs">
                    <img src="/linkedin.svg" className="h-[18px] w-[18px]" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="imrz-black w-full flex flex-col justify-center items-center m-auto pb-10 pt-2 text-center text-[15px] text-white lg:pt-0 lg:mt-20 lg:mb-2">
            <p> IMRZ Labs - HOST, Media City, Salford, M50 2ST</p>
            <p>Copyright © 2022 IMRZ Labs. </p>
          </div>
        </section>
      </main>
    </>
  );
}
