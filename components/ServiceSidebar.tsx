import PricingSummary from "./PricingSummary";
import QueryForm from "./QueryForm";

type Props = {
  price: string;
};

export default function ServiceSidebar({ price }: Props) {
  return (
    <div className="sticky top-24 space-y-12">
      <PricingSummary price={price} />
      <QueryForm />
    </div>
  );
}
