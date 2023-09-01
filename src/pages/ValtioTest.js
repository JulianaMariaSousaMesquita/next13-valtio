import React from 'react';
import { proxy, useSnapshot } from 'valtio';

// Criando um objeto de estado observável
const state = proxy({ count: 0 });

function Counter() {
  // Usando useSnapshot para observar o estado
  const snap = useSnapshot(state);

  return (
    <div>
      <p>Count: {snap.count}</p>
      <button onClick={() => (state.count += 1)}>Increment</button>
    </div>
  );
}

export default function ValtioTest() {
  return (
    <div>
      <h1>Valtio Example</h1>
      <Counter />
    </div>
  );
}