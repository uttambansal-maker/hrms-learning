import React from 'react';
import { CalendarDays, CalendarCheck, UserRoundPlus, Receipt, Laptop, Building2 } from 'lucide-react';

export type NavigationItem = {
  label: string;
  path: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
};

const navigationItems: NavigationItem[] = [
  { label: 'Attendance', path: '/attendance', icon: CalendarDays },
  { label: 'Leave', path: '/leave', icon: CalendarCheck },
  { label: 'Onboarding', path: '/onboarding', icon: UserRoundPlus },
  { label: 'Expenses', path: '/expenses', icon: Receipt },
  { label: 'Assets', path: '/assets', icon: Laptop },
];

export interface SidebarProps { activePath?: string; }

export default function Sidebar({ activePath = '/attendance' }: SidebarProps) {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex w-60 flex-col border-r border-slate-200 bg-white max-md:w-16">
      <div className="flex h-16 items-center gap-3 border-b border-slate-100 px-5 max-md:justify-center max-md:px-2">
        <Building2 className="shrink-0 text-indigo-600" size={24} />
        <span className="whitespace-nowrap text-base font-bold tracking-tight text-slate-800 max-md:hidden">Enterprise HRMS</span>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-5" aria-label="Main navigation">
        {navigationItems.map(({ label, path, icon: Icon }) => {
          const active = activePath === path;
          return (
            <a key={path} href={path}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors max-md:justify-center max-md:px-2 ${active ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
              aria-current={active ? 'page' : undefined} title={label}>
              <Icon size={20} strokeWidth={1.8} className="shrink-0" />
              <span className="max-md:hidden">{label}</span>
            </a>
          );
        })}
      </nav>
      <div className="border-t border-slate-100 p-3">
        <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-2.5 max-md:justify-center max-md:px-1">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-xs font-bold text-indigo-700">HW</div>
          <div className="min-w-0 max-md:hidden">
            <p className="truncate text-sm font-semibold text-slate-800">HR Workspace</p>
            <p className="truncate text-xs text-slate-500">Employee Portal</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
