import useCounter from '../../hooks/useCounter';
import Child from './Child';

export const Father = () => {
  const numbers = [2, 4, 6, 8, 10];
  const { counter, increment } = useCounter({
    initialState: 0,
  });

  console.log('Generated Father');

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {counter} </p>

      <hr />

      {numbers.map((n) => {
        return <Child key={n} factor={n} onIncrement={increment} />;
      })}
    </div>
  );
};
