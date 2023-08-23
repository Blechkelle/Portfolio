import * as React from 'react';
import {Box, Divider, Stack} from "@mui/material";
import styles from "./imprint.module.css"
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Imprint() {
    return (
        <Box pb={10} pt={30} className={styles.imprintWrapper}>
            <Container maxWidth={'lg'}>
                <Stack direction={'column'} spacing={3}>
                    <Stack direction={'column'} spacing={3}>
                        <Typography variant={'h1'}>Impressum</Typography>
                        <Typography variant={'h3'}>
                            Verantwortlich für den Inhalt (gem. § 55 Abs. 2 RStV)
                        </Typography>
                    </Stack>
                    <Divider/>
                    <Typography variant={'h5'}>
                        <b>AnyPlace</b> 360° Touren Jeffrey Schütt und Marcel Kühn GbR
                    </Typography>
                    <Stack direction={'column'}>
                        <Typography variant={'h4'}>
                            Jeffrey Schütt, Marcel Kühn
                        </Typography>
                        <Typography variant={'h4'}>
                            Genslerstraße 16 C
                        </Typography>
                        <Typography variant={'h4'}>
                            13055 Berlin
                        </Typography>
                    </Stack>
                    <Stack direction={'column'}>
                        <Typography variant={'h4'}>
                            Telefon: 01520 7468469
                        </Typography>
                        <Typography variant={'h4'}>
                            Email: info@any-place.de
                        </Typography>
                        <Typography variant={'h4'}>
                            USt-IdNr.: DE352552956
                        </Typography>
                    </Stack>
                    <Divider/>
                    <Typography variant={'h6'}>
                        Rechtliche Hinweise
                    </Typography>
                    <Typography variant={'h5'}>
                        § 1 Warnhinweis zu Inhalten
                    </Typography>
                    <Typography variant={'h4'}>
                        Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten kostenlosen und frei zugänglichen journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.
                    </Typography>
                    <Typography variant={'h5'}>
                        § 2 Externe Links
                    </Typography>
                    <Typography variant={'h4'}>
                        Diese Website enthält Verknüpfungen zu Websites Dritter („externe Links“). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.
                    </Typography>
                    <Typography variant={'h5'}>
                        § 3 Urheber- und Leistungsschutzrechte
                    </Typography>
                    <Typography variant={'h4'}>
                        Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt. Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.
                    </Typography>
                    <Typography variant={'h5'}>
                        § 4 Abmahnungen
                    </Typography>
                    <Typography variant={'h4'}>
                        Sollte der Inhalt oder andere Bereiche dieser Seite gegen fremde Rechte Dritter oder gesetzliche Bestimmungen verstoßen, so wird eine entsprechende Nachricht ohne Kostennote erwartet. Ihre Beanstandungen werden umgehend rechtlich geprüft. Kostennoten, die durch Einschalten Ihres Rechtsbeistandes oder Ähnlichem durch Sie ohne vorherige Kontaktaufnahme verursacht werden, werden vollständig zurückgewiesen. Eine gegenklage wegen Verstoßes gegen diesen Artikel wird ausdrücklich vorbehalten.
                    </Typography>
                    <Typography variant={'h5'}>
                        § 5 Besondere Nutzungsbedingungen
                    </Typography>
                    <Typography variant={'h4'}>
                        Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
}
