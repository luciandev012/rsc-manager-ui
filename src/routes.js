// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";

// core components/views for Manager layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import ManagerProfilePage from "views/manager-profile/manager-profile";
import EmployeeManagementPage from "views/employee-management/employee-management-list";
import CategoriesManagementPage from "views/categories-management/categories-management-list";
import OrderManagementPage from "views/order-management/order-management-list";
import ProductManagementPage from "views/product-management/product-management-list";
import StatisticalPage from "views/statistical/statistical";
import LoginPage from "views/login/login-page";
import DiscountManagementPage from "views/discount-management/discount-management-list";
import BrandManagementPage from "views/brand-management/brand-management-list";
import UnitsManagementPage from "views/unit-management/unit-management";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/manager",
  },
  {
    path: "/profile",
    name: "Manager Profile",
    icon: PersonIcon,
    component: ManagerProfilePage,
    layout: "/manager",
  },
  {
    path: "/employee-management",
    name: "Employee Management",
    icon: AssignmentIndIcon,
    component: EmployeeManagementPage,
    layout: "/manager",
  },
  {
    path: "/categories-management",
    name: "Category Management",
    icon: "inventory",
    component: CategoriesManagementPage,
    layout: "/manager",
  },
  {
    path: "/order-management",
    name: "Order Management",
    icon: ReceiptLongIcon,
    component: OrderManagementPage,
    layout: "/manager",
  },
  {
    path: "/product-management",
    name: "Product Management",
    icon: LocalGroceryStoreIcon,
    component: ProductManagementPage,
    layout: "/manager",
  },
  {
    path: "/discount-management",
    name: "Discount Management",
    icon: LocalGroceryStoreIcon,
    component: DiscountManagementPage,
    layout: "/manager",
  },
  {
    path: "/brand-management",
    name: "Brand Management",
    icon: LocalGroceryStoreIcon,
    component: BrandManagementPage,
    layout: "/manager",
  },
  {
    path: "/unit-management",
    name: "Unit Management",
    icon: LocalGroceryStoreIcon,
    component: UnitsManagementPage,
    layout: "/manager",
  },
  {
    path: "/statistical",
    name: "Statistical",
    icon: AssignmentIcon,
    component: StatisticalPage,
    layout: "/manager",
  },
  {
    path: "/login",
    name: "Login",
    icon: LoginIcon,
    component: LoginPage,
    layout: "/auth",
  },
];

export default dashboardRoutes;
