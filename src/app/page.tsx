import Header from "@/components/Header";
import { NavigateButton } from "@/components/Button";
import SearchField from "./SearchField";

import styles from "./page.module.scss";
import colors from "@/styles/colors.module.scss";

export default function Home() {
  return (
    <>
      <Header withFill>
        <section className={styles.banner}>
          <h1>Text Transform</h1>
          <p>
            Estilize, formate textos, converta para maiúsculo ou minúsculo, gere
            textos Lorem Ipsum, codifique textos e muito mais.
          </p>

          <SearchField />

          <div className={styles.btnGroup}>
            <NavigateButton
              title="Ferramentas"
              to="/ferramentas"
              colorText={colors.lightColor100}
              bgColor={colors.primaryColor100}
            />

            <NavigateButton
              title="Saiba Mais"
              to="/sobre"
              transparent
              colorText={colors.primaryColor100}
            />
          </div>
        </section>
      </Header>

      <main>
        <h1>Home</h1>
      </main>
    </>
  );
}
