import Image from "next/image";
import Header from "@/components/Header";
import "./page.scss";

export default function About() {
  return (
    <>
      <Header />

      <main>
        <section className="container--hero_about">
          <div className="box--content_text">
            <h1>Sobre Nós</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst
              mollis, taciti fermentum posuere venenatis aliquet velit purus
              malesuada penatibus, maecenas potenti condimentum sociosqu tempus
              aptent magna primis, id felis enim tristique aliquam suspendisse
              vulputate curae.
            </p>
          </div>

          <Image
            src="/assets/images/hero-about.jpg"
            alt="Pessoa digitando no notebook"
            width={718}
            height={478.67}
          />
        </section>
      </main>
    </>
  );
}
