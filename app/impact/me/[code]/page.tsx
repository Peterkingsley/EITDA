import { Dashboard } from '@/components/impact/impact-app';
export default async function DashboardPage({params,searchParams}:{params:Promise<{code:string}>;searchParams:Promise<{token?:string}>}){const {code}=await params;const query=await searchParams;return <Dashboard code={code.toUpperCase()} token={query.token || ''}/>;}
