"use client";

import { useLocale } from "@/context/locale-context";
import { SectionHeader } from "@/components/shared/section-header";

export function DatenschutzContent() {
  const { locale } = useLocale();
  const en = locale === "en";

  return (
    <>
      <SectionHeader
        title={en ? "Privacy Policy" : "Datenschutzerklärung"}
      />
      <div className="mt-8 md:mt-12 space-y-10 text-sm md:text-base text-muted-foreground leading-relaxed">

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">
            {en ? "1. General Information" : "1. Allgemeine Hinweise"}
          </h2>
          <p>
            {en
              ? "The protection of your personal data is of particular importance to us. Your data is processed in accordance with the General Data Protection Regulation (GDPR) and applicable national data protection regulations."
              : "Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Die Verarbeitung Ihrer Daten erfolgt im Einklang mit der Datenschutz-Grundverordnung (DSGVO) sowie den geltenden nationalen Datenschutzbestimmungen."}
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">
            {en ? "2. Controller (Responsible for data processing)" : "2. Verantwortlicher"}
          </h2>
          <p>
            Abdul Moeez Baig
            <br />
            Kollwitzstraße 12
            <br />
            90439 Nürnberg
            <br />
            {en ? "Germany" : "Deutschland"}
            <br />
            <br />
            {en ? "Email" : "E-Mail"}:{" "}
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
            {en ? "3. Access Data (Server Log Files)" : "3. Zugriffsdaten (Server-Logfiles)"}
          </h2>
          <p className="mb-3">
            {en
              ? "When you visit this website, the hosting provider automatically collects and stores information in server log files. This includes in particular:"
              : "Beim Aufruf dieser Website werden durch den Hostinganbieter automatisch Informationen erfasst und in sogenannten Server-Logfiles gespeichert. Dies sind insbesondere:"}
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
            {en ? (
              <>
                <li>IP address</li>
                <li>Date and time of the request</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referrer URL</li>
              </>
            ) : (
              <>
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Browsertyp und Browserversion</li>
                <li>Betriebssystem</li>
                <li>Referrer URL</li>
              </>
            )}
          </ul>
          <p className="mb-2">
            {en
              ? "These data are processed to ensure the stability, security, and proper functioning of the website."
              : "Diese Daten sind technisch erforderlich, um die Website korrekt anzuzeigen und die Stabilität sowie Sicherheit zu gewährleisten."}
          </p>
          <p>
            <span className="text-white/50 font-medium">
              {en ? "Legal basis:" : "Rechtsgrundlage:"}
            </span>{" "}
            {en
              ? "Art. 6 para. 1 lit. f GDPR (legitimate interest)"
              : "Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)"}
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">
            {en ? "4. Hosting" : "4. Hosting"}
          </h2>
          <p className="mb-3">
            {en
              ? "This website is hosted by the following providers:"
              : "Diese Website wird bei folgenden Anbietern gehostet:"}
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
            <li>
              {en
                ? "Namecheap, Inc. (hosting infrastructure)"
                : "Namecheap, Inc. (Hosting-Infrastruktur)"}
            </li>
            <li>
              {en
                ? "Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (deployment and delivery services)"
                : "Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (Bereitstellung und Auslieferung)"}
            </li>
          </ul>
          <p className="mb-2">
            {en
              ? "These providers process personal data (e.g. IP addresses) to ensure the reliable operation of the website."
              : "Diese Anbieter verarbeiten personenbezogene Daten (z. B. IP-Adressen) für den zuverlässigen Betrieb der Website."}
          </p>
          <p className="mb-2">
            {en
              ? "Data processing may take place within the European Union as well as in the United States."
              : "Die Datenverarbeitung kann sowohl innerhalb der Europäischen Union als auch in den Vereinigten Staaten stattfinden."}
          </p>
          <p>
            {en
              ? "For data transfers to the USA, Standard Contractual Clauses (SCCs) of the European Commission are applied in accordance with Art. 46 GDPR."
              : "Für Datenübertragungen in die USA werden die Standardvertragsklauseln (SCC) der Europäischen Kommission gemäß Art. 46 DSGVO angewendet."}
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">
            {en ? "5. Contact" : "5. Kontaktaufnahme"}
          </h2>
          <p className="mb-3">
            {en
              ? "If you contact us by email or via a contact form, the data you provide (e.g. name, email address, message) will be stored and processed to handle your request."
              : "Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, werden die von Ihnen angegebenen Daten (z. B. Name, E-Mail-Adresse, Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert."}
          </p>
          <p className="mb-1">
            <span className="text-white/50 font-medium">
              {en ? "Legal basis:" : "Rechtsgrundlage:"}
            </span>
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
            {en ? (
              <>
                <li>Art. 6 para. 1 lit. b GDPR (processing for contract initiation)</li>
                <li>Art. 6 para. 1 lit. f GDPR (legitimate interest in responding to inquiries)</li>
              </>
            ) : (
              <>
                <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
              </>
            )}
          </ul>
          <p>
            {en
              ? "Your data will not be shared with third parties without your consent."
              : "Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben."}
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">
            {en ? "6. SSL or TLS Encryption" : "6. SSL- bzw. TLS-Verschlüsselung"}
          </h2>
          <p className="mb-2">
            {en
              ? "This website uses SSL or TLS encryption for security reasons and to protect the transmission of confidential content."
              : "Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung."}
          </p>
          <p>
            {en
              ? 'You can recognize an encrypted connection by the "https://" in your browser\'s address bar.'
              : 'Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers mit "https://" beginnt.'}
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">
            {en ? "7. Storage Duration" : "7. Speicherdauer"}
          </h2>
          <p>
            {en
              ? "Personal data will only be stored for as long as necessary to fulfill the purpose for which it was collected or as required by statutory retention periods."
              : "Personenbezogene Daten werden nur so lange gespeichert, wie dies zur Bearbeitung Ihrer Anfrage erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen."}
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">
            {en ? "8. Your Rights" : "8. Ihre Rechte"}
          </h2>
          <p className="mb-3">
            {en
              ? "You have the following rights under the GDPR:"
              : "Sie haben das Recht auf:"}
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            {en ? (
              <>
                <li>Right of access (Art. 15 GDPR)</li>
                <li>Right to rectification (Art. 16 GDPR)</li>
                <li>Right to erasure (Art. 17 GDPR)</li>
                <li>Right to restriction of processing (Art. 18 GDPR)</li>
                <li>Right to data portability (Art. 20 GDPR)</li>
                <li>Right to object to processing (Art. 21 GDPR)</li>
              </>
            ) : (
              <>
                <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              </>
            )}
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">
            {en
              ? "9. Right to Lodge a Complaint with a Supervisory Authority"
              : "9. Beschwerderecht bei der Aufsichtsbehörde"}
          </h2>
          <p className="mb-2">
            {en
              ? "You have the right to lodge a complaint with a data protection supervisory authority."
              : "Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren."}
          </p>
          <p>
            <span className="text-white/50 font-medium">
              {en ? "Competent authority in Bavaria:" : "Zuständige Behörde in Bayern:"}
            </span>
            <br />
            {en
              ? "Bavarian State Office for Data Protection Supervision (BayLDA)"
              : "Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)"}
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">
            {en ? "10. No Cookies or Tracking Tools" : "10. Keine Verwendung von Cookies oder Tracking-Tools"}
          </h2>
          <p>
            {en
              ? "This website does not use cookies or any tracking or analytics tools."
              : "Diese Website verwendet keine Cookies und keine Tracking- oder Analyse-Tools."}
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">
            {en ? "11. Changes to This Privacy Policy" : "11. Änderungen dieser Datenschutzerklärung"}
          </h2>
          <p>
            {en
              ? "This privacy policy may be updated from time to time to comply with current legal requirements."
              : "Diese Datenschutzerklärung kann bei Bedarf angepasst werden, um aktuellen rechtlichen Anforderungen zu entsprechen."}
          </p>
        </section>

      </div>
    </>
  );
}