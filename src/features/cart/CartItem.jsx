import { formatCurrency } from "../../utilities/helpers";

function CartItem({ item }) {
	const { pizzaId, name, quantity, totalPrice } = item;
	console.log(pizzaId, name, quantity, totalPrice);

	return (
		<li>
			<p>
				{quantity}&times; {name}
			</p>
			<div>
				<p>{formatCurrency(totalPrice)}</p>
			</div>
		</li>
	);
}

export default CartItem;
