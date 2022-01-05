import Dashboard from "../components/pages/Dashboard.js";
import UserIndex from "../components/pages/User/UserIndex.js";

const AdminRoutes = () => {
    let routesData =  [{
        id: 1,
        path: '/admin',
        component: Dashboard
      }, {
        id: 2,
        path: '/admin/users',
        component: UserIndex
      }
      
    ];
  return routesData;
};

export default AdminRoutes;