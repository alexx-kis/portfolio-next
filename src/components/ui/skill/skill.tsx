import Image from 'next/image';
import './skill.scss';

// ^======================== Skill ========================^ //

type SkillProps = {
  bemClassName: string;
  skillIcon: string;
  skillName: string;
};

export default function Skill(skillProps: SkillProps): React.JSX.Element {
  const { bemClassName, skillIcon, skillName } = skillProps;
  return (
    <li className={`${bemClassName} skill`}>
      <div className='skill__icon'>
        <Image
          src={skillIcon}
          alt={skillName}
          width={10}
          height={20}
        />
      </div>
      <div className='skill__name'>{skillName}</div>
    </li>
  );
};