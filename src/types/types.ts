export type SkillType = {
  skillsGroupTitle: string;
  skillsItems: SkillItemType[],
};

export type SkillItemType = {
  skillName: string,
  skillIcon: string,
  skillDescription?: string;
};