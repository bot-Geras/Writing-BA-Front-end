
// import reviews data
import { studentsReviewData } from './ReviewsData';

// import all images
import francis from './assets/images/francis.png';
import vector from './assets/images/vector.png';
import vector2 from './assets/images/vector2.png';
import frame from './assets/images/services/Frame.png';
import frame2 from './assets/images/services/Frame2.png';
import frame3 from './assets/images/services/Frame3.png';

type heroProps = {
    title: string;
    subtitle: string;
    btnText: string;
    btnMobile: string;
    image: any;
}

type aboutProps = {
    title: string;
    infos: any[];
}

type servicesProps = {
    title: string;
    subtitle: string;
    mainServices: any[];
}

type reviewProps = {
    title: string;
    subtitle: string;
    reviews: any;
}

type subscribeProps = {
    title: string;
    subtitle: string;
}

export const heroData:heroProps = {
    title: `Achieve your dreams with our IELTS preparation course!`,
    subtitle: 
        `Our comprehensive IELTS Preparation Course is designed to help you overcome any 
        obstacles and reach your full potential.`,
    btnText: `Sign up for our IELTS Preparation Course today`,
    btnMobile: `Get started for IELTS`,
    image: francis,
}

export const aboutData:aboutProps = {
    title: `Let WritingBA be your resource to pass the IELTS with a high score.`,
    infos: [
        {img: vector, text:`Experienced trainers with a proven track record of helping students achieve high scores`,},
        {img: vector2, text:`Flexible and interactive online classes to suit your schedule`,},
        {img: vector, text:`Comprehensive course materials that are regularly updated to align with the latest exam format`,},
        {img: vector2, text:`Regular assessments to track your progress and identify areas for improvement`,},
        {img: vector, text:`A supportive and encouraging learning environment to help you reach your goals`,},
    ]
}

export const featuresData:servicesProps = {
    title: `our services`,
    subtitle: `We Prepare Passionate Nigerians for the IELTS.`,
    mainServices: [
        {
            img: frame,
            title: `High-Quality Videos`,
            subtitle: `We provide excellent recorded course content for Nigerian students.`,
            delay: '400',
        },
        {
            img: frame2,
            title: `Top-Notch Scoring Strategies`,
            subtitle: `Your instructor provides well-researched strategies to help you get a competitive score on your IELTS Exam.`,
            delay: '700',
        },
        {
            img: frame3,
            title: `Exceptional Educator`,
            subtitle: `Your instructor is an IELTS specialist and has 9 years experience teaching it.`,
            delay: '1000',
        },
    ]
}

export const reviewsData:reviewProps = {
    title: `our testimonials`,
    subtitle: `see what our students are saying about us`,
    reviews: studentsReviewData,
}

export const subscribeData:subscribeProps = {
    title: `Subscribe to get free updates on all our writing courses.`,
    subtitle: `Join our IELTS Preparation Course and start achieving your academic and career goals. With experienced trainers, flexible online classes, comprehensive course materials, and regular assessments, we will give you the skills and confidence you need to succeed.`,
}