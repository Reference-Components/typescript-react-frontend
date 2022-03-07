import React, { useEffect, useState } from "react";
import { User } from "../../users/types";
import { getTeam } from "../api";

interface Props {
  teamId: string;
}

const TeamMemberList: React.FC<Props> = ({ teamId }) => {
  const [members, setMembers] = useState<User[]>([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const res = await getTeam(teamId);
      setMembers(res);
    };
    fetchTeams();
  }, []);

  return (
    <>
      {members.map((member) => (
        <p>
          {member.userId} - {member.username}
        </p>
      ))}
    </>
  );
};

export default TeamMemberList;
