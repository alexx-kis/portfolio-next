import Image from 'next/image';
import './skill.scss';

// ^======================== Skill ========================^ //

type SkillProps = {
  skillIcon: string;
  skillName: string;
};

export default function Skill(skillProps: SkillProps): React.JSX.Element {
  const { skillIcon, skillName } = skillProps;
  return (
    <li className='skills__item skill'>
      <div className='skill__icon'>
        <Image
          src={skillIcon}
          alt={skillName}
          width={20}
          height={20}
        />
      </div>
      <div className='skill__name'>{skillName}</div>
    </li>
  );
};