import Container from '@/components/shared/container/container';
import './todo-list.scss';

// #======================== Page ========================# //

function Page(): React.JSX.Element {
  return (
    <main className='todo-list-page'>
      <Container>
        <div className='todo-list-page__inner'>
          <div className='todo-list'>

          </div>
        </div>
      </Container>
    </main>
  );
}
export default Page;