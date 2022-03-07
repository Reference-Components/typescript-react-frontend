import { api } from "../../lib/api";

export const getTeams = () => {
  return api.get("/teams");
};

export const getTeam = (teamId: string) => {
  return api.get(`/team/${teamId}`);
};

export const addTeam = (name: string) => {
  return api.post("/teams/new", { name });
};

export const addTeamMembers = (teamId: string, userIds: string[]) => {
  return api.post("/teams/addMembers", { teamId, userIds });
};

export const deleteTeam = (teamId: string) => {
  return api.delete(`/teams/${teamId}`);
};
