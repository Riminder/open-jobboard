import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Dropzone from './dropzone';
import moment from 'moment'
import 'moment/locale/fr' 
import RelatedJobs from './relatedJobs'
import swal from 'sweetalert'
import Taggy from './common/taggy'
import Share from './common/share'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faBriefcase, faCalendar, faIndustry, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import ErrorMessage from '../components/common/errorMessage'
import Score from './jobs/score'
import Revealing from './revealing'

const JobDetails = (props) => {
    const [firstLoad, setFirstLoad] = useState(true);
    const [job, setJob] = useState(null);
    useEffect(() => {
        props.fetchJob({jobKey: props.jobKey})
    },[props.jobKey]);

    useEffect(() => {
        if(props.job.s) {
            setJob(props.job)
        }
        return () => {
            setJob(null)
        }
    }, [props.job])
    useEffect(() => {
        if(!firstLoad) {
            if(props.profile?.s && props.profile?.put) {
                swal({
                    title: "Merci d’avoir déposé votre candidature!",
                    text: "L’un de nos consultants va l’étudier et reviendra vers vous.",
                    icon: "success",
                })
            }
            if(props.profile?.f && props.profile?.put) {
                swal(
                    {
                    type: 'error',
                    title: 'Oops...',
                    text: 'Un problème est survenu, veuillez essayer plus tard',
                    }
                )
            }
        }
        return () => {
            setFirstLoad(false)
        };
    },[props.profile])
    
    const jobData = job?.payload || null
    let taggy = ""
    if(props.documentParsing.s) {
        const text = props.documentParsing.payload.text
        const documentParsing = props.documentParsing.payload.ents.filter(item => item.label !== 'JobTitle')
        const spans = documentParsing.map(ent => {
            switch (ent.label) {
                case "FirstName": 
                    return { type: "prénom", start: ent.start, end: ent.end }
                case "LastName": 
                    return { type: "nom", start: ent.start, end: ent.end }
                case "Date": 
                    return { type: "date", start: ent.start, end: ent.end }
                case "Duration": 
                    return { type: "durée", start: ent.start, end: ent.end }
                case "Location": 
                    return { type: "localisation", start: ent.start, end: ent.end }
                case "Company": 
                    return { type: "entreprise", start: ent.start, end: ent.end }
                // case "JobTitle": 
                //     return { type: "poste", start: ent.start, end: ent.end }
                case "Task": 
                    return { type: "tâche", start: ent.start, end: ent.end }
                case "School": 
                    return { type: "école", start: ent.start, end: ent.end }
                case "EduTitle": 
                    return { type: "formation", start: ent.start, end: ent.end }
                case "Course": 
                    return { type: "cours", start: ent.start, end: ent.end }
                case "HardSkill": 
                    return { type: "savoir-faire", start: ent.start, end: ent.end }
                case "SoftSkill": 
                    return { type: "savoir-être", start: ent.start, end: ent.end }
                case "Certification": 
                    return { type: "certification", start: ent.start, end: ent.end }
                case "Language": 
                    return { type: "langue", start: ent.start, end: ent.end }
                case "Interest": 
                    return { type: "interêt", start: ent.start, end: ent.end }
                case "Email": 
                    return { type: "email", start: ent.start, end: ent.end }
                case "Phone": 
                    return { type: "téléphone", start: ent.start, end: ent.end }
                case "URL": 
                    return { type: "site-web", start: ent.start, end: ent.end }
                default: 
                    return { type: ent.label.toLowerCase(), start: ent.start, end: ent.end }
            }   
        })
    
        const ents = [
            { type: 'prénom', color: {h: 303, s: 98.1, l: 42.2, a: 1}},
            { type: 'nom', color: {h: 191, s: 95, l: 23, a: 1}},
            { type: 'date', color: {h: 229, s: 51.9, l: 54.3, a: 1}},
            { type: 'durée', color: {h: 321, s: 70.9, l: 67.6, a: 1}},
            { type: 'localisation', color: {h: 94, s: 48.6, l: 50.4, a: 1}},
            { type: 'entreprise', color: {h: 71, s: 59.5, l: 51.6, a: 1}},
            // { type: 'poste', color: {h: 52, s: 62.5, l: 43.9, a: 1}},
            { type: 'tâche', color: {h: 80, s: 75.5, l: 53.1, a: 1}},
            { type: 'école', color: {h: 282, s: 98.6, l: 71, a: 1}},
            { type: 'formation', color: {h: 291, s: 98.9, l: 36.1, a: 1}},
            { type: 'cours', color: {h: 274, s: 64.9, l: 19, a: 1}},
            { type: 'savoir-faire', color: {h: 203, s: 79.9, l: 61, a: 1}},
            { type: 'savoir-être', color: {h: 200, s: 6, l: 80.4, a: 1}},
            { type: 'certification', color: {h: 285, s: 55.7, l: 53.9, a: 1}},
            { type: 'langue', color: {h: 168, s: 82, l: 52.2, a: 1}},
            { type: 'interêt', color: {h: 272, s: 32.7, l: 43.7, a: 1}},
            { type: 'email', color: {h: 351, s: 70.3, l: 61.8, a: 1}},
            { type: 'téléphone', color:  {h: 90, s: 23.7, l: 53.7, a: 1}},
            { type: 'site-web', color: {h: 204, s: 93.9, l: 44.9, a: 1}}
        ]

        taggy = (<Taggy text={text} spans={spans} ents={ents} />)

    }

    if(jobData) {
        const name = jobData?.name;
        const descriptionContent = jobData?.sections?.filter(section => section.title === 'description')?.[0]?.description || ''
        const profileContent = jobData?.sections?.filter(section => section.title === 'profile')?.[0]?.description || ''
        const location = jobData?.location?.text || ''
        const company = jobData?.tags?.filter(tag => tag.name === 'company')?.[0]?.value || ''
        const category = jobData?.tags?.filter(tag => tag.name === 'category')?.[0]?.value || ''
        const contract = jobData?.tags?.filter(tag => tag.name === 'type')?.[0]?.value || ''
        // const activity = jobData?.tags?.filter(tag => tag.name === 'field_of_activity')?.[0]?.value || ''

        const creationDate =  moment(jobData?.created_at).format('DD MMM YYYY')
        const profileJobTag = { name: 'application_board_job_key', value: `${process.env.SOURCE_KEY}-${jobData.key}` }
        return (
            <>
                <div className="col-20 col-offer sticky col-33">
                    {/* <Link to="/jobs" className="button button--light large">
                        <FontAwesomeIcon className="icon-left" icon={faArrowLeft} /> Retour aux offres
                    </Link> */}
                    <div className="card jobDetails">
                        <div className="tags search-box">
                            {props.score && (
                                <div className="score-wrapper">
                                    <Score
                                        score={props.score}
                                    />
                                </div>
                            )}
                            {company && (
                                <div className="job-tag">
                                    <div className="icon-fixed-width"><FontAwesomeIcon className="icon-left" icon={faBriefcase} /></div>{company}
                                </div>
                            )}
                            <h3 style={{marginBottom: '1rem'}}>Le poste</h3>
                            {contract && (
                                <div className="job-tag">
                                    <div className="icon-fixed-width"><FontAwesomeIcon className="icon-left" icon={faFileAlt} /></div>{contract}
                                </div>
                            )}
                            {category && (
                                <div className="job-tag">
                                    <div className="icon-fixed-width"><FontAwesomeIcon className="icon-left" icon={faIndustry} /></div>{category}
                                </div>
                            )}
                           
                            {creationDate && (
                                <div className="job-tag">
                                    <div className="icon-fixed-width"><FontAwesomeIcon className="icon-left" icon={faCalendar} /></div>{creationDate}
                                </div>
                            )}

                            {location && (
                                <div className="job-tag">
                                    <div className="icon-fixed-width"><FontAwesomeIcon className="icon-left" icon={faMapMarkerAlt} /></div>{location}
                                </div>
                            )}
                        </div>
                        <div className="details__drop">
                            {props.file?.fileName ? (
                                <div className="apply">
                                    {props.profile?.payload?.tags?.filter(tag => JSON.stringify(tag) === JSON.stringify(profileJobTag)).length > 0 ? (
                                        <h3 className="text-center">Vous avez candidaté à cette offre.</h3>
                                    ):(
                                        <button
                                            className="button button-large drop-button"
                                            onClick={() => props.putProfile({profile: props.profile.payload, jobKey: jobData.key})}
                                            disabled={props.profile?.r}
                                        >
                                            {props.profile?.r ? <span className="loader"></span> : 'POSTULER'}
                                        </button>
                                    )}
                                </div>
                                )
                                :
                                (
                                    <div>
                                        <Dropzone
                                            addProfile={props.addProfile}
                                            profile={props.profile}
                                            redirectTojobs={false}
                                            removeProfile={props.removeProfile}
                                            file={props.file}
                                            details
                                        />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                   {props.documentRevealing.s && (
                         <Revealing revealing={props.documentRevealing} />
                   )}
                </div>
                <div className="col-60 col-67">
                    {props.documentParsing.s && (
                        <div className="jobs details">
                            <h3>Description du poste</h3>
                            <div className="details__description">
                                {taggy}
                            </div>
                            <Share
                            socialConfig={{
                                twitterHandle: 'hrflowai',
                                config: {
                                    url: `https://demo.cvbox.com/?job_key=${jobData.key}&board_key=49348f504e997c501e45a3634dce5a865370ff90`,
                                    title: name,
                                    },
                                }}
                            />
                        </div>
                    )}
                    {props.documentParsing.r && (
                        <div className="loader" style={{margin: 'auto'}}></div>
                    )}
                </div>
                <div className="col-20 col-33 col-offer">
                    {props.jobs?.payload?.jobs?.length ? (
                        <div>
                            <h3>{props.file?.fileName ? 'Offres recommandées' : 'Autres offres'}</h3>
                            <RelatedJobs jobs={props.jobs.payload.jobs.filter(job => job.key !== jobData.key).splice(0, 3)} />
                        </div>
                    )
                    :
                    (
                        ''
                    )
                }
                </div>
            </>
        )
    }

    if(props.job.f) {
        return (
            <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                <ErrorMessage message="Aucun résultat trouvé" />
            </div>
        )
    }

    return (
        <>
            <div className="loader" style={{margin: 'auto'}}></div>
        </>
    )

}

export default JobDetails;
