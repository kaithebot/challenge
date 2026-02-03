'use client'

import React from 'react'
import { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
  whatsappNumber?: string
}

/**
 * ProductCard Component
 * Renders individual furniture product with WhatsApp integration
 */
export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  whatsappNumber = '+17138089064' 
}) => {
  const generateWhatsAppMessage = () => {
    return `Hi! I'm interested in the ${product.name}. Can you provide pricing and availability information?`
  }

  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(generateWhatsAppMessage())}`

  const formatSpecValue = (value: unknown): string => {
    if (typeof value === 'object' && value !== null) {
      const obj = value as Record<string, string>
      return Object.entries(obj)
        .map(([k, v]) => `${k}: ${v}`)
        .join(', ')
    }
    return String(value)
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex-1 leading-tight">
          {product.name}
        </h3>
        <span className="bg-amber-600 text-white text-xs px-2 py-1 rounded-full ml-2 whitespace-nowrap">
          {product.category}
        </span>
      </div>

      {/* Collection */}
      <div className="text-xs text-amber-600 uppercase font-semibold mb-2">
        {product.collection} Collection
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {product.description}
      </p>

      {/* Features */}
      {product.features && product.features.length > 0 && (
        <ul className="mb-4 space-y-1">
          {product.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start">
              <span className="text-amber-600 mr-2">✓</span>
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Specifications */}
      {product.specifications && Object.keys(product.specifications).length > 0 && (
        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Specifications</h4>
          <div className="grid grid-cols-2 gap-1 text-xs">
            {Object.entries(product.specifications).slice(0, 4).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="text-gray-500 capitalize">{key}:</span>
                <span className="text-gray-900 font-medium truncate ml-1">
                  {formatSpecValue(value)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center py-3 px-4 rounded-full text-sm font-semibold transition-colors flex items-center justify-center gap-2"
        >
          💬 Order via WhatsApp
        </a>
      </div>
    </div>
  )
}

export default ProductCard
