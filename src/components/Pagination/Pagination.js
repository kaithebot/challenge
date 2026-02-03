/**
 * Pagination Component
 * Handles 20-products-per-page navigation with professional controls
 * @module components/Pagination
 */

class Pagination extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.currentPage = 1;
        this.productsPerPage = 20;
        this.totalProducts = 0;
    }

    connectedCallback() {
        this.render();
        this.attachEventListeners();
        this.dispatchEvent(new CustomEvent('pagination-ready', { 
            detail: { currentPage: this.currentPage, productsPerPage: this.productsPerPage }
        }));
    }

    static get observedAttributes() {
        return ['current-page', 'total-products', 'products-per-page'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            switch(name) {
                case 'current-page':
                    this.currentPage = parseInt(newValue) || 1;
                    break;
                case 'total-products':
                    this.totalProducts = parseInt(newValue) || 0;
                    break;
                case 'products-per-page':
                    this.productsPerPage = parseInt(newValue) || 20;
                    break;
            }
            this.render();
        }
    }

    render() {
        const totalPages = Math.ceil(this.totalProducts / this.productsPerPage);
        const currentPage = Math.min(Math.max(this.currentPage, 1), totalPages);
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin: 40px 0;
                    padding: 20px;
                }
                
                .pagination-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                }
                
                .pagination-info {
                    font-size: 14px;
                    color: #666;
                    text-align: center;
                }
                
                .pagination-controls {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                
                .page-btn {
                    background: #ffffff;
                    border: 2px solid #e0e0e0;
                    padding: 12px 18px;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-size: 14px;
                    font-weight: 500;
                    min-width: 45px;
                    text-align: center;
                    text-decoration: none;
                    color: inherit;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .page-btn:hover {
                    border-color: #d4a574;
                    background: rgba(212, 165, 116, 0.1);
                    transform: translateY(-1px);
                }
                
                .page-btn.active {
                    background: #d4a574;
                    color: white;
                    border-color: #d4a574;
                }
                
                .page-btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    transform: none;
                }
                
                .page-btn.nav {
                    font-size: 12px;
                    min-width: auto;
                    padding: 10px 14px;
                }
                
                .page-info {
                    font-size: 13px;
                    color: #666;
                    margin: 0 10px;
                }
                
                .page-range {
                    font-size: 12px;
                    color: #888;
                }
                
                .products-per-page {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: 15px;
                }
                
                .per-page-label {
                    font-size: 13px;
                    color: #666;
                }
                
                .per-page-select {
                    padding: 6px 10px;
                    border: 2px solid #e0e0e0;
                    border-radius: 6px;
                    font-size: 13px;
                    background: white;
                    cursor: pointer;
                }
            </style>
            
            <div class="pagination-container">
                <div class="pagination-info">
                    Showing products ${this.getCurrentRange(currentPage, totalPages)}
                    of ${this.totalProducts} total products
                </div>
                
                <div class="pagination-controls">
                    ${this.generatePaginationControls(currentPage, totalPages)}
                </div>
                
                <div class="products-per-page">
                    <label class="per-page-label">Products per page:</label>
                    <select class="per-page-select" id="products-per-page">
                        <option value="20" ${this.productsPerPage === 20 ? 'selected' : ''}>20</option>
                        <option value="25" ${this.productsPerPage === 25 ? 'selected' : ''}>25</option>
                        <option value="30" ${this.productsPerPage === 30 ? 'selected' : ''}>30</option>
                        <option value="50" ${this.productsPerPage === 50 ? 'selected' : ''}>50</option>
                    </select>
                </div>
            </div>
        `;

        this.populateControls(currentPage, totalPages);
        this.attachEventListeners();
    }

    generatePaginationControls(currentPage, totalPages) {
        let controls = [];
        
        // Previous button
        controls.push(`
            <button class="page-btn nav" ${currentPage === 1 ? 'disabled' : ''} data-action="prev">
                ← Previous
            </button>
        `);

        // Page numbers with smart truncation
        const maxVisiblePages = 7;
        const pageNumbers = this.generatePageNumbers(currentPage, totalPages, maxVisiblePages);
        
        pageNumbers.forEach(pageNum => {
            if (pageNum === '...') {
                controls.push(`<span class="page-range">...</span>`);
            } else {
                controls.push(`
                    <button class="page-btn ${currentPage === pageNum ? 'active' : ''}" data-page="${pageNum}">
                        ${pageNum}
                    </button>
                `);
            }
        });

        // Next button
        controls.push(`
            <button class="page-btn nav" ${currentPage === totalPages ? 'disabled' : ''} data-action="next">
                Next →
            </button>
        `);

        return controls.join('');
    }

    generatePageNumbers(currentPage, totalPages, maxVisible = 7) {
        if (totalPages <= maxVisible) {
            return Array.from({length: totalPages}, (_, i) => i + 1);
        }

        const pages = [];
        const halfVisible = Math.floor(maxVisible / 2);
        
        // Always show first page
        pages.push(1);
        
        // Add ellipsis if needed at start
        if (currentPage > halfVisible + 1) {
            pages.push('...');
        }
        
        // Show pages around current page
        const start = Math.max(2, currentPage - halfVisible + 1);
        const end = Math.min(totalPages - 1, currentPage + halfVisible - 1);
        
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        
        // Add ellipsis if needed at end
        if (end < totalPages - 1) {
            pages.push('...');
        }
        
        // Always show last page
        pages.push(totalPages);
        
        return pages;
    }

    getCurrentRange(currentPage, totalPages) {
        const start = (currentPage - 1) * this.productsPerPage + 1;
        const end = Math.min(currentPage * this.productsPerPage, this.totalProducts);
        return `${start}-${end}`;
    }

    populateControls(currentPage, totalPages) {
        // Add click handlers for page buttons
        const pageButtons = this.shadowRoot.querySelectorAll('.page-btn[data-page]');
        pageButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const page = parseInt(btn.getAttribute('data-page'));
                this.goToPage(page);
            });
        });

        // Add navigation handlers
        const navButtons = this.shadowRoot.querySelectorAll('.page-btn[data-action]');
        navButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const action = btn.getAttribute('data-action');
                this.navigate(action);
            });
        });
    }

    attachEventListeners() {
        // Products per page change
        const perPageSelect = this.shadowRoot.querySelector('#products-per-page');
        if (perPageSelect) {
            perPageSelect.addEventListener('change', (e) => {
                this.updateProductsPerPage(parseInt(e.target.value));
            });
        }
    }

    goToPage(page) {
        if (page >= 1 && page <= Math.ceil(this.totalProducts / this.productsPerPage)) {
            this.currentPage = page;
            this.setAttribute('current-page', page.toString());
            
            this.dispatchEvent(new CustomEvent('page-changed', {
                detail: { currentPage: this.currentPage, totalPages: Math.ceil(this.totalProducts / this.productsPerPage) }
            }));
        }
    }

    navigate(direction) {
        const currentPage = this.currentPage;
        const totalPages = Math.ceil(this.totalProducts / this.productsPerPage);
        
        if (direction === 'prev' && currentPage > 1) {
            this.goToPage(currentPage - 1);
        } else if (direction === 'next' && currentPage < totalPages) {
            this.goToPage(currentPage + 1);
        }
    }

    updateProductsPerPage(perPage) {
        this.productsPerPage = perPage;
        this.currentPage = 1; // Reset to first page
        this.setAttribute('products-per-page', perPage.toString());
        
        this.dispatchEvent(new CustomEvent('per-page-changed', {
            detail: { productsPerPage: this.productsPerPage, currentPage: this.currentPage }
        }));
    }
}

// Register the custom element
customElements.define('pagination-component', Pagination);

export default Pagination;