import Image from "next/image";
import Link from "next/link";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero/>
      <HomeMenu/>

      <section className="text-center my-16">
        <SectionHeaders
          subHeader={'Our Story'}
          mainHeader={'About Us'}
        />

        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
          <p>
            Qui consectetur esse enim eu sit. In eu reprehenderit id esse proident consectetur esse nisi. Ad consectetur nisi culpa fugiat. Incididunt est ipsum ex exercitation. Proident eiusmod deserunt do non eu laborum commodo exercitation culpa elit ex sint. Consectetur dolore sint id enim sint voluptate excepteur id. Dolore veniam proident magna officia exercitation ut non.
          </p>
          <p>
            Qui consectetur esse enim eu sit. In eu reprehenderit id esse proident consectetur esse nisi. Ad consectetur nisi culpa fugiat. Incididunt est ipsum ex exercitation. Proident eiusmod deserunt do non eu laborum commodo exercitation culpa elit ex sint. Consectetur dolore sint id enim sint voluptate excepteur id. Dolore veniam proident magna officia exercitation ut non.
          </p>
          <p>
            Qui consectetur esse enim eu sit. In eu reprehenderit id esse proident consectetur esse nisi. Ad consectetur nisi culpa fugiat. Incididunt est ipsum ex exercitation. Proident eiusmod deserunt do non eu laborum commodo exercitation culpa elit ex sint..
          </p>
        </div>
      </section>

      <section className='text-center my-8'>

        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact Us'}
        />

        <div>
          <a className="text-4xl underline text-gray-500" 
          href="tel:+46738123123"
          >
            +46 738 123 123
          </a>
        </div>

      </section>

      

    </>
  );
}
