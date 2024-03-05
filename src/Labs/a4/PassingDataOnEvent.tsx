const add = (a: number, b: number) => {
  alert(`${a} + ${b} = ${a + b}`);
};
function PassingDataOnEvent() {
  return (
    <div>
      <h2>Passing Data on Event</h2>
      <button
        onClick={() => add(5, 3)}
        // onClick={add(2, 3)}
        className="btn btn-primary"
      >
        Pass 5 and 3 to add()
      </button>
    </div>
  );
}
export default PassingDataOnEvent;
