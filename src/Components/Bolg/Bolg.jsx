import React from "react";

const Bolg = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-lg my-2">Q1:Props vs state</h1>
        <p className="font-semibold">
          Ans: props are variables passed from a parent component to a child
          component with a read-only intent. <br /> State, on the other hand, is
          comprised of variables that are initialized and updated directly by
          the component
        </p>
        <h1 className="font-bold text-lg my-2">Q2:How does useState work?</h1>
        <p className="font-semibold">
          Ans:useState is React Hook that allows you to add state to a
          functional component. It returns an <br />
          array with two values: the current state and a function to update it.
        </p>
        <h1 className="font-bold text-lg my-2">
          Q3:Purpose of useEffect other than fetching data.
        </h1>
        <p className="font-semibold">
          Ans:The useEffect is a hook in react.fetching data from an API is one
          of the most common use cases for <br /> useEffect.i can use it to
          update title .it can be used to add and remove event listeners to the
          DOM.
        </p>
        <h1 className="font-bold text-lg my-2">Q4:How Does React work?</h1>
        <p className="font-semibold">Ans:</p>
      </div>
    </div>
  );
};

export default Bolg;
