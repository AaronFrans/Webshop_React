const ConfirmItem = (props) => {


  const { item, id } = props;

  const calculatePrice = (price, amount) => {
    return price * amount;
  };

  return (
    <>
      <div key={id + "grid"} className="grid-confirm-item">
        <div key={id + "griditem 1"}>{item.quantity}x</div>
        <div key={id + "griditem 2"}>{item.name}</div>
        <div key={id + "griditem 3"}>
          € {calculatePrice(item.price, item.quantity)}
        </div>
      </div>
    </>
  );
};

export default ConfirmItem;
