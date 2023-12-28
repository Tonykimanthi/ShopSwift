import { IconType } from "react-icons";
// Icons
import { FcShipped } from "react-icons/fc";
import { MdCurrencyExchange } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

interface dataProps{
  icon: IconType,
  title: string,
  description: string
}

const ShippingInfo = () => {
  const shippingData: dataProps[] = [
    {
      icon: FcShipped,
      title: "Free Shipping",
      description: "Free shipping on all orders above $200"
    },
    {
      icon: MdCurrencyExchange,
      title: "30 Days Return",
      description: "Simply return within 30 days for an exchange"
    },
    {
      icon: RiSecurePaymentLine,
      title: "100% Payment Secure",
      description: "Pay with a secure payment for all your orders"
    },
  ];


  return (
    <section className="bg-slate-100 py-5 flex justify-center items-center gap-x-3 gap-y-5 max-sm:flex-col border-b border-slate-300">
      {shippingData.map((item) => (
        <article className="flex items-center gap-x-3">
        <item.icon className="w-12 h-12 fill-primary-blue"/>
        <div>
          <h3 className="text-xl font-bold leading-5">{item.title}</h3>
          <p className="mt-1 leading-4 max-w-56">{item.description}</p>
        </div>
      </article>
      ))}
    </section>
  );
};

export default ShippingInfo;
