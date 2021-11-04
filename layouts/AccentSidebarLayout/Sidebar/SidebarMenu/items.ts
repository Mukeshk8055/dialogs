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
        link: '/accent-sidebar/dashboards/analytics'
      },
      {
        name: 'Banking',
        icon: AccountBalanceTwoToneIcon,
        link: '/accent-sidebar/dashboards/banking',
        badge: 'New'
      },
      {
        name: 'Commerce',
        icon: StoreTwoToneIcon,
        link: '/accent-sidebar/dashboards/commerce'
      },
      {
        name: 'Crypto',
        icon: AccountBalanceWalletTwoToneIcon,
        link: '/accent-sidebar/dashboards/crypto'
      },
      {
        name: 'Finance',
        icon: MonetizationOnTwoToneIcon,
        link: '/accent-sidebar/dashboards/finance'
      },
      {
        name: 'Fitness',
        icon: KitchenTwoToneIcon,
        link: '/accent-sidebar/dashboards/fitness'
      },
      {
        name: 'Healthcare',
        icon: HealthAndSafetyTwoToneIcon,
        link: '/accent-sidebar/dashboards/healthcare',
        items: [
          {
            name: 'Doctors Page',
            badge: 'Hot',
            link: '/accent-sidebar/dashboards/healthcare/doctor'
          },
          {
            name: 'Hospital Overview',
            link: '/accent-sidebar/dashboards/healthcare/hospital'
          }
        ]
      },
      {
        name: 'Helpdesk',
        icon: ContactSupportTwoToneIcon,
        link: '/accent-sidebar/dashboards/helpdesk'
      },
      {
        name: 'Learning',
        icon: LocalLibraryTwoToneIcon,
        link: '/accent-sidebar/dashboards/learning'
      },
      {
        name: 'Monitoring',
        icon: DnsTwoToneIcon,
        link: '/accent-sidebar/dashboards/monitoring'
      },
      {
        name: 'Tasks',
        icon: TaskAltTwoToneIcon,
        link: '/accent-sidebar/dashboards/tasks'
      }
    ]
  },
  {
    heading: 'Applications',
    items: [
      {
        name: 'Calendar',
        icon: EventNoteTwoToneIcon,
        link: '/accent-sidebar/applications/calendar'
      },
      {
        name: 'File Manager',
        icon: DocumentScannerTwoToneIcon,
        link: '/accent-sidebar/applications/file-manager'
      },
      {
        name: 'Jobs Platform',
        icon: WorkTwoToneIcon,
        link: '/accent-sidebar/applications/jobs-platform'
      },
      {
        name: 'Mailbox',
        icon: MarkunreadMailboxTwoToneIcon,
        link: '/accent-sidebar/applications/mailbox/inbox'
      },
      {
        name: 'Messenger',
        icon: QuestionAnswerTwoToneIcon,
        link: '/accent-sidebar/applications/messenger'
      },
      {
        name: 'Projects Board',
        icon: DashboardCustomizeTwoToneIcon,
        link: '/accent-sidebar/applications/projects-board'
      }
    ]
  },
  {
    heading: 'Management',
    items: [
      {
        name: 'Users',
        icon: AssignmentIndTwoToneIcon,
        link: '/accent-sidebar/management/users',
        items: [
          {
            name: 'List All',
            link: '/accent-sidebar/management/users/list'
          },
          {
            name: 'User Profile',
            link: '/accent-sidebar/management/user/2'
          }
        ]
      },
      {
        name: 'Projects',
        icon: AccountTreeTwoToneIcon,
        link: '/accent-sidebar/management/projects/list'
      },
      {
        name: 'Commerce',
        icon: StorefrontTwoToneIcon,
        link: '/accent-sidebar/management/commerce',
        items: [
          {
            name: 'Shop',
            link: '/accent-sidebar/management/commerce/products/shop'
          },
          {
            name: 'Products List',
            link: '/accent-sidebar/management/commerce/products/list'
          },
          {
            name: 'View Product',
            link: '/accent-sidebar/management/commerce/product/2'
          },
          {
            name: 'Create Product',
            link: '/accent-sidebar/management/commerce/products/create'
          }
        ]
      },
      {
        name: 'Invoices',
        icon: ReceiptTwoToneIcon,
        link: '/accent-sidebar/management/invoices',
        items: [
          {
            name: 'List All',
            link: '/accent-sidebar/management/invoices/list'
          },
          {
            name: 'View Single',
            link: '/accent-sidebar/management/invoice/7'
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
