import Fields from "./Fields";
import InfoText from "./InfoText";
import "./styles.scss";

export default function FormContact() {
  return (
    <section className="container__contact">
      <InfoText />

      <Fields />
    </section>
  );
}
