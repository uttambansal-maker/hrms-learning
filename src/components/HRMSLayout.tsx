import React from 'react';
import Sidebar from './Sidebar';
import Topbar, { type TopbarProps } from './Topbar';

export interface HRMSLayoutProps extends TopbarProps { activePath?: string; children?: React.ReactNode; }
export default function HRMSLayout({ activePath = '/attendance', section = 'Workspace', pageName = 'Overview', userName = 'Alex Morgan', userRole = 'HR Manager', children }: HRMSLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar activePath={activePath} />
      <div className="ml-60 flex min-h-screen flex-col max-md:ml-16">
        <Topbar section={section} pageName={pageName} userName={userName} userRole={userRole} />
        <main className="flex-1 p-6 max-sm:p-4">{children}</main>
      </div>
    </div>
  );
}
