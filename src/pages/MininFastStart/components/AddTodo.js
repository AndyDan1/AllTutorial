import React, {memo, useState} from 'react';
import classes from '../styles.module.scss';
import PropTypes from "prop-types";

const useInputValue = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue)

  return {
    bind:{
      value,
      onChange: e => setValue(e.target.value)
    },
    clear:()=>setValue(''),
    value:()=>value
  }
}

const AddTodo = ({onCreate}) => {
  const input = useInputValue('')

  const submitHandler = (e) => {
    e.preventDefault()

    if (input.value().trim()) {
      onCreate(input.value())
      input.clear()
    }
  }

  return (
    <form className={classes.form_add} onSubmit={submitHandler}>
      <input
        type="text"
        {...input.bind}
      />
      <button
        type='submit'
      >
        Добавить
      </button>
    </form>
  );
};

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default memo(AddTodo);