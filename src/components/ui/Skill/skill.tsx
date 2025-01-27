import './skill.scss';

// ^======================== Skill ========================^ //

export default function Skill({className, skillIcon, skillName}) {
  return (
    <li className={`${className} skill`}>
      <div className='skill__icon'>
        <img src={skillIcon} alt='' />
      </div>
      <div className='skill__name'>{skillName}</div>
    </li>
  );
};