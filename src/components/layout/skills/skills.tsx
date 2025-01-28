'use client';

import Skill from '@/components/ui/skill/skill';
import { SKILLS_CONCISE } from '@/data/skills';
import './skills.scss';
// @======================== Skills ========================@ //

export default function Skills() {
  return (
    <div className='skills'>
      <h3 className='skills__heading heading _small'>
        My skills
      </h3>
      <div className='skills__container'>
        {SKILLS_CONCISE.map(({ skillsGroupTitle, skillsItems }, index) => {
          return (
            <div key={index} className='skills__group'>
              <p className='skills__group-title'>{skillsGroupTitle}</p>
              <ul className='skills__list'>
                {skillsItems.map(({ skillIcon, skillName }, index) => {
                  return (
                    <Skill
                      key={index}
                      skillIcon={skillIcon}
                      skillName={skillName}
                    />
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
