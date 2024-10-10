import { BriefcaseBusiness, ShieldCheck, DollarSign, Factory, Lightbulb, Images, Building, Usb, ChartNoAxesCombined, RefreshCcw, Recycle, Users} from 'lucide-react';
import { title } from 'process';

export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/about', key: 'about', label: 'About Us' },
    { href: '/services', key: 'service', label: 'Services' },

    { href: '/contact', key: 'contact', label: 'Contact' },
  ];


export const ITEMS = [
  {
    icons: <BriefcaseBusiness className='text-blue-500' />,
    title: 'Human Resources Planning',
    description: 'Quema Consulting would help evaluate your firm’s present and future demands for various types of labour and attempt to match the demand with the supply of job applicants. ',
  },
  {
    icons: <ShieldCheck className='text-blue-500' />,
    title: 'Job Analysis',
    description: 'Job analysis is the process of gathering and analyzing information about the content and the human requirements of jobs, as well as, the context in which jobs are performed.',
  },
  {
    icons: <Images className='text-blue-500' />,
    title: 'Recruitment & Selection Process',
    description: 'Quema Consulting is committed to employing the best qualified candidates while engaging in recruitment and selection practices that comply with all applicable employment laws. .',
  },
  {
    icons: <Factory className='text-blue-500' />,
    title: 'Performance Management',
    description: 'Quema Consulting will help the customer to measure their organizational strategic objectives with their operational objective',
  },
  {
    icons: <Lightbulb className='text-blue-500' />,
    title: 'Business Growth',
    description: 'Empowering your organization with strategic HR solutions that drive growth, enhance employee performance, and optimize business outcomes.',    
  },
  {
    icons:  <DollarSign  className='text-blue-500' />,
    title: 'Compensation & Benefit',
    description: 'Quema Consulting will set the guidelines for the organization to develop the employee’s career and help to achieve a high retention rate within the organization to do the following tasks',
  },
]


export const MIDDLE = [
  {
    icons:  <Building />,
    title: 'Management',
    description: 'Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor.'
  },
  {
    icons: <Usb />,
    title: 'Utilization',
    description: 'Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor.'
  },
  {
    icons:  <ChartNoAxesCombined />,
    title: 'Performance',
    description: 'Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor.'
  },
  {
    icons:  <RefreshCcw />,
    title: 'Always Sync',
    description: 'Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor.'
  },
]

export const BOTTOM = [
  {
    icons:   <ChartNoAxesCombined />,
    title: 'Performance Analyze',
    description: 'Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consectetur adipisicing elit.'
  },
  {
    icons: <Recycle />,
    title: 'Self Healing',
    description: 'Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consectetur adipisicing elit.'
  },
  {
    icons:  <Users />,
    title: 'Work With Any Team',
    description: 'Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consectetur adipisicing elit.'
  },

]
