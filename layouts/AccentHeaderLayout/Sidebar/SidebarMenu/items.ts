import { ReactNode } from 'react';

import AnalyticsTwoToneIcon from '@material-ui/icons/AnalyticsTwoTone';
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import StoreTwoToneIcon from '@material-ui/icons/StoreTwoTone';
import AccountBalanceWalletTwoToneIcon from '@material-ui/icons/AccountBalanceWalletTwoTone';
import MonetizationOnTwoToneIcon from '@material-ui/icons/MonetizationOnTwoTone';
import KitchenTwoToneIcon from '@material-ui/icons/KitchenTwoTone';
import HealthAndSafetyTwoToneIcon from '@material-ui/icons/HealthAndSafetyTwoTone';
import ContactSupportTwoToneIcon from '@material-ui/icons/ContactSupportTwoTone';
import LocalLibraryTwoToneIcon from '@material-ui/icons/LocalLibraryTwoTone';
import DnsTwoToneIcon from '@material-ui/icons/DnsTwoTone';
import TaskAltTwoToneIcon from '@material-ui/icons/TaskAltTwoTone';
import EventNoteTwoToneIcon from '@material-ui/icons/EventNoteTwoTone';
import DocumentScannerTwoToneIcon from '@material-ui/icons/DocumentScannerTwoTone';
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
import MarkunreadMailboxTwoToneIcon from '@material-ui/icons/MarkunreadMailboxTwoTone';
import QuestionAnswerTwoToneIcon from '@material-ui/icons/QuestionAnswerTwoTone';
import DashboardCustomizeTwoToneIcon from '@material-ui/icons/DashboardCustomizeTwoTone';
import AssignmentIndTwoToneIcon from '@material-ui/icons/AssignmentIndTwoTone';
import AccountTreeTwoToneIcon from '@material-ui/icons/AccountTreeTwoTone';
import StorefrontTwoToneIcon from '@material-ui/icons/StorefrontTwoTone';
import VpnKeyTwoToneIcon from '@material-ui/icons/VpnKeyTwoTone';
import ErrorTwoToneIcon from '@material-ui/icons/ErrorTwoTone';
import WbIncandescentTwoToneIcon from '@material-ui/icons/WbIncandescentTwoTone';
import DesignServicesTwoToneIcon from '@material-ui/icons/DesignServicesTwoTone';
import SupportTwoToneIcon from '@material-ui/icons/SupportTwoTone';
import ReceiptTwoToneIcon from '@material-ui/icons/ReceiptTwoTone';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: 'Dashboards',
    items: [
      {
        name: 'Analytics',
        icon: AnalyticsTwoToneIcon,
        link: '/accent-header/dashboards/analytics'
      },
      {
        name: 'Banking',
        icon: AccountBalanceTwoToneIcon,
        link: '/accent-header/dashboards/banking',
        badge: 'New'
      },
      {
        name: 'Commerce',
        icon: StoreTwoToneIcon,
        link: '/accent-header/dashboards/commerce'
      },
      {
        name: 'Crypto',
        icon: AccountBalanceWalletTwoToneIcon,
        link: '/accent-header/dashboards/crypto'
      },
      {
        name: 'Finance',
        icon: MonetizationOnTwoToneIcon,
        link: '/accent-header/dashboards/finance'
      },
      {
        name: 'Fitness',
        icon: KitchenTwoToneIcon,
        link: '/accent-header/dashboards/fitness'
      },
      {
        name: 'Healthcare',
        icon: HealthAndSafetyTwoToneIcon,
        link: '/accent-header/dashboards/healthcare',
        items: [
          {
            name: 'Doctors Page',
            badge: 'Hot',
            link: '/accent-header/dashboards/healthcare/doctor'
          },
          {
            name: 'Hospital Overview',
            link: '/accent-header/dashboards/healthcare/hospital'
          }
        ]
      },
      {
        name: 'Helpdesk',
        icon: ContactSupportTwoToneIcon,
        link: '/accent-header/dashboards/helpdesk'
      },
      {
        name: 'Learning',
        icon: LocalLibraryTwoToneIcon,
        link: '/accent-header/dashboards/learning'
      },
      {
        name: 'Monitoring',
        icon: DnsTwoToneIcon,
        link: '/accent-header/dashboards/monitoring'
      },
      {
        name: 'Tasks',
        icon: TaskAltTwoToneIcon,
        link: '/accent-header/dashboards/tasks'
      }
    ]
  },
  {
    heading: 'Applications',
    items: [
      {
        name: 'Calendar',
        icon: EventNoteTwoToneIcon,
        link: '/accent-header/applications/calendar'
      },
      {
        name: 'File Manager',
        icon: DocumentScannerTwoToneIcon,
        link: '/accent-header/applications/file-manager'
      },
      {
        name: 'Jobs Platform',
        icon: WorkTwoToneIcon,
        link: '/accent-header/applications/jobs-platform'
      },
      {
        name: 'Mailbox',
        icon: MarkunreadMailboxTwoToneIcon,
        link: '/accent-header/applications/mailbox/inbox'
      },
      {
        name: 'Messenger',
        icon: QuestionAnswerTwoToneIcon,
        link: '/accent-header/applications/messenger'
      },
      {
        name: 'Projects Board',
        icon: DashboardCustomizeTwoToneIcon,
        link: '/accent-header/applications/projects-board'
      }
    ]
  },
  {
    heading: 'Management',
    items: [
      {
        name: 'Users',
        icon: AssignmentIndTwoToneIcon,
        link: '/accent-header/management/users',
        items: [
          {
            name: 'List All',
            link: '/accent-header/management/users/list'
          },
          {
            name: 'User Profile',
            link: '/accent-header/management/user/2'
          }
        ]
      },
      {
        name: 'Projects',
        icon: AccountTreeTwoToneIcon,
        link: '/accent-header/management/projects/list'
      },
      {
        name: 'Commerce',
        icon: StorefrontTwoToneIcon,
        link: '/accent-header/management/commerce',
        items: [
          {
            name: 'Shop',
            link: '/accent-header/management/commerce/products/shop'
          },
          {
            name: 'Products List',
            link: '/accent-header/management/commerce/products/list'
          },
          {
            name: 'View Product',
            link: '/accent-header/management/commerce/product/2'
          },
          {
            name: 'Create Product',
            link: '/accent-header/management/commerce/products/create'
          }
        ]
      },
      {
        name: 'Invoices',
        icon: ReceiptTwoToneIcon,
        link: '/accent-header/management/invoices',
        items: [
          {
            name: 'List All',
            link: '/accent-header/management/invoices/list'
          },
          {
            name: 'View Single',
            link: '/accent-header/management/invoice/7'
          }
        ]
      }
    ]
  },
  {
    heading: 'Layouts',
    items: [
      {
        name: 'Default Layout',
        link: '/preview/dashboards/analytics',
        icon: FiberManualRecordTwoToneIcon
      },
      {
        name: 'Accent Header',
        link: '/accent-header/dashboards/analytics',
        icon: FiberManualRecordTwoToneIcon
      },
      {
        name: 'Accent Sidebar',
        link: '/accent-sidebar/dashboards/analytics',
        icon: FiberManualRecordTwoToneIcon
      }
    ]
  },
  {
    heading: 'Extra Pages',
    items: [
      {
        name: 'Auth Pages',
        icon: VpnKeyTwoToneIcon,
        link: '/auth',
        items: [
          {
            name: 'Login',
            items: [
              {
                name: 'Basic',
                link: '/login-basic'
              },
              {
                name: 'Cover',
                link: '/login-cover'
              }
            ]
          },
          {
            name: 'Register',
            items: [
              {
                name: 'Basic',
                link: '/register-basic'
              },
              {
                name: 'Cover',
                link: '/register-cover'
              },
              {
                name: 'Wizard',
                link: '/register-wizard'
              }
            ]
          },
          {
            name: 'Recover Password',
            link: '/recover-password'
          }
        ]
      },
      {
        name: 'Status',
        icon: ErrorTwoToneIcon,
        link: '/status',
        items: [
          {
            name: 'Error 404',
            link: '/status/404'
          },
          {
            name: 'Error 500',
            link: '/status/500'
          },
          {
            name: 'Maintenance',
            link: '/status/maintenance'
          },
          {
            name: 'Coming Soon',
            link: '/status/coming-soon'
          }
        ]
      }
    ]
  },
  {
    heading: 'Foundation',
    items: [
      {
        name: 'Overview',
        link: '/overview',
        icon: DesignServicesTwoToneIcon
      },
      {
        name: 'Layout Starter Kits',
        icon: WbIncandescentTwoToneIcon,
        link: '/docs/starter-kits'
      },
      {
        name: 'Documentation',
        icon: SupportTwoToneIcon,
        link: '/docs'
      }
    ]
  }
];

export default menuItems;
