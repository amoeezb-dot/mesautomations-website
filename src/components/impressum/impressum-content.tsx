"use client";

import { useLocale } from "@/context/locale-context";

export function ImpressumContent() {
  const { locale } = useLocale();
  const en = locale === "en";

  return (
    <div className="mt-8 md:mt-12 space-y-10 text-sm md:text-base text-muted-foreground leading-relaxed">

      <section>
        <h2 className="text-base font-semibold text-foreground mb-2">
          {en ? "Details pursuant to § 5 TMG" : "Angaben gemäß § 5 TMG"}
        </h2>
        <p>
          Abdul Moeez Baig
          <br />
          {en ? "Freelance MES IT Specialist" : "Freiberuflicher MES IT Spezialist"}
          <br />
          Kollwitzstraße 12
          <br />
          90439 Nürnberg
          <br />
          {en ? "Germany" : "Deutschland"}
        </p>
      </section>

      <section>
        <h2 className="text-base font-semibold text-foreground mb-2">
          {en ? "Contact" : "Kontakt"}
        </h2>
        <p>
          {en ? "Phone" : "Telefon"}: +49 159 06154079
          <br />
          E-Mail:{" "}
          <a
            href="mailto:info@mes-automation.com"
            className="text-white/70 hover:text-white transition-colors underline underline-offset-4"
          >
            info@mes-automation.com
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-base font-semibold text-foreground mb-2">
          {en ? "VAT ID pursuant to § 27a UStG" : "Umsatzsteuer-ID gemäß § 27a UStG"}
        </h2>
        <p>DE460552467</p>
      </section>

      <section>
        <h2 className="text-base font-semibold text-foreground mb-2">
          {en ? "Tax Number" : "Steuernummer"}
        </h2>
        <p>240/202/31625</p>
      </section>

      <section>
        <h2 className="text-base font-semibold text-foreground mb-2">
          {en
            ? "Person Responsible for Content pursuant to § 18 para. 2 MStV"
            : "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV"}
        </h2>
        <p>
          Abdul Moeez Baig
          <br />
          Kollwitzstraße 12
          <br />
          90439 Nürnberg
          <br />
          {en ? "Germany" : "Deutschland"}
        </p>
      </section>

      <section>
        <h2 className="text-base font-semibold text-foreground mb-2">
          {en ? "Professional Chamber" : "Berufsständische Kammer"}
        </h2>
        <p>
          {en
            ? "I am not a member of any professional or trade chamber. IT consulting and MES engineering are not regulated professions in Germany."
            : "Ich bin kein Mitglied einer berufsständischen Kammer. IT-Beratung und MES-Ingenieurleistungen sind in Deutschland keine reglementierten Berufe."}
        </p>
      </section>

      <section>
        <h2 className="text-base font-semibold text-foreground mb-2">
          {en ? "Liability for Content" : "Haftung für Inhalte"}
        </h2>
        {en ? (
          <>
            <p className="mb-3">
              As a service provider, we are responsible for our own content on
              these pages in accordance with general laws pursuant to § 7 (1)
              TMG.
            </p>
            <p className="mb-3">
              The content of our pages has been created with the utmost care.
              However, we assume no liability for the accuracy, completeness,
              or timeliness of the information provided.
            </p>
            <p>
              Liability claims relating to material or immaterial damages
              caused by the use or non-use of the information provided are
              excluded, unless there is evidence of intentional or grossly
              negligent fault.
            </p>
          </>
        ) : (
          <>
            <p className="mb-3">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich.
            </p>
            <p className="mb-3">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen.
            </p>
            <p>
              Haftungsansprüche gegen uns, die sich auf Schäden materieller
              oder ideeller Art beziehen, welche durch die Nutzung oder
              Nichtnutzung der dargebotenen Informationen entstanden sind,
              sind grundsätzlich ausgeschlossen, sofern kein Verschulden in
              Form von Vorsatz oder grober Fahrlässigkeit nachgewiesen werden
              kann.
            </p>
          </>
        )}
      </section>

      <section>
        <h2 className="text-base font-semibold text-foreground mb-2">
          {en ? "Liability for Links" : "Haftung für Links"}
        </h2>
        <p>
          {en
            ? "Our website contains links to external third-party websites whose content we have no influence over. Therefore, we cannot accept any liability for this external content."
            : "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen."}
        </p>
      </section>

      <section>
        <h2 className="text-base font-semibold text-foreground mb-2">
          {en ? "EU Dispute Resolution" : "EU-Streitschlichtung"}
        </h2>
        <p>
          {en ? (
            <>
              The European Commission provides a platform for online dispute
              resolution (ODR):{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors underline underline-offset-4"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <br className="mt-2" />
              <span className="block mt-2">
                You can find our email address above in the imprint.
              </span>
            </>
          ) : (
            <>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors underline underline-offset-4"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <span className="block mt-2">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </span>
            </>
          )}
        </p>
      </section>

      <section>
        <h2 className="text-base font-semibold text-foreground mb-2">
          {en
            ? "Consumer Dispute Resolution"
            : "Verbraucherstreitbeilegung"}
        </h2>
        <p>
          {en
            ? "We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board."
            : "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."}
        </p>
      </section>

      <section>
        <h2 className="text-base font-semibold text-foreground mb-2">
          Copyright
        </h2>
        {en ? (
          <p>
            The content and works created by the site operator on these pages
            are subject to German copyright law. Reproduction, editing,
            distribution, or any kind of utilization outside the limits of
            copyright law require the written consent of the respective
            author.
          </p>
        ) : (
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht.
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors.
          </p>
        )}
      </section>

      <section>
        <h2 className="text-base font-semibold text-foreground mb-2">
          Website
        </h2>
        <p>
          <a
            href="https://www.mes-automation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors underline underline-offset-4"
          >
            www.mes-automation.com
          </a>
        </p>
      </section>

    </div>
  );
}