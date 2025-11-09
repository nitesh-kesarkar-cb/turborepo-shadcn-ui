import { useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Avatar, AvatarFallback } from '@repo/ui/components/ui/avatar';
import { Button } from '@repo/ui/components/ui/button';
import { cn } from '@repo/ui/lib/utils';
import { Sidebar } from './Sidebar';

interface AppLayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

export function AppLayout({ children, pageTitle }: AppLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Get page title from location if not provided
  const getPageTitle = () => {
    if (pageTitle) return pageTitle;

    const titles: Record<string, string> = {
      '/dashboard': 'Dashboard',
      '/client-management': 'Client Management',
      '/cask-listing': 'Cask Listing',
      '/cask-valuation-results': 'Cask Valuation Results',
    };

    return titles[location.pathname] || 'Dashboard';
  };

  return (
    <div className="flex min-h-screen bg-[#F6F6F6]">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        isMobile={isMobile}
        isCollapsed={isCollapsed}
        onToggleCollapse={toggleCollapse}
      />

      {/* Main Content */}
      <div
        className={cn(
          'flex flex-1 flex-col transition-all border border-1 sm:rounded-xl sm:mt-2 sm:ml-2 sm:mr-2',
          !isMobile && (isCollapsed ? 'md:ml-[80px]' : 'md:ml-[280px] lg:ml-[320px]')
        )}
      >
        {/* Header */}
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-grey-100 bg-white p-3 shadow-sm md:px-6">
          {isMobile ? (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSidebarOpen(true)}
                className="h-9 w-9"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open sidebar</span>
              </Button>
              <div className="flex flex-col items-end">
                <img src={'/sidebar-logo.png'} alt="logo" className="w-30 h-10" />
              </div>
            </>
          ) : (
            <>
              <h1 className="text-h5 font-playfair font-medium text-grey-900">
                {getPageTitle()}
              </h1>
              {/* User Profile */}
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-purple-200 text-purple-700">
                    <span className="text-sm font-semibold">TF</span>
                  </AvatarFallback>
                </Avatar>
                <span className="text-label-md font-poppins text-grey-900">
                  Thomas Fletcher
                </span>
              </div>
            </>
          )}
        </header>

        {/* Page Title for Mobile */}
        {isMobile && (
          <div className="bg-white px-4 pt-4 md:hidden">
            <div className="text-h5 font-playfair font-medium text-grey-900">
              {getPageTitle()}
            </div>
          </div>
        )}

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 bg-white sm:rounded-bl-xl sm:rounded-br-xl sm:mb-2">{children}</main>
      </div>
    </div >
  );
}

