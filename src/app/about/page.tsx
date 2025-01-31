import Certificates from '@/components/layout/certificates/certificates';
import Skills from '@/components/layout/skills/skills';
import { basePath } from '@/constants/const';
import { aboutPageText } from '@/data/about';
import { SKILLS_EXPANDED } from '@/data/skills';
import { splitTextToParagraphs } from '@/utils/utils';
import { Metadata } from 'next';
import Image from 'next/image';
import './about-page.scss';

// #======================== AboutPage ========================# //

export const metadata: Metadata = {
  title: "Portfolio - About",
};

function Page(): React.JSX.Element {
  return (
    <main>
      <section className='about-hero'>
        <div className='container'>
          <h1 className='about-hero__heading heading _main'>
            About me
          </h1>
          <div className='about-hero__inner'>
            <div className='about-hero__image-wrapper'>
              <Image
                src={`${basePath}/img/avatar-big.png`}
                alt=''
                width={1061}
                height={1108}
              />
            </div>
            <div className='about-hero__text-box'>
              {splitTextToParagraphs(aboutPageText).map((paragraph) => (
                <p key={paragraph} className='about-hero__text'>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <section>
            <Skills data={SKILLS_EXPANDED} />
          </section>

          <section>
            <Certificates />
          </section>

        </div>
      </section>
    </main>
  );
}
export default Page;