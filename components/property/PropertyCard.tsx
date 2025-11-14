import React from "react";
import { PropertyCardProps } from "@/interfaces";
import Button from "@/components/common/Button";
import Link from "next/link";

export default function PropertyCard({ property }: { property: PropertyCardProps }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative w-full h-48 bg-gray-200">
        {property.image && (
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover"
          />
        )}
        {property.discount && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {property.discount}
          </div>
        )}
        {property.category && property.category.length > 0 && (
          <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
            {property.category.map((cat) => (
              <span
                key={cat}
                className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold"
              >
                {cat}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Property Name */}
        <h3 className="text-lg font-bold text-gray-800 truncate">
          {property.name}
        </h3>

        {/* Address */}
        <p className="text-gray-600 text-sm mt-1">
          {property.address.city}, {property.address.state}, {property.address.country}
        </p>

        {/* Rating */}
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">
            {"★".repeat(Math.floor(property.rating))}
            {property.rating % 1 !== 0 && "★"}
          </div>
          <span className="text-gray-600 text-sm ml-2">({property.rating})</span>
        </div>

        {/* Offers Section */}
        <div className="grid grid-cols-3 gap-2 mt-3 text-center">
          <div className="py-2 bg-gray-100 rounded">
            <p className="text-xs text-gray-600">Bed</p>
            <p className="text-sm font-semibold text-gray-800">{property.offers.bed}</p>
          </div>
          <div className="py-2 bg-gray-100 rounded">
            <p className="text-xs text-gray-600">Shower</p>
            <p className="text-sm font-semibold text-gray-800">{property.offers.shower}</p>
          </div>
          <div className="py-2 bg-gray-100 rounded">
            <p className="text-xs text-gray-600">Occupants</p>
            <p className="text-sm font-semibold text-gray-800">{property.offers.occupants}</p>
          </div>
        </div>

        {/* Price Section */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-xs">Price per night</p>
            <p className="text-2xl font-bold text-gray-800">
              ${property.price}
              <span className="text-sm text-gray-600 font-normal">/night</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-2">
          <Link href={`/property/${property.name}`} className="flex-1">
            <Button variant="primary" size="md">
              View Details
            </Button>
          </Link>
          <Link href={`/booking`} className="flex-1">
            <Button variant="secondary" size="md">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
