import { useSkillsAnimation } from '../../../hooks/use-skills-animation';
import Skill from '../../components/Skill/Skill';
import './skills-section.scss';
import { SKILLS_ITEMS } from './skillsItems';
// @======================== Skills ========================@ //

export default function Skills() {
  useSkillsAnimation();

  return (
    <section className='main__skills skills scroll'>
      <div className='container'>
        <div className='skills__inner'>
          <div className='skills__heading heading'>My skills</div>
          <div className='skills__content'>
            {SKILLS_ITEMS.map(({ skillsGroupTitle, skillsItems }, index) => {
              return (
                <div key={index} className='skills__group'>
                  <p className='skills__group-title'>{skillsGroupTitle}</p>
                  <ul className='skills__list'>
                    {skillsItems.map(({ skillIcon, skillName }, index) => {
                      return (
                        <Skill
                          key={index}
                          className='skills__item'
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
