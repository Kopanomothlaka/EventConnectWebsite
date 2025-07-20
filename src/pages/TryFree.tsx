import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Mail, Lock, Eye, EyeOff, User, Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const features = [
  "Create unlimited events",
  "Manage guest lists effortlessly", 
  "Real-time event notifications",
  "Live chat with attendees",
  "Photo sharing galleries",
  "Calendar integration"
];

export const TryFree = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen gradient-hero">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - Benefits */}
          <div className="text-white animate-fade-in-up">
            <Link to="/" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-8 transition-smooth">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-bounce-in">
              Start creating
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {" "}amazing events
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Join thousands of event organizers who trust EventConnect to make their events unforgettable.
            </p>
            
            <div className="space-y-4 animate-scale-in" style={{ animationDelay: '0.6s' }}>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                  <div className="bg-green-400 rounded-full p-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-blue-100">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl animate-scale-in" style={{ animationDelay: '1.2s' }}>
              <p className="text-blue-100 text-lg font-semibold mb-2">🎉 Special Launch Offer</p>
              <p className="text-blue-200">Get premium features free for your first 3 events!</p>
            </div>
          </div>
          
          {/* Right Side - Sign Up Form */}
          <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Card className="shadow-large border-border/50 bg-card/95 backdrop-blur-md">
              <CardHeader className="text-center pb-4">
                <div className="gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-2xl">E</span>
                </div>
                
                <h2 className="text-3xl font-bold text-foreground">Create your account</h2>
                <p className="text-muted-foreground">Start organizing events in minutes</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="pl-10 transition-smooth focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="transition-smooth focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="pl-10 transition-smooth focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        className="pl-10 pr-10 transition-smooth focus:ring-2 focus:ring-primary/20"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-smooth"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" className="rounded border-border mt-1" />
                    <div className="text-sm">
                      <span className="text-muted-foreground">
                        I agree to the{" "}
                        <Link to="/terms" className="text-primary hover:text-primary-dark transition-smooth">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="text-primary hover:text-primary-dark transition-smooth">
                          Privacy Policy
                        </Link>
                      </span>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full gradient-primary text-primary-foreground hover:opacity-90 transition-smooth" size="lg">
                    Create Account - Free
                  </Button>
                </form>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="transition-smooth hover:bg-muted">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="transition-smooth hover:bg-muted">
                    <svg className="mr-2 h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </Button>
                </div>
                
                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/sign-in" className="text-primary hover:text-primary-dark transition-smooth font-medium">
                    Sign in
                  </Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};