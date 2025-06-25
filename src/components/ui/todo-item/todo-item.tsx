import clsx from 'clsx';
import { ChangeEvent } from 'react';
import './todo-item.scss';

// ^======================== TodoItem ========================^ //

type TodoItemProps = {
  id: string;
  value: string;
  checked: boolean;
  onCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onRemoveButtonClick: () => void;
};

function TodoItem(todoItemProps: TodoItemProps): React.JSX.Element {

  const { id, value, checked, onCheckboxChange, onRemoveButtonClick } = todoItemProps;

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => { onCheckboxChange(e); };
  return (
    <div
      className={clsx(
        'todo-item',
        { '_checked': checked }
      )}
    >
      <label
        className='todo-item__label'
        style={{
          backgroundImage: checked ? ('url(/img/icons/checkbox-checked.svg)') : '',
        }}
      >
        <input
          className='todo-item__input'
          type='checkbox'
          name='todo-item-checkbox'
          id={id}
          checked={checked}
          onChange={handleCheckboxChange}
        />
      </label>
      <p className='todo-item__text'>{value}</p>
      <button
        className='todo-item__button'
        onClick={onRemoveButtonClick}
      >
        <div className='todo-item__button-cross'>+</div>
      </button>
    </div>
  );
}
export default TodoItem;