import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SlidersHorizontal, X, Search } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-ebike.jpg";

const ElectricBicycles = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [sortBy, setSortBy] = useState("latest");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);

  const products = [
    {
      id: 1,
      name: "City Commuter Pro",
      price: 899,
      category: "commuter",
      color: "black",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Urban Rider",
      price: 749,
      category: "commuter",
      color: "blue",
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=400",
    },
    {
      id: 3,
      name: "Cargo Master",
      price: 1299,
      category: "cargo",
      color: "green",
      image: "https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=400",
      badge: "New",
    },
    {
      id: 4,
      name: "Mountain Explorer",
      price: 1499,
      category: "mountain",
      color: "orange",
      image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400",
    },
    {
      id: 5,
      name: "Delivery Pro",
      price: 1199,
      category: "cargo",
      color: "black",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400",
    },
    {
      id: 6,
      name: "City Cruiser",
      price: 699,
      category: "commuter",
      color: "white",
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=400",
    },
    {
      id: 7,
      name: "Trail Blazer",
      price: 1599,
      category: "mountain",
      color: "green",
      image: "https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=400",
    },
    {
      id: 8,
      name: "Express Cargo",
      price: 1399,
      category: "cargo",
      color: "grey",
      image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400",
      badge: "Popular",
    },
    {
      id: 9,
      name: "Compact Fold",
      price: 599,
      category: "commuter",
      color: "pink",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400",
    },
    {
      id: 10,
      name: "Eco Rider",
      price: 799,
      category: "commuter",
      color: "blue",
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=400",
    },
    {
      id: 11,
      name: "Mountain Beast",
      price: 1699,
      category: "mountain",
      color: "black",
      image: "https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=400",
    },
    {
      id: 12,
      name: "Heavy Duty Cargo",
      price: 1499,
      category: "cargo",
      color: "orange",
      image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400",
    },
  ];

  const categories = [
    { id: "commuter", name: "Commuter", count: products.filter((p) => p.category === "commuter").length },
    { id: "cargo", name: "Cargo", count: products.filter((p) => p.category === "cargo").length },
    { id: "mountain", name: "Mountain", count: products.filter((p) => p.category === "mountain").length },
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
  };

  const filteredProducts = products.filter((product) => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
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
              <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                {showFilters ? "Hide filters" : "Show filters"}
              </Button>
              <span className="text-sm text-muted-foreground">
                Showing 1–{sortedProducts.length} of {sortedProducts.length} results
              </span>
            </div>
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

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            {showFilters && (
              <aside className="lg:w-64 flex-shrink-0">
                <Card className="p-6 sticky top-4">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg">Filters</h3>
                    <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-sm">
                      Clear all
                    </Button>
                  </div>

                  {/* Categories */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Categories</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={category.id}
                            checked={selectedCategories.includes(category.id)}
                            onCheckedChange={() => toggleCategory(category.id)}
                          />
                          <Label htmlFor={category.id} className="text-sm font-normal cursor-pointer flex-1">
                            {category.name} ({category.count})
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Color</h4>
                    <div className="space-y-2">
                      {colors.map((color) => (
                        <div key={color.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={color.id}
                            checked={selectedColors.includes(color.id)}
                            onCheckedChange={() => toggleColor(color.id)}
                          />
                          <Label
                            htmlFor={color.id}
                            className="text-sm font-normal cursor-pointer flex-1 flex items-center gap-2"
                          >
                            <span
                              className="w-4 h-4 rounded-full border border-border"
                              style={{ backgroundColor: color.hex }}
                            />
                            {color.name} ({color.count})
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className="font-semibold mb-3">Price Range</h4>
                    <div className="space-y-2">
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
                  </div>
                </Card>
              </aside>
            )}

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                  <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {product.badge && <Badge className="absolute top-2 left-2">{product.badge}</Badge>}
                      <Button
                        variant="secondary"
                        size="sm"
                        className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Search className="h-4 w-4 mr-1" />
                        Quick View
                      </Button>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                      <p className="text-2xl font-bold text-primary">${product.price}</p>
                    </div>
                  </Card>
                ))}
              </div>

              {sortedProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No products match your filters</p>
                  <Button variant="outline" onClick={clearAllFilters} className="mt-4">
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ElectricBicycles;
