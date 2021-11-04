
// interface InterfaceClassroom {
//     image: string,
//     title: string,
//     skills: string,
//     trainer: string,
//     buy: string,
//     price: string,
//     date: string,
//     time: string,
// }
// export default InterfaceClassroom;


export interface classroomData {

    id: string;
    image: string,
    title: string,
    skills: string,
    trainer: string,
    topic: string,
    badge:string,
    cover:string,
    organizedBy:string,
    buy: string,
    price: string,
    date: string,
    time: string,
    totalContentDuration:string,
    fromDate: string,
    commercials:{
        value: number
    }
    // value:number,
    // commercials:number,
    rating:number,
    count:number,
    enrolledParticipants: string,
    description:string,
    prerequisite: string,
    about: string,
    syllabusId: string,
    category: string,
}
// export default InterfaceClassroom;
