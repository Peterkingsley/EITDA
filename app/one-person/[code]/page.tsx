import { PersonFlow } from '@/components/impact/impact-app';
export default async function OnePersonCodePage({params}:{params:Promise<{code:string}>}){ const {code}=await params; return <PersonFlow code={code.toUpperCase()}/>; }
