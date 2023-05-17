'use client';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { useRouter } from 'next/navigation';
import { FaHome, FaDog, FaCat, FaClock, FaCheck } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';
// import styles from './styles.module.scss';

export default function Work() {
    const router = useRouter();
    // TODO: make me into enum
    const STATUS = {
        WORKING: "working",
        COMPLETE: "complete",
    };

    const jobs = [
        {
            id: "1",
            name: "Job 1",
            icon: <FaHome />, // TODO: how to pass in react icon component from database?
            period: "2019 - Present",
            role: "Web Developer",
            status: STATUS.WORKING,
            description: {
                short: "Lorem ipsum was there if you were paying attention. Lorem ipsum was there if you were paying attention, but instead this is much longer... wow can you believe it.",
                long: "Lorem ipsum was there if you were paying attention, but instead this is much longer... wow can you believe it. Lorem ipsum was there if you were paying attention, but instead this is much longer... wow can you believe it.",
            },
        },
        {
            id: "2",
            name: "Job 2",
            icon: <FaDog />, // TODO: how to pass in react icon component from database?
            period: "2020 - 2021",
            role: "Web Developer",
            status: STATUS.COMPLETE,
            description: {
                short: "Lorem ipsum was there if you were paying attention.",
                long: "Lorem ipsum was there if you were paying attention, but instead this is much longer... wow can you believe it. Lorem ipsum was there if you were paying attention, but instead this is much longer... wow can you believe it.",
            },
        },
        {
            id: "3",
            name: "Job 3",
            icon: <FaCat />, // TODO: how to pass in react icon component from database?
            period: "2018 - 2019",
            role: "Web Developer",
            status: STATUS.COMPLETE,
            description: {
                short: "Lorem ipsum was there if you were paying attention.",
                long: "Lorem ipsum was there if you were paying attention, but instead this is much longer... wow can you believe it.",
            },
        }
    ]
    return (
        <main>
            <div className="w-full bg-blue">
                <div className="container p-20">
                    <h1>Work</h1>
                    <p>I am a web developer, computer technician, and an entrepreneur with a lifelong dream to build great products. I have broken down my relevant work into chronological order below, with a detailed view for each job on tap.</p>
                </div>
            </div>
            {/* <div className={styles.timelineWrapper}> */}
            <div className="timeline-wrapper">
                <VerticalTimeline lineColor="navy">
                    {
                        jobs.map((job, i) => { 
                            return (
                                <VerticalTimelineElement
                                    key={i}
                                    className="vertical-timeline-element"
                                    contentStyle={{ background: 'navy', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  navy' }}
                                    date={job.period}
                                    iconStyle={{ background: job.status === STATUS.COMPLETE ? 'navy' : '#fff', color: job.status === STATUS.COMPLETE ? '#fff' : 'navy' }}
                                    icon={job.icon}
                                    onTimelineElementClick={() => router.push(`/work/${job.id}`)}
                                    // onTimelineElementClick={() => this.props.history.push(`/work/${job.title.split(" ").join("-").toLowerCase()}`)}
                                >
                                    <h3 className="vertical-timeline-element-title">{job.name}</h3>
                                    <h4 className="vertical-timeline-element-subtitle m-0">{job.role}</h4>
                                    <p>{job.description.short}</p>
                                    <span className="view-btn">View</span>
                                    <span className={`status-icon ${job.status === STATUS.COMPLETE ? 'green' : 'yellow'}`}>{job.status === STATUS.COMPLETE ? <FaCheck /> : <FaClock />}</span>
                                </VerticalTimelineElement>
                            )
                        })
                    }
                </VerticalTimeline> 
            </div>
        </main>
    );
}