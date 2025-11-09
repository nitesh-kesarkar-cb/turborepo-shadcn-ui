import { Link, useLocation } from 'react-router-dom';
import { X, LayoutDashboard, Users, FileText, BarChart3, ChevronLeft } from 'lucide-react';
import { Avatar, AvatarFallback } from '@repo/ui/components/ui/avatar';
import { Sheet, SheetContent } from '@repo/ui/components/ui/sheet';
import { cn } from '@repo/ui/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isMobile: boolean;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
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

const SidebarContent = ({
  onClose,
  isMobile,
  isCollapsed = false,
  onToggleCollapse
}: {
  onClose: () => void;
  isMobile: boolean;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}) => {
  const location = useLocation();

  return (
    <div className="flex h-full flex-col bg-[#F6F6F6]">
      {/* Logo Section */}
      {!isMobile && (<div className={cn('flex items-center border-b border-grey-100 p-3 md:p-6 ', isCollapsed ? 'justify-center' : 'justify-between md:py-4')}>
        {!isCollapsed && (
          <img src={'/sidebar-logo.png'} alt="logo" className="w-30 h-10" />
        )}
        <div className="flex items-center gap-2">
          {!isMobile && onToggleCollapse && (
            <button
              onClick={onToggleCollapse}
              className="rounded-md pt-1 text-grey-600 hover:bg-grey-50"
              aria-label="Toggle sidebar"
            >
              <ChevronLeft className={cn('h-5 w-5 transition-transform', isCollapsed && 'rotate-180')} />
            </button>
          )}
        </div>
      </div>
      )}

      {/* User Profile Section - Only for Mobile */}
      {isMobile && (
        <div className="border-b border-grey-100 p-3 md:p-6">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-purple-200 text-purple-700">
                <span className="text-sm font-semibold">TF</span>
              </AvatarFallback>
            </Avatar>
            <span className="text-label-md font-poppins text-grey-900">Thomas Fletcher</span>
          </div>
        </div>
      )}

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
                'flex items-center rounded-md px-4 py-3 text-label-sm font-poppins font-medium transition-colors',
                isCollapsed ? 'justify-center' : 'gap-3',
                isActive && 'text-grey-800 shadow-sm',
                !isActive && 'text-grey-500 hover:bg-grey-50'
              )}
              style={
                isActive
                  ? {
                    background: 'linear-gradient(92deg, #E4D49E 2.13%, #DFB93B 97.37%)',
                  }
                  : undefined
              }
              title={isCollapsed ? item.label : undefined}
            >
              <Icon className={cn('h-5 w-5 flex-shrink-0', isActive ? 'text-grey-800' : 'text-grey-500')} />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export function Sidebar({ isOpen, onClose, isMobile, isCollapsed = false, onToggleCollapse }: SidebarProps) {
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <SheetContent
          side="left"
          className="w-[280px] rounded-r-xl border-0 p-0 shadow-lg sm:w-[320px]"
          onInteractOutside={() => onClose()}
        >
          <SidebarContent
            onClose={onClose}
            isMobile={isMobile}
            isCollapsed={false}
            onToggleCollapse={undefined}
          />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 h-screen border-grey-100 bg-white shadow-sm transition-all',
        isCollapsed ? 'w-[80px]' : 'w-[280px] lg:w-[320px]'
      )}
    >
      <SidebarContent
        onClose={onClose}
        isMobile={isMobile}
        isCollapsed={isCollapsed}
        onToggleCollapse={onToggleCollapse}
      />
    </aside>
  );
}

