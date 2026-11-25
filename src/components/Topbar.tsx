import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';

export interface TopbarProps { section?: string; pageName?: string; userName?: string; userRole?: string; }

export default function Topbar({ section = 'Workspace', pageName = 'Overview', userName = 'Alex Morgan', userRole = 'HR Manager' }: TopbarProps) {
  const initials = userName.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase();
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 max-sm:px-3">
      <div className="flex items-center gap-2 text-sm">
        <span className="text-slate-500">{section}</span><span className="text-slate-300">/</span>
        <strong className="font-semibold text-slate-800">{pageName}</strong>
      </div>
      <div className="flex items-center gap-3">
        <button type="button" aria-label="Notifications" className="relative rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800">
          <Bell size={20} /><span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
        </button>
        <button type="button" className="flex items-center gap-2 rounded-lg p-1.5 transition hover:bg-slate-50">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">{initials || 'AM'}</span>
          <span className="text-left max-sm:hidden"><span className="block text-sm font-semibold text-slate-800">{userName}</span><span className="block text-xs text-slate-500">{userRole}</span></span>
          <ChevronDown size={16} className="text-slate-400 max-sm:hidden" />
        </button>
      </div>
    </header>
  );
}
