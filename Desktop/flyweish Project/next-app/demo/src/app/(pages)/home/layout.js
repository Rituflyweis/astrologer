import HomeNavigation from '../components/HomeNavigation';

export default function HomeLayout({ children }) {
  return (
    <div className="min-h-screen">
      {/* Shared layout for all /home routes */}
      <HomeNavigation />
      <main className="p-8">
        {children}
      </main>
    </div>
  );
}




