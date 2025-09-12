import React from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <div className=" container mx-auto px-6 sm:px-48 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 ">
      <div className="space-y-4 ">
        <div className=" z-30 cursor-pointer" onClick={() => navigate("/")}>
          <img
            src="/images/new_logo.webp"
            alt="Easee Squeezy"
            className="w-36 max-w-full h-auto"
          />
        </div>
        <h2 className="font-semibold">Easeesqueezy juice</h2>
        <p>Aschaffenburger Straße 3-5 63762 Großostheim</p>

        <p>Telefon (06026) 509-0 info@eder-heylands.de</p>

        <p>Amtsgericht Aschaffenburg HRB-Nr. 95 Steuernummer: DE 132059650</p>

        <p>Geschäftsführer: Ev Eder-Widmann</p>
      </div>
      <div className="md:col-span-2">
        <h1 className="text-4xl font-extrabold text-[#003a19] mb-6">
          Privacy Policy
        </h1>

        <div className="space-y-4 leading-relaxed">
          <p>
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend
            den gesetzlichen Datenschutzvorschriften, sowie wie in dieser
            Datenschutzerklärung beschrieben.
          </p>

          <p>
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten (beispielsweise Name, Anschrift oder
            E-Mail-Adresse) erhoben werden, erfolgt dies, soweit möglich, stets
            auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
            Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin,
            dass die Datenübertragung im Internet (z.B. bei der Kommunikation
            per Email) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
            der Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </p>

          <p>
            IP-Adressen werden automatisch beim Besuch einer Webseite an den
            Server, auf dem die Webseite betrieben wird, übertragen. Eine
            Weitergabe dieser IP-Adressen an Dritte geschieht immer dann
            zwangsläufig, wenn eine Komponente Dritter (ein Script, ein Bild,
            eine Schriftart, eine sonstige digitale Ressource) auf der Webseite
            eingebunden ist. Welche Komponenten auf dieser Webseite eingebunden
            sind, ist in dieser Datenschutzerklärung aufgeführt. Daraus können
            auch die Empfänger Ihrer IP-Adresse bzw. Kategorien von Empfängern
            abgeleitet werden.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
