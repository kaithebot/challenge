'use client'

import React from 'react'

interface PaginationProps {
  currentPage: number
  totalProducts: number
  productsPerPage: number
  onPageChange: (page: number) => void
}

/**
 * Pagination Component
 * Handles page navigation for product catalog
 */
export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalProducts,
  productsPerPage,
  onPageChange
}) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage)
  
  if (totalPages <= 1) return null

  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = []
    const maxVisible = 7
    
    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    pages.push(1)
    
    if (currentPage > 3) {
      pages.push('...')
    }
    
    const start = Math.max(2, currentPage - 1)
    const end = Math.min(totalPages - 1, currentPage + 1)
    
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    
    if (currentPage < totalPages - 2) {
      pages.push('...')
    }
    
    pages.push(totalPages)
    
    return pages
  }

  const startItem = (currentPage - 1) * productsPerPage + 1
  const endItem = Math.min(currentPage * productsPerPage, totalProducts)

  return (
    <div className="flex flex-col items-center gap-4 my-8">
      {/* Info */}
      <p className="text-sm text-gray-600">
        Showing {startItem}-{endItem} of {totalProducts} products
      </p>

      {/* Controls */}
      <div className="flex items-center gap-2 flex-wrap justify-center">
        {/* Previous */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 text-sm border-2 border-gray-200 rounded-lg hover:border-amber-600 hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          ← Previous
        </button>

        {/* Page Numbers */}
        {getPageNumbers().map((page, index) => (
          page === '...' ? (
            <span key={`ellipsis-${index}`} className="px-2 text-gray-400">...</span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page as number)}
              className={`min-w-[40px] py-2 text-sm border-2 rounded-lg transition-colors ${
                currentPage === page
                  ? 'bg-amber-600 text-white border-amber-600'
                  : 'border-gray-200 hover:border-amber-600 hover:bg-amber-50'
              }`}
            >
              {page}
            </button>
          )
        ))}

        {/* Next */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-sm border-2 border-gray-200 rounded-lg hover:border-amber-600 hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  )
}

export default Pagination
