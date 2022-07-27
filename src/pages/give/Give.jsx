import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

export default function App() {
  const config = {
    public_key: "FLWPUBK_TEST-995d55339f4c8ccc70c0399055fdaedc-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "UGX",
    redirect_url:
      "https://developer.flutterwave.com/docs/collecting-payments/standard",
    payment_options: "card, ussd, mobilemoneyghana",
    customer: {
      email: "user@gmail.com",
      phonenumber: "07064586146",
      name: "Geofrey",
    },
    customizations: {
      title: "Fellowship Giving",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div>
      <div className="about__wrapper">
        <h1>Giving</h1>
      </div>
      <h1>Hello Test user</h1>

      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Payment with React hooks
      </button>
    </div>
  );
}
