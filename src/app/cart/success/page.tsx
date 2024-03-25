import Stripe from "stripe";

export default async function CartSuccess({
	searchParams,
}: {
	searchParams: { session_id: string };
}) {
	if (!process.env.STRIPE_SECRET_KEY) {
		return null;
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});
	const stripeCheckoutSession = await stripe.checkout.sessions.retrieve(searchParams.session_id);


	return <div className="flex flex-col justify-center items-center p-20 text-5xl">
		Dziękujemy za złożenie zamówienia
		<div className="text-xl mt-9">Id zamówienia: {stripeCheckoutSession.id}</div>
	</div>;
}
