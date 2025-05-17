
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  User, LogOut, Heart, Clock, Bookmark, Settings,
  ShoppingBag, MapPin, Phone, Mail
} from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { getCurrentUser, logout, User as UserType, isAuthenticated } from "@/services/authService";
import { getAllProducts } from "@/services/productService";
import ProductCard from "@/components/ProductCard";

const AccountPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserType | null>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      if (!isAuthenticated()) {
        navigate("/login");
        return;
      }
      setUser(getCurrentUser());
    };

    const loadProducts = async () => {
      const allProducts = await getAllProducts();
      setProducts(allProducts);
      setLoading(false);
    };

    checkAuth();
    loadProducts();
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (loading) {
    return <div className="container mx-auto py-24 text-center">Loading account data...</div>;
  }

  if (!user) {
    return null; // Will redirect in the useEffect
  }

  const likedProducts = products.filter(product => user.likedProducts.includes(product.id));
  const watchHistoryProducts = products.filter(product => user.watchHistory.includes(product.id));
  const savedForLaterProducts = products.filter(product => user.savedForLater.includes(product.id));

  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar with user info */}
        <div className="w-full md:w-1/4">
          <Card>
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src="https://i.pravatar.cc/150" alt={user.username} />
                <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <CardTitle>{user.username}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
              <div className="flex justify-center mt-2 space-x-2">
                <Badge variant="secondary">{user.likedProducts.length} Liked</Badge>
                <Badge variant="secondary">{user.watchHistory.length} Viewed</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <User size={16} className="text-muted-foreground" />
                <span>{user.personalInfo.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-muted-foreground" />
                <span>{user.personalInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-muted-foreground" />
                <span>{user.personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-muted-foreground" />
                <span>{user.email}</span>
              </div>
              <Separator />
              <Button 
                variant="outline" 
                className="w-full"
                onClick={handleLogout}
              >
                <LogOut size={16} className="mr-2" />
                Sign Out
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main content area */}
        <div className="w-full md:w-3/4">
          <Tabs defaultValue="liked">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="liked">
                <Heart size={16} className="mr-2" /> Liked Products
              </TabsTrigger>
              <TabsTrigger value="history">
                <Clock size={16} className="mr-2" /> Watch History
              </TabsTrigger>
              <TabsTrigger value="saved">
                <Bookmark size={16} className="mr-2" /> Saved For Later
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings size={16} className="mr-2" /> Settings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="liked" className="space-y-4">
              <h2 className="text-xl font-bold">Liked Products</h2>
              {likedProducts.length === 0 ? (
                <p className="text-muted-foreground">No liked products yet.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {likedProducts.map(product => (
                    <ProductCard key={`liked-${product.id}`} product={product} />
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="history" className="space-y-4">
              <h2 className="text-xl font-bold">Recently Viewed</h2>
              {watchHistoryProducts.length === 0 ? (
                <p className="text-muted-foreground">No watch history yet.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {watchHistoryProducts.map(product => (
                    <ProductCard key={`history-${product.id}`} product={product} />
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="saved" className="space-y-4">
              <h2 className="text-xl font-bold">Saved For Later</h2>
              {savedForLaterProducts.length === 0 ? (
                <p className="text-muted-foreground">No saved products yet.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {savedForLaterProducts.map(product => (
                    <ProductCard key={`saved-${product.id}`} product={product} />
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-4">
              <h2 className="text-xl font-bold">Account Settings</h2>
              <Card>
                <CardContent className="pt-6">
                  <p>Account settings and preferences can be managed here.</p>
                  <div className="mt-4 space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <User className="mr-2 h-4 w-4" /> Edit Profile
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <ShoppingBag className="mr-2 h-4 w-4" /> Order Preferences
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="mr-2 h-4 w-4" /> Notification Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
