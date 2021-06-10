import BasicLayout from '@/layouts/BasicLayout';
import Dashboard from '@/pages/Dashboard';
import Node from '@/pages/Node';
import Npm from '@/pages/Npm';

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/node',
        exact: true,
        component: Node,
      },
      {
        path: '/npm',
        exact: true,
        component: Npm,
      },
      {
        path: '/',
        exact: true,
        component: Dashboard,
      },
    ],
  },
];
export default routerConfig;
