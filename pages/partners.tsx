import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Img1 from "../assets/partners/1.png";
import Img2 from "../assets/partners/2.png";
import Img3 from "../assets/partners/3.png";
import Img4 from "../assets/partners/4.png";
import Img5 from "../assets/partners/5.png";
import Img6 from "../assets/partners/6.png";
import Img8 from "../assets/partners/8.png";

const headerClasses = "w-full mb-2 text-xl font-bold text-center";
const partnerContainerClasses =
  "w-full lg:w-1/3 px-4 flex flex-col items-center";

const Partners: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Head>
        <title>TEDxYCCE 2022 | Partners</title>
      </Head>
      <Header />
      <main className="flex-1 bg-white py-8">
        <div className="container mx-auto lg:flex lg:flex-col items-center">
          <div className="flex flex-col px-10 items-center">
            <h2 className="w-full mt-8 mb-6 text-2xl font-bold text-center">
              Powered by
            </h2>
            <div className="w-1/2 md:w-56">
              <Image
                src={Img1}
                layout="intrinsic"
                objectFit="cover"
                className="object-cover object-center"
                alt="Persistent"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap mt-16 gap-4">
            <div className={partnerContainerClasses}>
              <h2 className={headerClasses}>Hospitality Partner</h2>
              <div className="w-1/2 md:w-56">
                <Image
                  src={Img2}
                  layout="intrinsic"
                  objectFit="cover"
                  className="object-cover object-center"
                  alt="Hospitality Partner"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className={partnerContainerClasses}>
              <h2 className={headerClasses}>Radio Partner</h2>
              <div className="w-1/2 md:w-56">
                <Image
                  src={Img3}
                  layout="intrinsic"
                  objectFit="cover"
                  className="object-cover object-center"
                  alt="Radio Partner"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className={partnerContainerClasses}>
              <h2 className={headerClasses}>Knowledge Partner</h2>
              <div className="w-1/2 md:w-56">
                <Image
                  src={Img4}
                  layout="intrinsic"
                  objectFit="cover"
                  className="object-cover object-center"
                  alt="Radio Partner"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 w-full lg:w-1/3 px-4 flex flex-col items-center">
            <h2 className={headerClasses}>Snack and Beverage Partner</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="w-1/3">
                <Image
                  src={Img5}
                  layout="intrinsic"
                  objectFit="cover"
                  className="object-cover object-center"
                  alt="Radio Partner"
                  placeholder="blur"
                />
              </div>
              <div className="w-1/3">
                <Image
                  src={Img6}
                  layout="intrinsic"
                  objectFit="cover"
                  className="object-cover object-center"
                  alt="Radio Partner"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 w-full lg:w-1/3 px-4 flex flex-col items-center">
            <h2 className={headerClasses}>Snack and Beverage Partner</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="w-1/3">
                <Image
                  src={Img8}
                  layout="intrinsic"
                  objectFit="cover"
                  className="object-cover object-center"
                  alt="Radio Partner"
                  placeholder="blur"
                />
              </div>
              {/* Add YCCE MEDIA LOGO and uncomment this */}
              {/* <div className="w-1/3">
                <Image
                  src={Img6}
                  layout="intrinsic"
                  objectFit="cover"
                  className="object-cover object-center"
                  alt="Radio Partner"
                  placeholder="blur"
                />
              </div> */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
