import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SlidersHorizontal, Search, Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-ebike.jpg";

const Shop = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [sortBy, setSortBy] = useState("latest");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = [
    "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&auto=format&fit=crop",
  ];

  useEffect(() => {
    if (selectedProduct) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % (selectedProduct.images?.length || 1));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [selectedProduct]);

  const products = [
    {
      id: 1,
      name: "City Commuter Pro",
      price: 899,
      category: "commuter",
      color: "black",
      brand: "beba",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400",
      images: [
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800",
        "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800",
        "https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=800",
      ],
      badge: "Best Seller",
      description: "Perfect for daily commuting with advanced features and comfortable ride.",
    },
    {
      id: 2,
      name: "Urban Rider",
      price: 749,
      category: "commuter",
      color: "blue",
      brand: "ecobike",
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=400",
      images: [
        "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800",
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800",
      ],
      description: "Sleek urban design with efficient battery life.",
    },
    {
      id: 3,
      name: "Cargo Master",
      price: 1299,
      category: "cargo",
      color: "green",
      brand: "beba",
      image: "https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=400",
      images: [
        "https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=800",
        "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800",
      ],
      badge: "New",
      description: "Heavy-duty cargo bike for professional deliveries.",
    },
    {
      id: 4,
      name: "Mountain Explorer",
      price: 1499,
      category: "mountain",
      color: "orange",
      brand: "trailblazer",
      image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400",
      images: [
        "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800",
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800",
      ],
      description: "Built for rough terrain and mountain adventures.",
    },
    {
      id: 5,
      name: "Delivery Pro",
      price: 1199,
      category: "cargo",
      color: "black",
      brand: "ecobike",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400",
      images: [
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800",
      ],
      description: "Professional delivery solution with large cargo capacity.",
    },
    {
      id: 6,
      name: "City Cruiser",
      price: 699,
      category: "commuter",
      color: "white",
      brand: "beba",
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=400",
      images: [
        "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800",
      ],
      description: "Affordable and reliable city commuter.",
    },
    {
      id: 7,
      name: "Trail Blazer",
      price: 1599,
      category: "mountain",
      color: "green",
      brand: "trailblazer",
      image: "https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=400",
      images: [
        "https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=800",
      ],
      description: "Premium mountain bike with cutting-edge suspension.",
    },
    {
      id: 8,
      name: "Express Cargo",
      price: 1399,
      category: "cargo",
      color: "grey",
      brand: "ecobike",
      image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400",
      images: [
        "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800",
      ],
      badge: "Popular",
      description: "Fast and efficient cargo transport solution.",
    },
    {
      id: 9,
      name: "Compact Fold",
      price: 599,
      category: "commuter",
      color: "pink",
      brand: "beba",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400",
      images: [
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800",
      ],
      description: "Foldable design perfect for compact storage.",
    },
    {
      id: 10,
      name: "Eco Rider",
      price: 799,
      category: "commuter",
      color: "blue",
      brand: "ecobike",
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=400",
      images: [
        "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800",
      ],
      description: "Environmentally friendly with solar charging option.",
    },
    {
      id: 11,
      name: "Mountain Beast",
      price: 1699,
      category: "mountain",
      color: "black",
      brand: "trailblazer",
      image: "https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=400",
      images: [
        "https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=800",
      ],
      description: "Ultimate mountain performance with advanced technology.",
    },
    {
      id: 12,
      name: "Heavy Duty Cargo",
      price: 1499,
      category: "cargo",
      color: "orange",
      brand: "beba",
      image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400",
      images: [
        "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800",
      ],
      description: "Maximum payload capacity for industrial use.",
    },
  ];

  const categories = [
    { id: "commuter", name: "Commuter", count: products.filter((p) => p.category === "commuter").length },
    { id: "cargo", name: "Cargo", count: products.filter((p) => p.category === "cargo").length },
    { id: "mountain", name: "Mountain", count: products.filter((p) => p.category === "mountain").length },
  ];

  const brands = [
    { id: "beba", name: "bEBA", count: products.filter((p) => p.brand === "beba").length },
    { id: "ecobike", name: "EcoBike", count: products.filter((p) => p.brand === "ecobike").length },
    { id: "trailblazer", name: "TrailBlazer", count: products.filter((p) => p.brand === "trailblazer").length },
  ];

  const colors = [
    { id: "black", name: "Black", hex: "#000000", count: products.filter((p) => p.color === "black").length },
    { id: "blue", name: "Blue", hex: "#3b82f6", count: products.filter((p) => p.color === "blue").length },
    { id: "green", name: "Green", hex: "#22c55e", count: products.filter((p) => p.color === "green").length },
    { id: "orange", name: "Orange", hex: "#f97316", count: products.filter((p) => p.color === "orange").length },
    { id: "grey", name: "Grey", hex: "#6b7280", count: products.filter((p) => p.color === "grey").length },
    { id: "white", name: "White", hex: "#ffffff", count: products.filter((p) => p.color === "white").length },
    { id: "pink", name: "Pink", hex: "#ec4899", count: products.filter((p) => p.color === "pink").length },
  ];

  const priceRanges = [
    { id: "0-800", name: "Under $800", min: 0, max: 800 },
    { id: "800-1200", name: "$800 - $1,200", min: 800, max: 1200 },
    { id: "1200-1500", name: "$1,200 - $1,500", min: 1200, max: 1500 },
    { id: "1500+", name: "Above $1,500", min: 1500, max: 999999 },
  ];

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((c) => c !== categoryId) : [...prev, categoryId],
    );
  };

  const toggleBrand = (brandId: string) => {
    setSelectedBrands((prev) => (prev.includes(brandId) ? prev.filter((b) => b !== brandId) : [...prev, brandId]));
  };

  const toggleColor = (colorId: string) => {
    setSelectedColors((prev) => (prev.includes(colorId) ? prev.filter((c) => c !== colorId) : [...prev, colorId]));
  };

  const togglePriceRange = (rangeId: string) => {
    setSelectedPriceRanges((prev) => (prev.includes(rangeId) ? prev.filter((r) => r !== rangeId) : [...prev, rangeId]));
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setSelectedPriceRanges([]);
    setSelectedBrands([]);
  };

  const filteredProducts = products.filter((product) => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }
    if (selectedColors.length > 0 && !selectedColors.includes(product.color)) {
      return false;
    }
    if (selectedPriceRanges.length > 0) {
      const matchesPrice = selectedPriceRanges.some((rangeId) => {
        const range = priceRanges.find((r) => r.id === rangeId);
        return range && product.price >= range.min && product.price < range.max;
      });
      if (!matchesPrice) return false;
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[25vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0" />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Move Sustainably</h1>
            <p className="text-xl text-muted-foreground">Be the change</p>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-12">
        <div className="container px-4">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Showing 1–{sortedProducts.length} of {sortedProducts.length} results
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="gap-2 hover:bg-primary hover:text-primary-foreground hover:border-primary">
                <SlidersHorizontal className="h-4 w-4" />
                {showFilters ? "Hide filters" : "Show filters"}
              </Button>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Sort by latest</SelectItem>
                  <SelectItem value="price-low">Price: low to high</SelectItem>
                  <SelectItem value="price-high">Price: high to low</SelectItem>
                  <SelectItem value="name">Sort by name</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            {showFilters && (
              <aside className="lg:w-64 flex-shrink-0">
                <div className="sticky top-4">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg">Filters</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearAllFilters}
                      className="text-sm hover:text-primary hover:bg-transparent transition-colors"
                    >
                      Clear all
                    </Button>
                  </div>

                  <Accordion type="multiple" defaultValue={["categories", "brands", "price"]} className="w-full">
                    {/* Categories */}
                    <AccordionItem value="categories">
...
                    </AccordionItem>

                    {/* Brands */}
                    <AccordionItem value="brands">
...
                    </AccordionItem>

                    {/* Price Range */}
                    <AccordionItem value="price">
                      <AccordionTrigger className="text-sm font-semibold">Price Range</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pt-2">
                          {priceRanges.map((range) => (
                            <div key={range.id} className="flex items-center space-x-2">
                              <Checkbox
                                id={range.id}
                                checked={selectedPriceRanges.includes(range.id)}
                                onCheckedChange={() => togglePriceRange(range.id)}
                              />
                              <Label htmlFor={range.id} className="text-sm font-normal cursor-pointer flex-1">
                                {range.name}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </aside>
            )}

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="group overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => handleProductClick(product)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 rounded-sm"
                      />
                      {product.badge && <Badge className="absolute top-2 left-2 bg-foreground text-background hover:bg-foreground">{product.badge}</Badge>}
                      <Button
                        variant="secondary"
                        size="sm"
                        className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground"
                      >
                        <Search className="h-4 w-4 mr-1" />
                        Quick View
                      </Button>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                      <p className="text-2xl font-bold text-foreground">${product.price}</p>
                    </div>
                  </Card>
                ))}
              </div>

              {sortedProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No products match your filters</p>
                  <Button variant="outline" onClick={clearAllFilters} className="mt-4 hover:bg-primary hover:text-primary-foreground hover:border-primary">
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedProduct?.name}</DialogTitle>
          </DialogHeader>
          {selectedProduct && (
            <div className="grid md:grid-cols-2 gap-6">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-sm">
                  <img
                    src={selectedProduct.images[currentImageIndex] || selectedProduct.images[0]}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {selectedProduct.images.map((img: string, idx: number) => (
                    <div 
                      key={idx} 
                      className={`aspect-square overflow-hidden rounded-sm border cursor-pointer transition-all ${
                        currentImageIndex === idx ? 'border-primary ring-2 ring-primary' : 'border-border'
                      }`}
                      onClick={() => setCurrentImageIndex(idx)}
                    >
                      <img src={img} alt={`${selectedProduct.name} ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <p className="text-3xl font-bold text-foreground mb-2">${selectedProduct.price}</p>
                  {selectedProduct.badge && <Badge className="mb-4 bg-foreground text-background hover:bg-foreground">{selectedProduct.badge}</Badge>}
                  <p className="text-muted-foreground">{selectedProduct.description}</p>
                </div>

                <div className="space-y-4">
                  {/* Quantity Selector */}
                  <div className="flex items-center gap-4">
                    <Label>Quantity:</Label>
                    <div className="flex items-center border border-border rounded-md">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={decrementQuantity}
                        className="h-10 w-10 hover:bg-primary hover:text-primary-foreground"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={incrementQuantity}
                        className="h-10 w-10 hover:bg-primary hover:text-primary-foreground"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button className="flex-1 hover:bg-primary hover:text-primary-foreground">Add to Cart</Button>
                    <Button variant="outline" className="flex-1 hover:bg-primary hover:text-primary-foreground hover:border-primary">
                      View Details
                    </Button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="font-medium capitalize">{selectedProduct.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Brand:</span>
                    <span className="font-medium capitalize">{selectedProduct.brand}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Color:</span>
                    <span className="font-medium capitalize flex items-center gap-2">
                      {selectedProduct.color}
                      <span
                        className="w-4 h-4 border border-border rounded-full"
                        style={{ backgroundColor: colors.find((c) => c.id === selectedProduct.color)?.hex }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Shop;
