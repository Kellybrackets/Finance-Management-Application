import { useState } from 'react';
import { SignIn, SignedIn, SignedOut, useUser, useClerk } from '@clerk/clerk-react';
import { Button } from './ui/button';

function Dashboard() {
  const [isLoading] = useState(false);
  const { user } = useUser();
  const { signOut } = useClerk();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SignedOut>
        <div className="flex min-h-screen items-center justify-center">
          <SignIn />
        </div>
      </SignedOut>
      <SignedIn>
        {isLoading ? (
          <div className="flex min-h-screen items-center justify-center">
            <div className="text-lg">Loading...</div>
          </div>
        ) : (
          <div className="min-h-screen">
            <nav className="bg-white shadow-sm">
              <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold text-gray-900">Property Dashboard</h1>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">Welcome, {user?.firstName}</span>
                    <Button variant="outline" onClick={handleSignOut}>Sign Out</Button>
                  </div>
                </div>
              </div>
            </nav>
            
            <main className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-lg font-semibold">Property Map</h2>
                  <div className="h-[400px] rounded-lg bg-gray-100"></div>
                </div>
                
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-lg font-semibold">Property Listings</h2>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium">Sample Property</h3>
                      <p className="text-sm text-gray-600">Location, Price</p>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        )}
      </SignedIn>
    </div>
  );
}

export default Dashboard;