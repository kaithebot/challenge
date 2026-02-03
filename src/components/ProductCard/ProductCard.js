/**
 * ProductCard Component
 * Renders individual furniture product with WhatsApp integration
 * @module components/ProductCard
 */

class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.attachEventListeners();
    }

    static get observedAttributes() {
        return ['product-data'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'product-data' && oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        const product = JSON.parse(this.getAttribute('product-data') || '{}');
        const whatsAppNumber = this.getAttribute('whatsapp-number') || '+17138089064';
        const whatsAppMessage = this.generateWhatsAppMessage(product);

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background: #ffffff;
                    border-radius: 12px;
                    padding: 25px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    margin-bottom: 20px;
                }
                
                :host:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.12);
                }
                
                .product-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 15px;
                }
                
                .product-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 20px;
                    font-weight: 600;
                    color: #2c2c2c;
                    margin: 0;
                    line-height: 1.3;
                    flex: 1;
                }
                
                .product-badge {
                    background: #d4a574;
                    color: white;
                    padding: 4px 8px;
                    border-radius: 12px;
                    font-size: 11px;
                    font-weight: 600;
                    text-transform: uppercase;
                    margin-left: 10px;
                    white-space: nowrap;
                }
                
                .product-category {
                    font-size: 12px;
                    color: #d4a574;
                    text-transform: uppercase;
                    font-weight: 600;
                    margin-bottom: 8px;
                }
                
                .product-description {
                    color: #666;
                    font-size: 15px;
                    line-height: 1.5;
                    margin-bottom: 15px;
                }
                
                .product-features {
                    list-style: none;
                    margin: 0 0 15px 0;
                    padding: 0;
                }
                
                .product-features li {
                    position: relative;
                    padding-left: 20px;
                    margin-bottom: 5px;
                    color: #555;
                    font-size: 14px;
                }
                
                .product-features li:before {
                    content: "✓";
                    position: absolute;
                    left: 0;
                    color: #d4a574;
                    font-weight: bold;
                }
                
                .product-specs {
                    background: #f8f9fa;
                    padding: 15px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                }
                
                .specs-title {
                    font-size: 14px;
                    font-weight: 600;
                    color: #2c2c2c;
                    margin-bottom: 10px;
                }
                
                .spec-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 8px;
                    font-size: 13px;
                }
                
                .spec-item {
                    display: flex;
                    justify-content: space-between;
                    padding: 2px 0;
                }
                
                .spec-label {
                    font-weight: 500;
                    color: #555;
                }
                
                .spec-value {
                    color: #2c2c2c;
                    font-weight: 500;
                }
                
                .product-actions {
                    display: flex;
                    gap: 10px;
                    margin-top: auto;
                }
                
                .whatsapp-button {
                    background: #25D366;
                    color: white;
                    padding: 12px 24px;
                    border: none;
                    border-radius: 25px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    flex: 1;
                    gap: 8px;
                }
                
                .whatsapp-button:hover {
                    background: #128C7E;
                    transform: translateY(-1px);
                }
                
                .info-button {
                    background: transparent;
                    color: #2c2c2c;
                    border: 2px solid #e0e0e0;
                    padding: 10px 16px;
                    border-radius: 25px;
                    font-size: 13px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .info-button:hover {
                    border-color: #d4a574;
                    background: rgba(212, 165, 116, 0.1);
                }
                
                @media (max-width: 768px) {
                    .product-header { flex-direction: column; }
                    .product-badge { margin: 8px 0 0 0; }
                    .spec-grid { grid-template-columns: 1fr; }
                    .product-actions { flex-direction: column; }
                }
            </style>
            
            <div class="product-header">
                <h3 class="product-title"></h3>
                <span class="product-badge"></span>
            </div>
            
            <div class="product-category"></div>
            <p class="product-description"></p>
            
            <ul class="product-features"></ul>
            
            <div class="product-specs">
                <h4 class="specs-title">Specifications:</h4>
                <div class="spec-grid"></div>
            </div>
            
            <div class="product-actions">
                <a href="#" class="whatsapp-button" target="_blank">
                    💬 Order via WhatsApp
                </a>
                <button class="info-button">ℹ️ More Info</button>
            </div>
        `;

        this.populateData(product);
    }

    populateData(product) {
        // Populate title
        const titleElement = this.shadowRoot.querySelector('.product-title');
        titleElement.textContent = product.name || 'Product Name';

        // Populate category badge
        const badgeElement = this.shadowRoot.querySelector('.product-badge');
        badgeElement.textContent = product.category || 'Furniture';

        // Populate category
        const categoryElement = this.shadowRoot.querySelector('.product-category');
        categoryElement.textContent = product.collection || 'Furniture Collection';

        // Populate description
        const descriptionElement = this.shadowRoot.querySelector('.product-description');
        descriptionElement.textContent = product.description || 'Premium furniture product';

        // Populate features
        this.populateFeatures(product.features || []);

        // Populate specifications
        this.populateSpecifications(product.specifications || {});

        // Populate WhatsApp link
        this.updateWhatsAppLink(product);
    }

    populateFeatures(features) {
        const featuresElement = this.shadowRoot.querySelector('.product-features');
        featuresElement.innerHTML = features.map(feature => 
            `<li>${this.escapeHtml(feature)}</li>`
        ).join('');
    }

    populateSpecifications(specifications) {
        const specsGrid = this.shadowRoot.querySelector('.spec-grid');
        
        if (Object.keys(specifications).length === 0) {
            specsGrid.innerHTML = '<div class="spec-item"><span>No specifications available</span></div>';
            return;
        }

        specsGrid.innerHTML = Object.entries(specifications).map(([key, value]) => 
            `<div class="spec-item">
                <span class="spec-label">${this.escapeHtml(key)}:</span>
                <span class="spec-value">${this.escapeHtml(value)}</span>
            </div>`
        ).join('');
    }

    updateWhatsAppLink(product) {
        const whatsappButton = this.shadowRoot.querySelector('.whatsapp-button');
        const whatsAppNumber = this.getAttribute('whatsapp-number') || '+17138089064';
        const message = this.generateWhatsAppMessage(product);
        
        whatsappButton.href = `https://wa.me/${whatsAppNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    }

    generateWhatsAppMessage(product) {
        return `Hi! I'm interested in the ${product.name}. Can you provide pricing and availability information?`;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    attachEventListeners() {
        const infoButton = this.shadowRoot.querySelector('.info-button');
        if (infoButton) {
            infoButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.showMoreInfo();
            });
        }
    }

    showMoreInfo() {
        const product = JSON.parse(this.getAttribute('product-data') || '{}');
        const message = `More details about ${product.name}:\n\n${product.description}\n\nContact us for additional photos, custom options, or special pricing!`;
        alert(message);
    }
}

// Register the custom element
customElements.define('product-card', ProductCard);

export default ProductCard;