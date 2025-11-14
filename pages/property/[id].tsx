import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          <PropertyDetail property={property} />
          <ReviewSection reviews={property.reviews || []} />
        </div>
        {/* Booking sidebar */}
        <div className="w-full lg:w-1/3">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
}