import { type FormEvent } from 'react';

export default function NewGoal() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('submitted');

    new FormData(event.currentTarget);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" name="goal" type="text" />
      </p>
      <p>
        <label htmlFor="summary">Your summary</label>
        <input id="summary" name="summary" type="text" />
      </p>

      <p>
        <button>Add goal</button>
      </p>
    </form>
  );
}
