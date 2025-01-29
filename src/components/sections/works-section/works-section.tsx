import MainButton from '@/components/ui/main-button/main-button';
import Work from '@/components/ui/work/work';
import { WORKS } from '@/data/works';
import './works-section.scss';
import { AppRoute, basePath } from '@/constants/const';

// @======================== WorksSection ========================@ //

function WorksSection(): React.JSX.Element {

  const worksList = WORKS.slice(0, 4);

  return (
    <section className='works scroll' id='works'>
      <div className='container'>
        <div className='works__inner'>
          <h2 className='works__heading heading'>My works</h2>
          <ul className='works__list'>
            {worksList.map(({ href, label, title, desc, technologies, imgSrc, gifSrc, gifMobSrc }) => {
              return (
                <Work
                  className={'works__item'}
                  key={label}
                  href={href}
                  label={label}
                  title={title}
                  desc={desc}
                  technologies={technologies}
                  imgSrc={imgSrc}
                  gifSrc={gifSrc}
                  gifMobSrc={gifMobSrc}
                />
              );
            })}
          </ul>
          <MainButton
            bemClassName='works__button'
            href={AppRoute.Works}
            text='See more'
            iconPath={`${basePath}/img/icons/go-to-arrow.svg`}
          />
        </div>
      </div>
    </section>
  );
}
export default WorksSection;