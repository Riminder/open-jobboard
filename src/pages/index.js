import React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
          <div class="container navigation">
        <nav class="navbar">
            <img class="logo" src="./images/logo.svg" />
        </nav>
    </div>
    <section id="drop-desktop" class="container drop df__r-jsb-fs">
        <img class="circle" src="images/circular-message.svg" />
        <div class="drop-left">
            <div class="left-clipped">
                <div class="content no-dropping">
                    <div style="align-self: flex-start;">
                        <span class="text-extra-large">
                            <span class="bold">ENGIE</span> s’engage toujours plus pour l'<span class="bold">alternance</span>
                        </span> <br />
                        <span class="text-medium">
                            +3000 offres | 100 Métiers | De BEP/CAP à BAC +5
                        </span>
                    </div>
                    <img class="candidate-img" src="images/jumping-girl.png" alt="">
                    <span class="text-large title">
                        AVEC CV
                    </span>
                </div>
                <div class="content dropping">
                    <div class="df__r-jsb-c cloud-row">
                        <img src="images/cloud-upload.svg" />
                        <img src="images/cloud-upload.svg" />
                        <img src="images/cloud-upload.svg" />
                        <img src="images/cloud-upload.svg" />
                    </div>
                    <div class="df__r-jsb-c cloud-row droping-clickable">
                        <div class="df__c-jsb-c cloud-col">
                            <img src="images/cloud-upload.svg" />
                            <img src="images/cloud-upload.svg" />
                        </div>
                     
                        <div class="dragzone" >
                            <span class="text-large bold">
                                Glisse ton CV
                            </span>
                            <div id="dropzone">
                            
                            </div>
                            <div class="dashed df__r-jc-c">
                                <div class="logo-wrapper df__r-jc-c">
                                    <img src="images/+.svg" alt="plus">
                                </div>
                            </div>
                        </div>
                        <img src="images/cloud-upload.svg" />
                    </div>
                    <div class="drop-message">et laisse la magie opérer</div>
                    <div class="df__r-jsb-c cloud-row">
                        <img src="images/cloud-upload.svg" />
                        <img src="images/cloud-upload.svg" />
                        <img src="images/cloud-upload.svg" />
                    </div>
                </div>
            </div>
        </div>
        <div class="drop-right">
            <div class="right-clipped">
                <div class="content no-redirection">
                    <img class="candidate-img"  src="images/jumping-boy.png" alt="">
                    <span class="title">
                        SANS CV
                    </span>
                </div>
                <a href="/offers.html" class="content redirection">
                    <div class="df__r-jsb-c cloud-row">
                        <img src="images/time.svg" />
                        <img src="images/time.svg" />
                        <img src="images/time.svg" />
                    </div>
                    <div class="bold text-large df__r-jfe-c cloud-row">
                        Trop pressé
                    </div>
                    <div class="df__r-jsb-c cloud-row">
                        <img src="images/time.svg" />
                        <img src="images/time.svg" />
                        <img src="images/time.svg" />
                        <img src="images/time.svg" />
                    </div>
                    <div class="text-large df__r-jfe-c cloud-row">
                        Accède à nos offres <img style="margin-left: 1rem;" src="images/arrow-right.svg" alt="arrow right">
                    </div>
                    <div class="df__r-jsb-c cloud-row">
                        <img src="images/time.svg" />
                        <img src="images/time.svg" />
                        <img src="images/time.svg" />
                        <img src="images/time.svg" />
                    </div>
                    <div class="df__r-jsb-c cloud-row">
                        <img src="images/time.svg" />
                        <img src="images/time.svg" />
                        <img src="images/time.svg" />
                        <img src="images/time.svg" />
                    </div>
                </a>
            </div>
        </div>
    </section>


    <section id="drop-mobile" class="container drop-mobile">
        <div class="main-title">
            <span class="text-extra-large">
                <span class="bold">ENGIE</span> s’engage toujours plus pour l'<span class="bold">alternance</span>
            </span> <br />
            <span class="text-medium">
                +3000 offres | 100 Métiers | De BEP/CAP à BAC +5
            </span>
        </div>
        
        <div class="drop-content">
                <img class="circle" src="images/circular-message.svg" />
            <div class="dragzone" >
                <span class="text-large bold">
                    Glisse ton CV
                </span>
                <div id="dropzone-mobile">
                
                </div>
                <div class="dashed df__r-jc-c">
                    <div class="logo-wrapper df__r-jc-c">
                        <img src="images/+.svg" alt="plus">
                    </div>
                </div>
            </div>
            <div class="drop-message text-small">et laisse la magie opérer</div>
        </div>
        <div class="no-drop-content">
            <div class="text-extra-large bold">
                Trop pressé?
            </div>
            <a href="/offers.html" class="main-button">
                Accède à nos offres <img style="margin-left: 1rem;" src="images/arrow-right.svg" alt="arrow right">
            </a>
        </div>
    </section>






    <section class="container tem1 df__r-jc-fs">
        <div class="section-left">
            <img src="images/white-quote.png" />
            <div class="df__c-jc-fs" style="max-width: 25rem;">
                <div class="text-large">
                    CHEZ ENGIE, ON NE FAIT PAS GENRE
                </div> <br />
                <div class="text-medium">
                    On est une vraie communauté engagée. <br />
                    Tous nos collaborateurs, Femmes, Hommes, 
                    alternants et tuteurs travaillent en
                    équipe pour imaginer et construire
                    le monde de demain. Un monde plus smart,
                    sans cliché et engagé pour un futur Zéro Carbone.
                    <br />
                    <br />
                    <div class="bold">
                        Si tu veux faire partie de ceux qui vont faire bouger le monde de demain, rejoins nous.<br />
                    </div>
                </div>
                <span class="text-small">
                    Anne-Emmanuelle SEMIN,  Head of Talent Attraction
                </span>
            </div>
        </div>
        <div class="section-right">
            <img src="images/anne-emmanuelle_2.jpg" />
        </div>
    </section>

    <section class="container domains">
        <span class="df__r-jc-c text-large bold title">1<SUP><small style="vertical-align: super">er</small></SUP>&nbsp; dans tous les domaines</span>
        <div class="df__r-jsb-c items">
            <div class="df__c-jc-ac domain">
                <span class="shape">
                    <img src="images/forest.png" />
                </span>
                <div class="desc text-medium">
                    Production d’<span class="text-gradient bold">énergie verte</span>
                </div>
            </div>
            <div class="df__c-jc-ac domain">
                <span class="shape">
                    <img src="images/electric-car.png" />
                </span>
                <div class="desc text-medium">
                    Distribution en Europe via ses Réseaux de <br />
                    transport de <span class="text-gradient bold">gaz</span> et d’<span class="text-gradient bold">électricité</span>
                </div>
            </div>
            <div class="df__c-jc-ac domain">
                <span class="shape">
                    <img src="images/water.png" />
                </span>
                <div class="desc text-medium">
                    Fourniture de <span class="text-gradient bold">services d’efficacité</span><br />
                    <span class="text-gradient bold">environnementale</span> dans le monde
                </div>
            </div>
        </div>
    </section>
    <section class="container tem2 df__r-jc-fs">
        <div class="section-right">
            <img src="images/1-Visuel-de-campagne.jpg" />
        </div>
        <div class="section-left">
            <img src="images/black-quote.png" />
            <div class="df__c-jc-fs" style="max-width: 25rem;">
                <div class="text-large">
                    CHEZ ENGIE, LES METIERS TECHNIQUES ONT LA COTE
                </div> <br />
                <div class="text-medium">
                    Fais le pari du leader de l’énergie.<br />
                    Chargés de maintenance, génie climatique, mécaniciens,
                    électro-techniciens, soudeurs… 70% de nos collaborateurs sont 
                    des techniciens passionnés qui ont à cœur de transmettre leur savoir-faire et leur métier.
                    Si tu veux faire partie de notre future génération d’experts, rejoins-nous. Obtiens ton diplôme et ton premier job.
                    <br />
                    <br />
                    <!-- <div class="bold">
                        Si toi aussi tu rêves d’un bel avenir, rejoins-nous.<br />
                    </div> -->
                </div>
            </div>
        </div>
    </section>
    <section class="container stats">
        <span class="df__r-jc-c text-large bold text-center">
            En 2019, ENGIE et l’alternance en chiffres
        </span>
        <div class="df__r-jsb-fs items">
            <div class="df__r-jsb-fs item">
               <img src="images/documenthand.png" />
               <div class="details df__c-jc-fs">
                    <span class="text-extra-large bold text-gradient">
                        10%
                    </span>
                    <span class="text-medium text-gradient">
                        d’alternants
                    </span>
                    <span class="text-small">
                        dans l’effectif du Groupe en France à fin 2021 
                        avec pour objectif l’obtention de leur diplôme 
                        et un job à la sortie
                    </span>
               </div>
            </div>
            <div class="df__r-jsb-fs mid item">
                <img src="images/north-earth.png" />
                <div class="details df__c-jc-fs">
                    <span class="text-medium text-gradient">
                        + de
                    </span>
                    <span class="text-extra-large bold text-gradient">
                        5000
                    </span>            
                    <span class="text-small">
                        alternants dans le Monde, sans compter les stagiaires, les Graduate Programs et les VIE
                    </span>
                </div>
            </div>
            <div class="df__r-jsb-fs right item">
                <img src="images/finger-touch.png" />
                <div class="details df__c-jc-fs">
                    <span class="text-medium text-gradient">
                        + de
                    </span>
                    <span class="text-extra-large bold text-gradient">
                        3000
                    </span>
                    <span class="text-medium  text-gradient">
                        nouveaux alternants
                    </span>
                    <span class="text-small">
                        en France chaque année renforcent la Communauté des Imaginative Builders
                    </span>
                </div>
            </div>
        </div>
        <!-- <div class="df__r-jc-c items">
            <div class="df__r-jsb-fs" style="margin-right: 7rem;">
                <img src="images/plan.png" />
                <div class="details df__c-jc-fs">
                    <span class="text-extra-large bold text-gradient">
                        7%
                    </span>
                    <span class="text-medium text-gradient">
                        des effectifs en France
                    </span>
                    <span class="text-small">
                        dans l’effectif du Groupe en France à fin 2021 
                        avec pour objectif l’obtention de leur diplôme 
                        et un job à la sortie
                    </span>
                </div>
            </div>
            <div class="df__r-jsb-fs mid">
                <img src="images/plan.png" />
                <div class="details df__c-jc-fs">
                    <span class="text-extra-large bold text-gradient">
                        5%
                    </span>
                    <span class="text-medium text-gradient">
                        des effectifs en Europe
                    </span>            
                </div>
            </div>
        </div> -->
        <div class="text-medium bold df__r-jc-c">
            <div class="desc text-center">
                Dispositif étendu à toute l’Europe pour attirer, 
                former et recruter d’avantage de jeunes en formation ou en insertion professionnelle
            </div>
        </div>
    </section>
    <section class="container candidates">
        <span class="df__r-jc-c text-large bold text-center">
            Viens avec ton énergie
        </span>
        <div class="df__r-jc-c items">
            <div class="df__c-jc-fs item">
                <script src="https://fast.wistia.com/embed/medias/bclstscxz0.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_bclstscxz0 popover=true popoverAnimateThumbnail=true" style="display:inline-block;height:400px;position:relative">&nbsp;</span>
                <div class="vido-title">
                    Savoir communiquer
                </div>
            </div>
            <div class="df__c-jc-fs item mid">
                <script src="https://fast.wistia.com/embed/medias/3qcxt2s6kd.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_3qcxt2s6kd popover=true popoverAnimateThumbnail=true" style="display:inline-block;height:400px;position:relative">&nbsp;</span>
                <div class="vido-title">
                    Avoir des idées
                </div>
            </div>
            <div class="df__c-jc-fs item">
                <script src="https://fast.wistia.com/embed/medias/gy46vxrl23.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_gy46vxrl23 popover=true popoverAnimateThumbnail=true" style="display:inline-block;height:400px;position:relative">&nbsp;</span>
                <div class="vido-title">
                    Savoir s’organiser
                </div>
            </div>
        </div>
        <div class="df__r-jc-c items">
            <div class="df__c-jc-fs item">
                <script src="https://fast.wistia.com/embed/medias/so8xnqy1zh.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_so8xnqy1zh popover=true popoverAnimateThumbnail=true" style="display:inline-block;height:400px;position:relative">&nbsp;</span>
                <div class="vido-title">
                    Avoir envie de sauver la planète
                </div>
            </div>
            <div class="df__c-jc-fs item mid">
                <script src="https://fast.wistia.com/embed/medias/iqlu7alo9q.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_iqlu7alo9q popover=true popoverAnimateThumbnail=true" style="display:inline-block;height:400px;position:relative">&nbsp;</span>
                <div class="vido-title">
                    Avoir l’esprit d’équipe
                </div>
            </div>
        </div> 
    </section>
    <section class="container entities">
        <span class="df__r-jc-c text-large bold">
            Les entités d’ENGIE
        </span>
        <div id="slider">
            <div class="slider__container">
                <div class="carousel-control">
                    <a href="#" data-slide="prev" id="pic-prev" class="circle left" ></a>
                </div>
                <div class="df__r-jc-c items my-slider">
                    <a href="https://www.engie.com/" target="blank" class="df__c-jfs-c item">
                        <div class="img-wrapper df__r-jc-c">
                            <img src="images/engie-corporate.png" />
                        </div>
                        <span class="text-small bold desc">
                            Être au cœur de la vision stratégique d'ENGIE, c'est avoir le pouvoir et la responsabilité de changer l'avenir du monde. Si tu crois qu'un futur zéro carbone est possible et que tu es déterminé à faire de cet objectif une réalité, rejoins notre board et ensemble, accélérons le mouvement !
                        </span>
                    </a>
                    <a href="https://www.engie-solutions.com/fr" target="blank" class="df__c-jfs-c item">
                        <div class="img-wrapper df__r-jc-c">
                            <img src="images/black-logo.png" />
                        </div>
                        <span class="text-small bold desc">
                            Question transition énergétique, nos experts ENGIE Solutions ont réponse à tout ! Nées de la fusion entre ENGIE Axima, ENGIE Cofely, ENGIE Ineo, Endel et ENGIE Réseaux, nos équipes combinent leurs expertises pour accompagner les plus grandes villes, industries et entreprises du tertiaire vers un monde zéro carbone grâce à nos offres clés en main et sur-mesure. Si toi aussi tu as envie d'agir au service des énergies renouvelables et autres solutions d'avenir, fais-nous signe !
                        </span>
                    </a>
                    <a href="https://www.engie-green.fr" target="blank" class="df__c-jfs-c item">
                        <div class="img-wrapper df__r-jc-c">
                            <img src="images/engie-green.png" />
                        </div>
                        <span class="text-small bold desc">
                            Éolien, centrales solaires, géothermie... Pour proposer à nos clients des solutions toujours plus respectueuses de l'humain et de l'environnement, ENGIE est devenu LA référence mondiale en matière d'énergies renouvelables. Si toi aussi tu veux faire changer les choses, engage-toi avec nous !
                        </span>
                    </a>
                    <a href="https://tractebel-engie.fr/fr" target="blank" class="df__c-jfs-c item">
                        <div class="img-wrapper df__r-jc-c">
                            <img src="images/engie-tractebel.png" />
                        </div>
                        <span class="text-small bold desc">
                            Pour répondre toujours mieux aux enjeux de la transition énergétique, les experts ENGIE Tractebel ne laissent rien au hasard. En tant qu'ingénieurs spécialisés dans les domaines de l'énergie, de l'eau et des infrastructures, ils étudient l'ensemble des données techniques pour fournir des solutions adaptées à chaque problématique. Tu veux mettre tes talents au service d'un monde plus smart et innovant ? Alors rejoins nos équipes !
                        </span>
                    </a>
                </div>
                <div class="carousel-control">
                    <a href="#" data-slide="next"  id="pic-next" class="circle right" ></a>
                </div>
            </div>
        </div>
    </section>
    <footer class="footer">
        <div class="footer-top df__r-jc-c">
            <img src="images/white-logo.png" />
            <span class="text-medium bold text-center">L’énergie est notre avenir, économisons-la.</span>
        </div>
        <div class="divider"></div>
        <div class="footer-bot">
            <div class="df__r-jc-c links">
                <a href="https://www.engie.com/candidats/young-talents/nous-rejoindre/alternance" target="blank">ENGIE Alternance</a>
                <!-- <a href="#" target="blank">Données personnelles</a> -->
                <a href="/consent.html" id="consent-url" >Gérer mon consentement </a>
                <a href="https://www.engie.com/mentions-legales" target="blank">Mentions légales</a>
                <a href="https://s3.amazonaws.com/static.riminder.net/external+files/Riminder+-+Mention+d'information+VF+-+WCR+25+mai+2020.pdf" target="blank">Mention d'Information</a>
                <a href="https://www.welcometothejungle.com/fr/companies/engie-groupe" target="blank">WTTJ</a>
                <a href="https://www.jobteaser.com/fr/companies/engie" target="blank">JobTeaser</a>
            </div>
            <div class="df__r-jc-c socials">
                <a href="https://www.linkedin.com/company/engie/" target="blank"><img src="images/linkedin.svg"></a>
                <a href="https://web.facebook.com/ENGIE" target="blank"><img src="images/facebook.svg"></a>
                <a href="https://twitter.com/ENGIEgroup" target="blank"><img src="images/twitter.svg"></a>
                <a href="https://www.youtube.com/channel/UCuQHD9MgnRILjwdQaWZrBxA" target="blank"><img src="images/youtube.svg"></a>
                <a href="https://www.instagram.com/engie" target="blank"><img src="images/instagram.svg"></a>
            </div>
        </div>
    </footer>
    <div id="modal-submit">
        <div class="alert">
            <div class="alert__wrapper">
                <div class="alert__wrapper-content">
                    <div id="form-conditions" class="alert__wrapper-content--right df__c-jsb-fs">
                        <div class="desc">
                            <h1>Mention d’information </h1>

                            La plateforme alternance est mise en œuvre par ENGIE S.A pour elle-même et ses filiales. <br/><br/>
                            La Finalité de ce traitement est l’optimisation de la gestion des candidatures  desalternants : de l’étape de candidature aux  suggestions d’offres d’alternance. <br/><br/>
                            Vos données sont collectées sur la base de votre consentement.<br/><br/>
                            Le traitement de vos  données repose sur une technologie de type intelligence artificielle comprenant des processus automatisés tel que l’extraction de texte de votre CV
                            et un  profilage  afin de calculer à la volée un score d’adéquation devotre CV au regard d’une (ou plusieurs) offre(s) de poste.<br/><br/> 
                            Votre score est calculé pour vous en temps réel pour chaque offre et n’est pasconservé. <br/><br/>
                            Pour une utilisation optimale de la plateforme, vous avez la possibilité de lepartager avec les recruteurs.<br/> <br/>
                            Les catégories de données à caractère personnel qui sont utilisées par cetraitement sont les suivantes:
                            <ul>
                                <li>Données collectées: CV transmis ou rempli en ligne</li>
                                <li>Données enrichies: Score d’adéquation du CV au regard d’une offre d’alternance</li>
                            </ul>
                            Vos données sont conservées le temps nécessaire au traitement de votre candidature et au maximum 2 ans après le dernier contact.<br/><br/>
                            Ces données sont réservées à l’usage des services d’ENGIE S.A et de ses filiales concernées et ne peuvent être communiquées qu’aux sous-traitants d’ENGIE S.A et de ses filiales en charge de la fourniture du service.<br/><br/>
                            Vos données ne font pas l’objet d’un transfert en dehors de l’Union Européenne. <br/><br/>
                            Conformément à la règlementation applicable, vous pouvez exercer l’ensemblede vos droits d’accès, de rectification ou d’effacement de vos données auprès d’ENGIE S.A.
                            Vous disposez également d’un droit d’opposition et de limitation devos données. Toute demande devra être accompagnée d’un justificatif d’identité.<br/><br/>
                            Pour exercer vos droits, veuillez adresser votre demande via le portail RGPD:  <a href="https://engiegbs.service-now.com/gdpr_portal?id=gdpr_subject_access_request" target="blank">portail RGPD ENGIE IT</a> <br/><br/>
                            ENGIE S.A a nommé un Délégué à la Protection des Données Personnelles auprès de la CNIL, que vous pouvez contacter par e-mail à l’adresse suivante: <a target="blank" href="mailto:dpo@engie.com">dpo@engie.com</a>. <br/><br/>
                            Si vous estimez, après nous avoir contactés, que vos droits ne sont pasrespectés, vous pouvez adresser une réclamation auprès de la CNIL
                        </div>
                        <div class="actions">
                            <div class="control">
                                <!-- <div class="control-inline">
                                    <input type="checkbox" id="parsing" name="parsing" value="parsing">
                                    <label for="parsing">J'autorise ENGIE à analyser mon CV pour me suggérer des offres</label>
                                </div> -->
                                <div class="control-inline">
                                    <input type="checkbox" id="consent1" name="consent1" value="consent1">
                                    <label for="consent1">J’autorise ENGIE à conserver mon CV et à calculer mon niveau d’adéquation pour me suggérer des offres</label>
                                </div>
                                <div class="control-inline">
                                    <input type="checkbox" id="consent2" name="consent2" value="consent2">
                                    <label for="consent2">J’autorise ENGIE à partager mon niveau d’adéquation avec les recruteurs.</label>
                                </div>
                            </div>
                            <div class="df__r-jfe-c submit-actions">
                                <button class="btn light bold" id="cancel">ANNULER</button>
                                <button class="btn bold disabled" id="confirm">CONFIRMER</button>
                            </div>
                        </div>
                    </div>
                    <div id="animation" class="alert__wrapper-content--right df__c-jsb-fs">
                        <div class="lottie-wrapper-5 lottie-wrapper">
                            <div id="parsing-animation"></div>
                        </div>
                        <h1 class="message">Merci de patienter un instant, j'analyse les nouvelles offres disponibles pour vous...</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Layout>
  );
}
