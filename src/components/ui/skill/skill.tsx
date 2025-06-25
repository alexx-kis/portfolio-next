import { AppRoute } from '@/constants/const';
import { useGlowingHover } from '@/hooks/useGlowingHover';
import clsx from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import './skill.scss';

// ^======================== Skill ========================^ //

type SkillProps = {
  bemClassName: string;
  skillIcon: string;
  skillName: string;
  skillDescription?: string;
};

export default function Skill(skillProps: SkillProps): React.JSX.Element {
  const { bemClassName, skillIcon, skillName, skillDescription } = skillProps;
  const pathname = usePathname();
  const skillRef = useGlowingHover();
  return (
    <li
      className={clsx(
        `${bemClassName} skill`,
        { '_expanded': pathname === AppRoute.ABOUT }
      )}
    >
      <div
        className='skill__inner'
        ref={skillRef}
      >
        <div className='skill__icon'>
          <Image
            src={skillIcon}
            alt={skillName}
            width={10}
            height={20}
          />
        </div>
        <div className='skill__name'>{skillName}</div>
      </div>
      {
        skillDescription &&
        <p className='skill__description'>
          {skillDescription}
        </p>
      }
    </li>
  );
};