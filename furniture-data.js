// Comprehensive Furniture Product Database
// This file contains the complete product catalog from newerafurniture.us

const completeFurnitureData = {
    // SOFAS & LOVESEATS
    sofas: [
        {
            name: "Gia Sofa & Loveseat - Black",
            category: "sofas",
            collection: "gia-collection",
            description: "Contemporary styling meets exceptional comfort. The Gia Collection features premium upholstery in rich black with clean lines and superior cushioning.",
            features: ["Premium black upholstery", "Contemporary clean lines", "Superior cushioning", "Durable construction", "Matching loveseat included"],
            specifications: {
                "Sofa": "84\" × 36\" × 34\"",
                "Loveseat": "60\" × 36\" × 34\"", 
                "Material": "Premium fabric",
                "Color": "Black",
                "Style": "Contemporary"
            },
            colors: ["Black", "Blue", "Brown", "Grey", "Chocolate", "Ivory", "Light Grey", "Mocha"],
            retailCode: "s300-gia-black"
        },
        {
            name: "Gia Sofa & Loveseat - Brown",
            category: "sofas", 
            collection: "gia-collection",
            description: "Rich brown upholstery defines this sophisticated Gia Collection set. Perfect for traditional or transitional interiors.",
            features: ["Rich brown upholstery", "Traditional elegance", "Premium materials", "Versatile styling", "Complete 2-piece set"],
            specifications: {
                "Sofa": "84\" × 36\" × 34\"",
                "Loveseat": "60\" × 36\" × 34\"",
                "Material": "Premium fabric", 
                "Color": "Brown",
                "Style": "Traditional/Transitional"
            },
            retailCode: "s300-gia-brown"
        },
        {
            name: "Rivera Sofa & Loveseat - Black",
            category: "sofas",
            collection: "rivera-collection", 
            description: "Modern elegance with supreme comfort. Clean architectural lines and premium black upholstery create a sophisticated statement.",
            features: ["Modern architectural design", "Premium black fabric", "Supreme comfort seating", "Clean lines", "Professional craftsmanship"],
            specifications: {
                "Sofa": "88\" × 38\" × 35\"",
                "Loveseat": "64\" × 38\" × 35\"",
                "Material": "High-grade fabric",
                "Color": "Black", 
                "Style": "Modern"
            },
            retailCode: "s310-rivera-black"
        },
        {
            name: "Texan Oversized Sofa & Loveseat - Black",
            category: "sofas",
            collection: "texan-collection",
            description: "Oversized comfort for maximum relaxation. Extra-deep seating and plush cushions make this perfect for family rooms.",
            features: ["Oversized deep seating", "Extra plush cushions", "Family room perfect", "Maximum comfort", "Sturdy construction"],
            specifications: {
                "Sofa": "96\" × 42\" × 38\"",
                "Loveseat": "72\" × 42\" × 38\"", 
                "Seating Depth": "42\"",
                "Cushion Type": "Extra plush",
                "Style": "Casual/Comfort"
            },
            retailCode: "s320-texan-oversize-black"
        },
        {
            name: "Elina Sofa & Loveseat - Grey",
            category: "sofas",
            collection: "elina-collection",
            description: "Elegant curved arms and sophisticated grey upholstery define this premium collection. Perfect for upscale interiors.",
            features: ["Elegant curved arms", "Sophisticated grey fabric", "Upscale interior styling", "Premium construction", "Timeless design"],
            specifications: {
                "Sofa": "86\" × 37\" × 36\"",
                "Loveseat": "62\" × 37\" × 36\"",
                "Arm Style": "Curved", 
                "Upholstery": "Premium fabric",
                "Color": "Grey"
            },
            retailCode: "s150-elina-grey"
        },
        {
            name: "Lila Sofa & Loveseat - White", 
            category: "sofas",
            collection: "lila-collection",
            description: "Crisp white upholstery and contemporary styling make this set perfect for modern apartments and lofts.",
            features: ["Crisp white upholstery", "Contemporary styling", "Modern apartment perfect", "Space-conscious design", "Easy maintenance"],
            specifications: {
                "Sofa": "80\" × 35\" × 34\"",
                "Loveseat": "58\" × 35\" × 34\"", 
                "Color": "White",
                "Style": "Contemporary",
                "Ideal For": "Apartments/Lofts"
            },
            retailCode: "s160-lila-white"
        }
    ],

    // SECTIONALS
    sectionals: [
        {
            name: "Gia Sectional - Black",
            category: "sectionals",
            collection: "gia-collection", 
            description: "Configurable sectional bringing Gia Collection comfort to larger spaces. Multiple layout options available.",
            features: ["Configurable layout options", "Gia Collection styling", "Large space solution", "Modular design", "Premium upholstery"],
            specifications: {
                "Configuration": "Customizable L-shape or U-shape",
                "Depth": "36\"", 
                "Height": "34\"",
                "Color": "Black",
                "Layout": "Modular"
            },
            availableConfigurations: ["L-Shape Left", "L-Shape Right", "U-Shape", "Chaise Sectional"],
            retailCode: "s300-gia-sectional-black"
        },
        {
            name: "Elina Sectional - Beige",
            category: "sectionals", 
            collection: "elina-collection",
            description: "L-shaped sectional featuring the same elegant curved arms as the Elina sofa collection. Perfect for family rooms.",
            features: ["Elegant curved arms", "L-shaped configuration", "Family room perfect", "Coordinated design", "Spacious seating"],
            specifications: {
                "Left Section": "108\" × 38\" × 35\"",
                "Right Section": "84\" × 38\" × 35\"", 
                "Configuration": "L-Shape",
                "Color": "Beige",
                "Style": "Elegant"
            },
            retailCode: "s250-elina-beige"
        },
        {
            name: "Tarra Sectional - Ivory",
            category: "sectionals",
            collection: "tarra-collection",
            description: "Sophisticated ivory sectional with tufted detailing and premium cushioning. Ideal for formal living spaces.",
            features: ["Ivory premium upholstery", "Tufted detailing", "Formal living perfect", "Premium cushioning", "Sophisticated styling"],
            specifications: {
                "Configuration": "L-Shape with chaise",
                "Chaise Length": "84\"",
                "Sofa Length": "108\"", 
                "Color": "Ivory",
                "Detailing": "Tufted"
            },
            retailCode: "s1800-tarra-ivory"
        },
        {
            name: "Nashville Sectional - Black",
            category: "sectionals",
            collection: "nashville-collection",
            description: "Urban contemporary sectional with sleek lines and bold black upholstery. Perfect for modern condos.",
            features: ["Urban contemporary design", "Sleek lines", "Bold black upholstery", "Modern condo perfect", "Space efficient"],
            specifications: {  
                "Overall Size": "120\" × 84\" × 35\"",
                "Configuration": "Corner sectional",
                "Style": "Urban contemporary",
                "Color": "Black"
            },
            retailCode: "s340-nashville-black"
        }
    ],

    // BEDROOM SETS
    bedroom: [
        {
            name: "Destin Bedroom Set",
            category: "bedroom", 
            collection: "destin-collection",
            description: "Contemporary bedroom collection with clean lines and rich wood-grain finishes. Complete set includes bed, dresser, mirror and nightstands.",
            features: ["Contemporary clean lines", "Rich wood-grain finishes", "Complete bedroom suite", "Coordinated styling", "Durable construction"],
            specifications: {
                "Queen Bed": "64\" × 86\" × 54\"",
                "King Bed": "80\" × 86\" × 54\"", 
                "Dresser": "60\" × 18\" × 36\"",
                "Nightstands": "24\" × 16\" × 26\"",
                "Finish": "Rich wood-grain"
            },
            setIncludes: ["Bed", "Dresser", "Mirror", "2 Nightstands"],
            retailCode: "b1300-destin"
        },
        {
            name: "Denver Bedroom Set",
            category: "bedroom",
            collection: "denver-collection", 
            description: "Modern bedroom furniture featuring sleek brushed metal accents and premium materials. Available in queen or king sizes.",
            features: ["Modern design", "Brushed metal accents", "Premium materials", "Multiple size options", "Sleek styling"],
            specifications: {
                "Queen Bed": "64\" × 86\" × 60\"",
                "King Bed": "80\" × 86\" × 60\"", 
                "Dresser": "64\" × 20\" × 38\"",
                "Finish Options": "Espresso, Grey, White"
            },
            sizeOptions: ["Queen", "King", "California King"],
            retailCode: "b1320-denver"
        },
        {
            name: "Bella Velvet Bedroom Set - Grey",
            category: "bedroom",
            collection: "bella-collection",
            description: "Luxurious grey velvet-upholstered bedroom set with tufted headboard and crystal-finish hardware. Modern luxury at its finest.",  
            features: ["Luxurious velvet upholstery", "Tufted headboard", "Crystal-finish hardware", "Modern luxury styling", "Premium comfort"],
            specifications: {
                "Queen Bed": "64\" × 86\" × 58\"",
                "King Bed": "80\" × 86\" × 58\"",
                "Headboard Height": "58\"",
                "Upholstery": "Premium velvet",
                "Color": "Grey"
            },
            availableColors: ["Grey", "Black", "Navy", "Burgundy"],
            retailCode: "b1852-bella-grey"
        },
        {
            name: "Divina Bedroom Set - Black",
            category: "bedroom",
            collection: "divina-collection",
            description: "Bold black bedroom set with contemporary geometric design elements. Makes a dramatic statement in any master bedroom.",
            features: ["Bold black finish", "Geometric design elements", "Contemporary styling", "Dramatic statement piece", "High-gloss accents"],
            specifications: {
                "Queen Bed": "66\" × 88\" × 56\"", 
                "Dresser": "62\" × 20\" × 40\"",
                "Design Features": "Geometric styling",
                "Finish": "Black with gloss accents"
            },
            retailCode: "b2030-divina-black"
        },
        {
            name: "Layla Bedroom Set",
            category: "bedroom",
            collection: "layla-collection", 
            description: "Romantic bedroom collection with curved lines and ornate detailing. Perfect for creating a luxurious master suite.",
            features: ["Romantic curved lines", "Ornate carved detailing", "Luxurious master suite", "Traditional elegance", "Premium wood construction"],
            specifications: {
                "Queen Bed": "68\" × 90\" × 62\"", 
                "King Bed": "84\" × 90\" × 62\"",
                "Headboard Style": "Curved with carvings",
                "Finish": "Antique white with gold accents"
            },
            retailCode: "b6100-layla"
        }
    ],

    // DINING ROOM
    dining: [
        {
            name: "Adriana Marble Dining Set",
            category: "dining",
            collection: "adriana-collection",
            description: "Stunning marble-top dining table with coordinating upholstered chairs. Seats 6 comfortably, perfect for formal dinners.",
            features: ["Genuine marble top", "Coordinated upholstered chairs", "Seats 6 comfortably", "Formal dining perfect", "Luxury materials"],
            specifications: {
                "Table": "72\" × 42\" × 30\"",
                "Chairs": "20\" × 22\" × 38\"", 
                "Seating Capacity": "6 people",
                "Table Shape": "Rectangular",
                "Chair Upholstery": "Premium fabric"
            },
            includes: ["Table", "6 Chairs"],
            retailCode: "d1300-adriana"
        },
        {
            name: "Cyra Marble Dining Set",
            category: "dining",
            collection: "cyra-collection", 
            description: "Contemporary marble-top dining with geometric base design. Includes table and 6 coordinating side chairs.",
            features: ["Contemporary marble top", "Geometric base design", "Modern styling", "6 side chairs included", "Statement piece"],
            specifications: {
                "Table": "76\" × 44\" × 30\"",
                "Chairs": "19\" × 21\" × 36\"",
                "Base Style": "Geometric modern",
                "Seating": "6 people"
            },
            retailCode: "d1350-cyra"
        },
        {
            name: "Nava Dining Collection - Black",
            category: "dining", 
            collection: "nava-collection",
            description: "Modern black dining set with clean lines and contemporary styling. Available with 4, 6, or 8 chairs.",
            features: ["Modern black finish", "Clean contemporary lines", "Multiple size options", "Sturdy construction", "Easy maintenance"],
            specifications: {
                "4-Person Table": "48\" × 30\" × 30\"",
                "6-Person Table": "60\" × 36\" × 30\"", 
                "8-Person Table": "72\" × 42\" × 30\"",
                "Chair Options": "4, 6, or 8 chairs",
                "Color": "Black"
            },
            sizeOptions: ["4-Person", "6-Person", "8-Person"],
            retailCode: "d1400-nava-black"
        },
        {
            name: "Dorri Dining Collection",
            category: "dining",
            collection: "dorri-collection",
            description: "Transitional dining furniture blending traditional and contemporary elements. Rich wood finish with elegant styling.",
            features: ["Transitional design", "Rich wood finish", "Traditional meets contemporary", "Elegant styling", "Versatile decor match"],
            specifications: {
                "Table": "66\" × 40\" × 30\"", 
                "Chairs": "21\" × 23\" × 37\"",
                "Style": "Transitional",
                "Finish": "Rich mahogany"
            },
            retailCode: "d1450-dorri"
        },
        {
            name: "Viva Dining Set - Black Chrome",
            category: "dining",
            collection: "viva-collection",
            description: "Ultra-modern dining with black table and chrome-accented chairs. Perfect for contemporary apartments and lofts.",
            features: ["Ultra-modern design", "Black table finish", "Chrome chair accents", "Contemporary apartment perfect", "Metallic details"],
            specifications: {
                "Table": "60\" × 36\" × 30\"", 
                "Chairs": "Chrome leg base",
                "Style": "Ultra-modern",
                "Accent": "Chrome details"
            },
            retailCode: "d610-viva-black-chrome"
        }
    ],

    // CHAIRS & ACCENTS
    chairs: [
        {
            name: "Lila Accent Chair - Black", 
            category: "chairs",
            collection: "lila-collection",
            description: "Stylish accent chair featuring contemporary design and premium black upholstery. Perfect for living rooms or bedrooms.",
            features: ["Contemporary accent design", "Premium black upholstery", "Versatile room placement", "Stylish accent piece", "Comfortable seating"],
            specifications: {
                "Width": "28\"",
                "Depth": "30\"", 
                "Height": "34\"",
                "Style": "Contemporary accent",
                "Color": "Black"
            },
            placement: ["Living room", "Bedroom", "Home office", "Entryway"],
            retailCode: "s160-lila-black"
        },
        {
            name: "Lila Accent Chair - White",
            category: "chairs", 
            collection: "lila-collection",
            description: "Crisp white accent chair bringing fresh contemporary style to any space. Perfect contrast piece or for bright, airy rooms.",
            features: ["Crisp white upholstery", "Fresh contemporary style", "Perfect contrast piece", "Bright airy room perfect", "Easy to coordinate"],
            specifications: {
                "Width": "28\"",
                "Depth": "30\"",
                "Height": "34\"", 
                "Color": "White",
                "Style": "Fresh contemporary"
            },
            retailCode: "s160-lila-white"
        },
        {
            name: "Lush Chaise Lounge - Navy",
            category: "chairs",
            collection: "lush-collection", 
            description: "Luxurious navy chaise lounge perfect for relaxation and reading. Deep cushioning and elegant styling for upscale interiors.",
            features: ["Luxurious navy upholstery", "Deep relaxation cushioning", "Perfect for reading", "Elegant styling", "Upscale interior fit"],
            specifications: {
                "Length": "66\"", 
                "Width": "30\"",
                "Height": "34\"",
                "Color": "Navy blue",
                "Function": "Chaise lounge"
            },
            idealFor: ["Reading nooks", "Master bedrooms", "Sun rooms", "Libraries"],
            retailCode: "s21500-lush-navy-chaise"
        },
        {
            name: "Brady Ottoman",
            category: "chairs",
            collection: "brady-collection",
            description: "Versatile ottoman perfect as extra seating or footrest. Coordinating piece for multiple Brady Collection items.",
            features: ["Versatile ottoman function", "Extra seating option", "Footrest capability", "Coordinating design", "Multi-purpose use"],
            specifications: {
                "Width": "24\"",
                "Depth": "18\"", 
                "Height": "16\"",
                "Use": "Seating/Footrest",
                "Style": "Coordinating"
            },
            uses: ["Footrest", "Extra seating", "Coffee table", "Accent piece"],
            retailCode: "s1801-brady-ottoman"
        },
        {
            name: "Throne Accent Chair - White",
            category: "chairs",
            collection: "throne-collection",
            description: "Regal high-back accent chair making a dramatic statement. Extra tall back and ornate detailing for luxury interiors.",
            features: ["Regal high-back design", "Dramatic statement piece", "Extra tall construction", "Ornate luxury detailing", "Royal aesthetic"],
            specifications: {
                "Height": "62.5\"",
                "Width": "28\"", 
                "Depth": "32\"",
                "Back Height": "Extra tall",
                "Style": "Regal/Statement"
            },
            placement: ["Entryways", "Living rooms", "Master bedrooms", "Libraries"],
            retailCode: "a-ch02-throne-62-5-white"
        }
    ]
};

// Product sorting and filtering utilities
const furnitureUtils = {
    getProductsByCategory: (category) => {
        return completeFurnitureData[category] || [];
    },
    
    getProductByCode: (retailCode) => {
        for (let category in completeFurnitureData) {
            const product = completeFurnitureData[category].find(p => p.retailCode === retailCode);
            if (product) return product;
        }
        return null;
    },
    
    getAllProducts: () => {
        let allProducts = [];
        for (let category in completeFurnitureData) {
            allProducts = allProducts.concat(completeFurnitureData[category]);
        }
        return allProducts;
    },
    
    searchProducts: (query) => {
        const allProducts = furnitureUtils.getAllProducts();
        return allProducts.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
    },
    
    getCategories: () => {
        return Object.keys(completeFurnitureData);
    },
    
    getProductCount: () => {
        return furnitureUtils.getAllProducts().length;
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { completeFurnitureData, furnitureUtils };
}