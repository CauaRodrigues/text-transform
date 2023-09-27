import AsideTools from "@/components/AsideTools";
import Header from "@/components/Header";
import RenderPageContent from "./RenderPageContent";

import "./page.scss";

export default function Tools() {
  return (
    <>
      <Header />

      <main className="page--tools">
        <AsideTools />

        <article>
          <h1>As melhores ferramentas em um só lugar.</h1>
          <RenderPageContent />
        </article>
      </main>
    </>
  );
}
