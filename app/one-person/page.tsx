import type { Metadata } from 'next';
import { ImpactLanding } from '@/components/impact/impact-app';

export const metadata: Metadata = { title: 'Help one person | EITDA', description: 'Help one person discover what their experience is worth.' };
export default function OnePersonPage(){ return <ImpactLanding/>; }
