# New Era Furniture - Website Clone

## 🪑 Overview

This is a cloned version of the New Era Furniture website (newerafurniture.us) with WhatsApp integration instead of payment processing. Built as a test project to demonstrate web scraping and site replication capabilities.

## 🚀 Features

- **Modern Responsive Design** - Clean, professional layout that works on all devices
- **Product Showcase** - Professional furniture collections display with detailed specifications
- **WhatsApp Integration** - All "Order" buttons redirect to WhatsApp instead of payment
- **Contact Options** - Multiple ways for customers to reach out
- **Smooth Animations** - Engaging user experience with scroll animations
- **SEO Optimized** - Proper HTML structure and meta tags

## 📱 WhatsApp Integration

Instead of traditional e-commerce checkout, this site uses WhatsApp for order processing:

- Each product has a "Order via WhatsApp" button
- Pre-filled messages with product information
- Direct link to WhatsApp Business chat
- Easy for customers to inquire about pricing and availability

## 🔧 Customization

### Phone Number
Update the WhatsApp phone number in `index.html`:
```html
<a href="https://wa.me/YOUR_PHONE_NUMBER?text=Hi! I'm interested..." class="whatsapp-button" target="_blank">
```

Replace `1234567890` with your actual WhatsApp Business number.

### Products
Add more collections by copying the product card template:
```html
<div class="product-card">
    <div class="product-image">
        <span>Your Product Name</span>
    </div>
    <div class="product-info">
        <h3 class="product-title">Product Title</h3>
        <p class="product-description">Product description...</p>
        <!-- Add features, sizes, etc. -->
    </div>
</div>
```

### Styling
- Primary colors: `#050505` (black) and `#ee1d25` (red accent)
- Fonts: 'Playfair Display' (headings) and 'Quicksand' (body)
- CSS is embedded in the HTML file for easy modification

## 🌐 Running the Website

### Option 1: Python Server (Recommended)
```bash
python3 serve.py
```
This will automatically open your browser to `http://localhost:8000`

### Option 2: Simple HTTP Server
```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

### Option 3: Direct File Opening
Simply open `index.html` in your web browser (some features may be limited).

## 📊 Data Sources

Product information scraped from:
- https://newerafurniture.us/products/diamond-collection
- https://newerafurniture.us/products/lora-collection  
- https://newerafurniture.us/products/elisyum-collection

## 🎯 Business Model

This setup is perfect for:
- **Furniture Wholesalers** - Show products, handle orders via chat
- **Custom Furniture Makers** - Display portfolio, discuss custom orders
- **Import/Export Businesses** - Showcase products, negotiate via WhatsApp
- **Consultative Sales** - High-value items requiring discussion

## 📈 Benefits of WhatsApp Model

✅ **No Payment Processing Fees** - Save on transaction costs  
✅ **Personal Touch** - Build relationships with customers  
✅ **Flexible Pricing** - Easy to offer discounts or negotiate  
✅ **Quick Setup** - No complex e-commerce integration  
✅ **Global Reach** - WhatsApp works worldwide  
✅ **Customer Comfort** - Many prefer messaging over forms  

## 🔒 Security Notes

- All external links open in new tabs
- No user data collection or storage
- HTTPS recommended for production deployment
- WhatsApp Business API recommended for high volume

## 📞 Contact Integration Tips

1. **Use WhatsApp Business** - Set up automated responses
2. **Quick Replies** - Prepare responses for common questions
3. **Catalog** - Upload your product catalog to WhatsApp Business
4. **Status** - Use WhatsApp Status to showcase new products
5. **Groups** - Create customer groups for announcements

## 🚀 Deployment

For production deployment:
1. Upload files to your web hosting
2. Update WhatsApp phone number
3. Add your domain to WhatsApp Business
4. Consider adding Google Analytics
5. Set up SSL certificate (HTTPS)

## 📄 License

This project was created as a demonstration. Ensure you have permission to clone and modify any original website content for commercial use.

---

Built with ❤️ for furniture businesses that want to connect with customers personally.