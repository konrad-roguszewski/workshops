import React from 'react';
import { useState } from 'react';

// example 5 - props

interface Props {
  name: string;
}

const HelloWorld: React.FC<Props> = ({ name }) => {
  // example 6 - useState

  const [state] = useState<{ fullname: string | null }>({ fullname: '' });

  return <div>hello {name}</div>;
};

// example 7 - jsx generic

interface FormProps<T> {
  values: T;
  children: (values: T) => JSX.Element;
}

const Form = <T extends {}>({ values, children }: FormProps<T>) => {
  return children(values);
};

function App() {
  return (
    <div className="App">
      <Form<{ firstName: string | null }> values={{ firstName: 'bob' }}>
        {values => <div>{values.firstName}</div>}
      </Form>
    </div>
  );
}

export default App;
