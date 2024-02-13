const Add = ({ a, b }: { a: number; b: number }) => {
  return (
    <div>
      a = {a} <br />b = {b} <br />
      a+b = {a + b}
    </div>
  );
};

export default Add;
