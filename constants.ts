
import { Project, Sector, Client, Milestone } from './types';

export const MILESTONES: Milestone[] = [
  { value: '100+', label: 'Total Projects Delivered' },
  { value: '50+', label: 'Industrial Factories' },
  { value: '40+', label: 'Large Warehouses' },
  { value: '60L+', label: 'Sq. Ft. Developed' }
];

export const SECTORS: Sector[] = [
  {
    title: 'INDUSTRIAL',
    description: 'Complete civil & structural solutions for heavy industries, including steel forging, oil processing, and paper mills.',
    icon: 'Factory'
  },
  {
    title: 'WAREHOUSING',
    description: 'State-of-the-art logistics parks with high-load industrial flooring, PEB integration, and fire safety compliance.',
    icon: 'Warehouse'
  },
  {
    title: 'FOOD PROCESSING',
    description: 'Hygienic facility construction for FMCG giants like Parle and Bikaji, adhering to strict food safety standards.',
    icon: 'Utensils'
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    title: 'KANPUR EDIBLES PVT. LTD. (MAYUR)',
    scope: 'Construction of 20+ Warehouses & Processing Units.',
    description: 'Complete turnkey execution including RCC structure, PEB coordination, industrial flooring, utility integration, and statutory compliances.',
    type: 'flagship',
    image: 'https://picsum.photos/seed/mayur/1200/800'
  },
  {
    title: 'MANTORA OIL PRODUCTS (BAWARCHI)',
    scope: 'Multiple Warehouses & Manufacturing Plants.',
    description: 'A complex industrial setup requiring high-load bearing structures and specialized flooring for oil processing and storage.',
    type: 'major',
    image: 'https://picsum.photos/seed/bawarchi/1200/800'
  },
  {
    title: 'TRIDENT AUTO COMPONENTS',
    scope: 'Construction of a precision auto-manufacturing unit.',
    description: 'A complex industrial setup requiring high load-bearing structures and specialized flooring designed for automotive component manufacturing and storage.',
    type: 'major',
    image: 'https://picsum.photos/seed/trident/1200/800'
  },
  {
    title: 'HARIOM INDUSTRIES LTD.',
    scope: 'Massive industrial undertaking involving large-span steel sheds for paper mill.',
    description: 'The project demanded high-precision civil work for heavy rolling machinery and extensive water treatment infrastructure.',
    location: 'Bhauti, Kanpur',
    type: 'major',
    image: 'https://picsum.photos/seed/hariom/1200/800'
  },
  {
    title: 'PARLE BISCUITS PVT. LTD.',
    scope: 'Biscuit Manufacturing Unit',
    description: 'Complete turnkey execution including RCC structure, PEB coordination, industrial flooring, utility integration, fire safety provisions, and statutory compliances.',
    type: 'major',
    image: 'https://picsum.photos/seed/parle/1200/800'
  }
];

export const ONGOING_PROJECTS: Project[] = [
  {
    title: 'NAMKEEN FACTORY',
    scope: 'Modern snack manufacturing facility',
    description: 'Construction of a modern snack manufacturing facility.',
    type: 'ongoing'
  },
  {
    title: 'GULMOHAR APT',
    scope: '9-Floor Premium Residential Tower',
    description: '9-Floor Premium Residential Tower in Kalyanpur.',
    type: 'ongoing'
  },
  {
    title: 'JANJEEVINI FERTILIZER',
    scope: 'Large scale fertilizer plant',
    description: 'Large scale fertilizer plant construction in Bhognipur.',
    type: 'ongoing'
  }
];

export const CLIENTS: Client[] = [
  { name: 'Parle Biscuits Pvt. Ltd.', category: 'fmcg' },
  { name: 'Kanpur Edibles Pvt. Ltd. (Mayur)', category: 'fmcg' },
  { name: 'Mantora Oil Products (Bawarchi)', category: 'fmcg' },
  { name: 'Bikaji Namkeen (Radhey Namkeen)', category: 'fmcg' },
  { name: 'Kushal Food Pvt. Ltd.', category: 'fmcg' },
  { name: 'Krishna Shyama Foods', category: 'fmcg' },
  { name: 'GDS Nutrifoods Pvt. Limited', category: 'fmcg' },
  { name: 'Shree Baleshwar Ji International', category: 'fmcg' },
  { name: 'HL Agro Pvt. Limited', category: 'fmcg' },
  { name: 'K.N Bakers Foods', category: 'fmcg' },
  { name: 'Amba Ji Foods Pvt. Limited', category: 'fmcg' },
  { name: 'Om Raj Foods (Parle G)', category: 'fmcg' },
  { name: 'Trident Auto Components', category: 'industrial' },
  { name: 'Acumen (Rania)', category: 'industrial' },
  { name: 'Mercury Container (Dada Nagar)', category: 'industrial' },
  { name: 'Hariom Industries (Paper Mill)', category: 'industrial' },
  { name: 'VS Warehousing (Tata Salt)', category: 'industrial' },
  { name: 'Matel Can Pvt. Ltd.', category: 'industrial' },
  { name: 'Ram Lakhan Bhatt Int. School', category: 'industrial' },
  { name: 'Exam International (Greater Noida)', category: 'industrial' },
  { name: 'Shivi Tex Tile Pvt. Limited', category: 'industrial' },
  { name: 'Neptune Narayan Enterprise', category: 'industrial' },
  { name: 'Janjeevini Fertilizer', category: 'industrial' },
  { name: 'Riddhi Siddhi Warehouse', category: 'industrial' }
];
