'use client';

import Skill from '@/components/ui/skill/skill';
import { SKILLS } from '@/data/skills';
import { useSkillsAnimation } from '@/hooks/animation/use-skills-animation';
import './skills-section.scss';
// @======================== Skills ========================@ //

export default function SkillsSection() {
  useSkillsAnimation();

  return (
    <section className='main__skills skills scroll'>
      <div className='container'>
        <div className='skills__inner'>
          <h2 className='skills__heading heading'>
            My skills
          </h2>
          <div className='skills__content'>
            {SKILLS.map(({ skillsGroupTitle, skillsItems }, index) => {
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
      </div>
    </section>
  );
}
