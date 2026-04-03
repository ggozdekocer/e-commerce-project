import { FaLinkedin } from "react-icons/fa";
import { members } from "../mock/mockData";

const TeamMember = ()=> {
    return (
        <>
            <div className="flex flex-col gap-10 items-center text-center pt-40 px-12 pb-20 lg:px-60">
                <p className="text-5xl font-bold text-detail-page">Meet Our Team</p>
                <p className="text-2xl text-custom-gray font-light">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="flex flex-col items-center gap-18 lg:grid lg:grid-rows-2 lg:grid-cols-4 lg:px-20">
                {members.map((member) => (
                <div key={member.id} className="flex flex-col gap-2">
                    <img src={member.profileImg} alt={member.username} />
                    <h3 className="text-detail-page font-normal! pt-2 lg:text-xl!">{member.username}</h3>
                    <p className="flex flex-row items-center gap-3 text-xl text-custom-gray lg:text-lg">{member.position}<span className="text-xl"><a href={member.linkedin}><FaLinkedin /></a></span></p>
                </div>
                ))}
            </div>
        </>
    )
}

export default TeamMember;