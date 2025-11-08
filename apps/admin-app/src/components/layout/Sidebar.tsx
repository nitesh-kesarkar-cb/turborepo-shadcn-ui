import { Link, useLocation } from 'react-router-dom';
import { X, LayoutDashboard, Users, FileText, BarChart3 } from 'lucide-react';
import { Avatar, AvatarFallback } from '@repo/ui/components/ui/avatar';
import { Sheet, SheetContent } from '@repo/ui/components/ui/sheet';
import { cn } from '@repo/ui/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isMobile: boolean;
}

interface NavItem {
  label: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Client Management', path: '/client-management', icon: Users },
  { label: 'Cask Listing', path: '/cask-listing', icon: FileText },
  { label: 'Cask Valuation Results', path: '/cask-valuation-results', icon: BarChart3 },
];

const SidebarContent = ({ onClose, isMobile }: { onClose: () => void; isMobile: boolean }) => {
  const location = useLocation();

  return (
    <div className="flex h-full flex-col bg-white">
      {/* Logo Section */}
      <div className="flex items-center justify-between border-b border-grey-100 p-4 md:p-6">
        <div className="flex flex-col">
          <span className="text-label-lg font-poppins font-semibold text-grey-900">
            VINTAGE
          </span>
          <span className="text-label-lg font-poppins font-semibold text-grey-900">
            ACQUISITIONS
          </span>
        </div>
        {isMobile && (
          <button
            onClick={onClose}
            className="rounded-md p-1 text-grey-600 hover:bg-grey-50"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* User Profile Section */}
      <div className="border-b border-grey-100 p-4 md:p-6">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-purple-200 text-purple-700">
              <span className="text-sm font-semibold">TF</span>
            </AvatarFallback>
          </Avatar>
          <span className="text-label-md font-poppins text-grey-900">Thomas Fletcher</span>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-1 p-4 md:p-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={isMobile ? onClose : undefined}
              className={cn(
                'flex items-center gap-3 rounded-md px-4 py-3 text-label-md font-poppins transition-colors',
                isActive && 'text-white shadow-sm',
                !isActive && 'text-grey-600 hover:bg-grey-50'
              )}
              style={
                isActive
                  ? {
                      background: 'linear-gradient(to right, #CFB878, #D0C893)',
                    }
                  : undefined
              }
            >
              <Icon className={cn('h-5 w-5', isActive ? 'text-white' : 'text-grey-600')} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export function Sidebar({ isOpen, onClose, isMobile }: SidebarProps) {
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <SheetContent
          side="left"
          className="w-[280px] rounded-r-xl border-0 p-0 shadow-lg sm:w-[320px]"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <SidebarContent onClose={onClose} isMobile={isMobile} />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[280px] border-r border-grey-100 bg-white shadow-sm lg:w-[320px]">
      <SidebarContent onClose={onClose} isMobile={isMobile} />
    </aside>
  );
}

