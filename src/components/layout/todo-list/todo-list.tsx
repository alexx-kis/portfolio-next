'use client';

import TodoItem from '@/components/ui/todo-item/todo-item';
import { nanoid } from 'nanoid';
import { ChangeEvent, useState } from 'react';
import './todo-list.scss';

// ^======================== TodoList ========================^ //

export type Item = {
  id: string;
  value: string;
  checked: boolean;
};

function TodoList(): React.JSX.Element {

  const [items, setItems] = useState<(Item)[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    setItems([...items, { id: nanoid(), value: inputValue, checked: false }]);
    setInputValue('');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    const isChecked = e.target.checked;

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: isChecked } : item
      )
    );
  };

  const handleRemoveButtonClick = (id: string) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  return (
    <div className='todo-list'>
      <p className='todo-list__title'>
        To-Do List
      </p>
      <div className='todo-list__field'>
        <input
          type='text'
          className='todo-list__input'
          placeholder='add your task here'
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className='todo-list__button'
          onClick={handleButtonClick}
        >
          Add
        </button>
      </div>
      <div className='todo-list__items-container'>
        <ul className='todo-list__items'>
          {items.length !== 0 && (
            items.map(({ id, value, checked }, index) => (
              <li
                key={index}
                className='todo-list__item'
              >
                <TodoItem
                  id={id}
                  value={value}
                  checked={checked}
                  onCheckboxChange={(e) => handleCheckboxChange(e, id)}
                  onRemoveButtonClick={() => handleRemoveButtonClick(id)}
                />
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
export default TodoList;