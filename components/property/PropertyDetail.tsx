import { PropertyDetailProps } from "@/interfaces/index";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button";

const PropertyDetail: React.FC<{ property: PropertyDetailProps }> = ({ property }) => {
  if (!property) {
    return <div className="text-center py-10">Property data not available</div>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900">{property.name}</h1>
        <div className="flex items-center space-x-4 mt-2">
          <div className="flex items-center">
            <span className="text-yellow-500 font-semibold">{property.rating}</span>
            <span className="text-yellow-400 ml-1">{"★".repeat(Math.floor(property.rating))}</span>
            {property.rating % 1 !== 0 && <span className="text-yellow-300">★</span>}
          </div>
          <span className="text-gray-600">
            {property.address.city}, {property.address.state}, {property.address.country}
          </span>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-6 mb-6">
        <div className="col-span-2">
          {property.image ? (
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          ) : (
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">No image available</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="col-span-2">
          {/* Description Section */}
          {property.description && (
            <div className="mb-8 pb-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                About this place
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {property.description}
              </p>
            </div>
          )}

          {/* Amenities/Categories Section */}
          {property.category && property.category.length > 0 && (
            <div className="mb-8 pb-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What this place offers
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {property.category.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-blue-50 p-3 rounded-lg"
                  >
                    <span className="text-blue-600 font-semibold">✓</span>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Amenities Details Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Property Details
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm mb-1">Bedrooms</p>
                <p className="text-2xl font-bold text-gray-900">
                  {property.offers.bed}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm mb-1">Bathrooms</p>
                <p className="text-2xl font-bold text-gray-900">
                  {property.offers.shower}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm mb-1">Max Occupants</p>
                <p className="text-2xl font-bold text-gray-900">
                  {property.offers.occupants}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Booking Card */}
        <div className="col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-6">
            {/* Price Section */}
            <div className="mb-6">
              <p className="text-gray-600 text-sm mb-2">Price per night</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">
                  ${property.price}
                </span>
                <span className="text-gray-600 ml-2">/night</span>
              </div>
              {property.discount && (
                <p className="text-green-600 font-semibold mt-2">
                  {property.discount} discount available
                </p>
              )}
            </div>

            {/* Booking Buttons */}
            <div className="space-y-3">
              <Link href="/booking" className="block">
                <Button variant="primary" size="lg">
                  Book Now
                </Button>
              </Link>
              <Button variant="secondary" size="lg">
                Contact Owner
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-xs text-center">
                You won't be charged yet
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      {property.reviews && property.reviews.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Guest Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {property.reviews.map((review, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  {review.avatar && (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-yellow-500 text-sm">
                      {"★".repeat(review.rating)}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetail;