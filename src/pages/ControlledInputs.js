import { useState } from 'react';

const ControlledInputs = () => {
  const [inputs, setInputs] = useState({ title: '', body: '', options:'' });
  const { title, body, options } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  }
  

  return (
    <>
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmit}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            placeholder="Insert Title"
            required
          />
          <label>body</label>
          <textarea
            name="body"
            value={body}
            onChange={onChange}
            placeholder="Insert Information"
            required
          ></textarea>
          <select name='options' defaultValue='select' value={options} onChange={onChange}>
            <option value="option1">option1</option>
            <option value="option2">option2</option>
          </select>
          <button>Add</button>
        </form>
      </div>
      <span>
        title:{title} body:{body}
      </span>
    </>
  );
};

export default ControlledInputs;
