import Works from '@/components/layout/works-list/works-list';
import { WORKS } from '@/data/works';
import './works-page.scss';

// #======================== WorksPage ========================# //

function Page(): React.JSX.Element {
  return (
    <main>
      <section className='works-hero'>
        <div className='container'>
          <h2 className='works-hero__heading heading _main'>
            My Works
          </h2>
          <Works worksList={WORKS} />
        </div>
      </section>
    </main>
  );
}
export default Page;