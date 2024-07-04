import { FaRegCalendarAlt, FaRegHospital } from "react-icons/fa";
import { FiMap, FiUsers } from "react-icons/fi";
import { HiOutlineAcademicCap, HiOutlineChartSquareBar } from "react-icons/hi";
import {
  RiCustomerService2Line,
  RiDashboardLine,
  RiFileUploadLine,
  RiShieldUserLine,
  RiTodoLine,
} from "react-icons/ri";
import { BiCarousel, BiCartAlt, BiErrorAlt, BiTask } from "react-icons/bi";
import {
  BsBriefcase,
  BsCart4,
  BsChatDots,
  BsCurrencyBitcoin,
  BsQuestionDiamond,
} from "react-icons/bs";
import { DiHtml5Multimedia } from "react-icons/di";
import {
  MdOutlineAnalytics,
  MdOutlineContactPhone,
  MdOutlineContactSupport,
  MdOutlineDns,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { CgFeed } from "react-icons/cg";
import { GrUserAdmin } from "react-icons/gr";
import { AiOutlineEdit, AiOutlineUnorderedList } from "react-icons/ai";
import { RoutePermittedRole } from "@crema/constants/AppEnums";
import { TbFileInvoice } from "react-icons/tb";

const routesConfig = [
  {
    id: "app",
    title: "Application",
    messageId: "sidebar.application",
    type: "group",
    children: [
      {
        id: "crypto",
        title: "Crypto",
        messageId: "sidebar.app.dashboard.crypto",
        type: "item",
        permittedRole: [RoutePermittedRole.Admin, RoutePermittedRole.User],
        icon: <BsCurrencyBitcoin />,
        url: "/dashboards/crypto",
      },
      {
        id: "crm",
        title: "CRM",
        messageId: "sidebar.app.dashboard.crm",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: <RiCustomerService2Line />,
        url: "/dashboards/crm",
      },
      {
        id: "analytics",
        title: "Analytics",
        messageId: "sidebar.app.dashboard.analytics",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: <MdOutlineAnalytics />,
        url: "/dashboards/analytics",
      },
      {
        id: "healthCare",
        title: "Health Care",
        messageId: "sidebar.healthCare",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: <FaRegHospital />,
        url: "/dashboards/health-care",
      },
      {
        id: "e-commerce",
        title: "E-Commerce",
        messageId: "sidebar.app.dashboard.eCommerce",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: <BsCart4 />,
        url: "/dashboards/e-commerce",
      },
      {
        id: "academy",
        title: "Academy",
        messageId: "sidebar.app.dashboard.academy",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: <HiOutlineAcademicCap />,
        url: "/dashboards/academy",
      },
      {
        id: "metrics",
        title: "Metrics",
        messageId: "sidebar.app.metrics",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: <HiOutlineChartSquareBar />,
        url: "/dashboards/metrics",
      },
      {
        id: "widgets",
        title: "Widgets",
        messageId: "sidebar.app.widgets",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: <RiDashboardLine />,
        url: "/dashboards/widgets",
      },
    ],
  },
  {
    id: "apps",
    title: "Apps",
    messageId: "sidebar.apps",
    type: "group",
    children: [
      {
        id: "mail",
        title: "Mail",
        messageId: "sidebar.apps.mail",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        count: 4,
        icon: "mail_outline",
        url: "/apps/mail",
      },
      {
        id: "calender",
        title: "Calender",
        messageId: "sidebar.apps.calender",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: <BiTask />,
        url: "/apps/calender",
      },
      {
        id: "contact",
        title: "Contact",
        messageId: "sidebar.apps.contact",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: <MdOutlineContactPhone />,
        url: "/apps/contact",
      },
      {
        id: "todo",
        title: "ToDo",
        messageId: "sidebar.apps.todo",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        count: 6,
        icon: <RiTodoLine />,
        color: "#48bb78",
        url: "/apps/todo",
      },
      {
        id: "chat",
        title: "Chat",
        messageId: "sidebar.apps.chat",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: <BsChatDots />,
        url: "/apps/chat",
      },
      {
        id: "scrum-board",
        title: "Scrum Board",
        messageId: "sidebar.apps.scrumboard",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: <MdOutlineDns />,
        url: "/apps/scrum-board",
      },
      {
        id: "wall",
        title: "Wall",
        messageId: "sidebar.apps.wall",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: <CgFeed />,
        url: "/apps/wall",
      },
      {
        id: "ecommerce",
        title: "Ecommerce",
        messageId: "sidebar.ecommerce",
        type: "collapse",
        icon: <BiCartAlt />,
        children: [
          {
            id: "products",
            title: "Products",
            messageId: "sidebar.ecommerce.products",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/ecommerce/products",
          },
          {
            id: "product_detail",
            title: "Product Detail",
            messageId: "sidebar.ecommerce.productDetail",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/ecommerce/product_detail",
          },
          {
            id: "orders",
            title: "Orders",
            messageId: "sidebar.ecommerce.orders",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/ecommerce/orders",
          },
          {
            id: "cart",
            title: "Cart",
            messageId: "sidebar.ecommerce.cart",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/ecommerce/cart",
          },
          {
            id: "checkout",
            title: "Checkout",
            messageId: "sidebar.ecommerce.checkout",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/ecommerce/checkout",
          },
          {
            id: "confirmation",
            title: "Confirmation",
            messageId: "sidebar.ecommerce.confirmation",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/ecommerce/confirmation",
          },
          {
            id: "invoice-1",
            title: "Invoice 1",
            messageId: "sidebar.ecommerce.invoice1",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/ecommerce/invoice-1",
          },
          {
            id: "invoice-2",
            title: "Invoice 2",
            messageId: "sidebar.ecommerce.invoice2",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/ecommerce/invoice-2",
          },
        ],
      },
      {
        id: "admin-ecommerce",
        title: "Ecommerce Admin",
        messageId: "sidebar.ecommerceAdmin",
        type: "collapse",
        icon: <GrUserAdmin />,
        children: [
          {
            id: "productListing",
            title: "Product Listing",
            messageId: "sidebar.ecommerceAdmin.productListing",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/ecommerce/product-listing",
          },
          {
            id: "addProducts",
            title: "Add Products",
            messageId: "sidebar.ecommerceAdmin.addProducts",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/ecommerce/add-products",
          },
          {
            id: "customers",
            title: "Customers",
            messageId: "sidebar.ecommerce.customers",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/ecommerce/customers",
          },
        ],
      },
      {
        id: "invoice",
        title: "Invoice",
        messageId: "sidebar.invoice",
        type: "collapse",
        icon: <TbFileInvoice />,
        children: [
          {
            id: "addInvoice",
            title: "Add Invoices",
            messageId: "sidebar.invoice.addInvoice",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/invoice/list/add",
          },
          {
            id: "invoices",
            title: "Invoices",
            messageId: "sidebar.invoice.home",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/invoice/home",
          },
          {
            id: "clients",
            title: "Clients",
            messageId: "sidebar.invoice.clients",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/invoice/clients",
          },
          {
            id: "settings",
            title: "Settings",
            messageId: "sidebar.invoice.settings",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/invoice/settings",
          },
        ],
      },
      {
        id: "blog",
        title: "Blog",
        messageId: "sidebar.pages.extraPages.blog",
        type: "collapse",
        icon: "rss_feed",
        children: [
          {
            id: "bloglist",
            title: "Blog List",
            messageId: "sidebar.pages.extraPages.blogList",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/extra-pages/blog",
          },
          {
            id: "blogdetail",
            title: "Blog Detail",
            messageId: "sidebar.pages.extraPages.blogDetail",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/extra-pages/blog-details",
          },
          {
            id: "blogcreate",
            title: "Create Blog",
            messageId: "sidebar.pages.extraPages.blogCreate",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/extra-pages/create/blog",
          },
        ],
      },
    ],
  },
  {
    id: "third-party",
    title: "Libs",
    messageId: "sidebar.libs",
    type: "group",
    children: [
      {
        id: "google-map",
        title: "Google Map",
        messageId: "sidebar.googleMap",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: <FiMap />,
        url: "/third-party/google-map",
      },
      {
        id: "recharts",
        title: "Recharts",
        messageId: "sidebar.recharts",
        type: "collapse",
        icon: "bar_chart",
        children: [
          {
            id: "area",
            title: "Area Chart",
            messageId: "sidebar.recharts.areaChart",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/recharts/area",
          },
          {
            id: "bar",
            title: "Bar Chart",
            messageId: "sidebar.recharts.barChart",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/recharts/bar",
          },
          {
            id: "composed",
            title: "Composed Chart",
            messageId: "sidebar.recharts.composedChart",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/recharts/composed",
          },
          {
            id: "line",
            title: "Line Chart",
            messageId: "sidebar.recharts.lineChart",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/recharts/line",
          },
          {
            id: "pie",
            title: "Pie Chart",
            messageId: "sidebar.recharts.pieChart",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/recharts/pie",
          },
          {
            id: "radar",
            title: "Radar Chart",
            messageId: "sidebar.recharts.radarChart",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/recharts/radar",
          },
          {
            id: "radial",
            title: "Radial Chart",
            messageId: "sidebar.recharts.radialChart",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/recharts/radial",
          },
          {
            id: "scatter",
            title: "Scatter Chart",
            messageId: "sidebar.recharts.scatterChart",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/recharts/scatter",
          },
          {
            id: "funnel",
            title: "Funnel Chart",
            messageId: "sidebar.recharts.funnelChart",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/recharts/funnel",
          },
          {
            id: "treemap",
            title: "Treemap Chart",
            messageId: "sidebar.recharts.treeChart",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/recharts/treemap",
          },
        ],
      },
      {
        id: "filestack",
        title: "Filestack",
        messageId: "sidebar.filestack",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: <RiFileUploadLine />,
        url: "/third-party/filestack",
      },
      {
        id: "froala-editor",
        title: "Froala Editor",
        messageId: "sidebar.froalaEditor",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: <AiOutlineEdit />,
        url: "/third-party/froala-editor",
      },
      {
        id: "fusion-charts",
        title: "Fusion Charts",
        messageId: "sidebar.fusionCharts",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: "bar_chart",
        url: "/third-party/fusion-charts",
      },
      {
        id: "calendar",
        title: "Big Calendar",
        messageId: "sidebar.bigCalender",
        icon: <FaRegCalendarAlt />,
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        url: "/third-party/calendar",
      },
      {
        id: "slider",
        title: "React Slick",
        messageId: "sidebar.reactSlick",
        icon: <BiCarousel />,
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        url: "/third-party/slider",
      },
      {
        id: "react-color",
        title: "React Color",
        messageId: "sidebar.reactColor",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: "invert_colors",
        url: "/third-party/react-color",
      },
      {
        id: "react-dropzone",
        title: "React Dropzone",
        messageId: "sidebar.reactDropzone",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: "attach_file",
        url: "/third-party/react-dropzone",
      },
      {
        id: "react-player",
        title: "Player",
        messageId: "sidebar.player",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: <DiHtml5Multimedia />,
        url: "/third-party/react-player",
      },
      {
        id: "timeline",
        title: "Time Line",
        messageId: "sidebar.pages.timeLine",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: "timeline",
        url: "/third-party/time-line",
      },
    ],
  },
  {
    id: "extra-pages",
    title: "Extra Pages",
    messageId: "sidebar.pages.extraPages",
    type: "group",
    children: [
      {
        id: "account",
        title: "Account",
        messageId: "sidebar.pages.extraPages.account",
        type: "item",
        permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
        icon: <MdOutlineManageAccounts />,
        url: "/my-account",
      },
      {
        id: "about-us",
        title: "About Us",
        messageId: "sidebar.pages.extraPages.aboutUs",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: <FiUsers />,
        url: "/extra-pages/about-us",
      },
      {
        id: "contact-us",
        title: "Contact Us",
        messageId: "sidebar.pages.extraPages.contactUs",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: <MdOutlineContactSupport />,
        url: "/extra-pages/contact-us",
      },
      {
        id: "portfolio",
        title: "Portfolio",
        messageId: "sidebar.pages.extraPages.portfolio",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: <BsBriefcase />,
        url: "/extra-pages/portfolio",
      },
      {
        id: "faq",
        title: "FAQ",
        messageId: "sidebar.pages.extraPages.faq",
        type: "item",
        permittedRole: [RoutePermittedRole.User],
        icon: <BsQuestionDiamond />,
        url: "/extra-pages/faq",
      },
      {
        id: "pricing",
        title: "Pricing",
        messageId: "sidebar.pages.extraPages.pricing",
        type: "collapse",
        permittedRole: [RoutePermittedRole.User],
        icon: "attach_money",
        url: "/extra-pages/pricing",
        children: [
          {
            id: "pricingListing",
            title: "Pricing Listing",
            messageId: "sidebar.pages.extraPages.pricingListing",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/extra-pages/pricing-listing",
          },
          {
            id: "pricingDetail",
            title: "Pricing Detail",
            messageId: "sidebar.pages.extraPages.pricingDetail",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/extra-pages/pricing-detail",
          },
        ],
      },
      {
        id: "user",
        title: "User Pages",
        messageId: "sidebar.pages.userPages",
        type: "collapse",
        icon: <RiShieldUserLine />,
        children: [
          {
            id: "sign-in-1",
            title: "SignIn-1",
            messageId: "sidebar.pages.userPages.signIn1",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/user/sign-in-1",
          },
          {
            id: "sign-in-2",
            title: "SignIn-2",
            messageId: "sidebar.pages.userPages.signIn2",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/user/sign-in-2",
          },
          {
            id: "sign-up-1",
            title: "SignUp-1",
            messageId: "sidebar.pages.userPages.signUp1",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/user/sign-up-1",
          },
          {
            id: "sign-up-2",
            title: "SignUp-2",
            messageId: "sidebar.pages.userPages.signUp2",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/user/sign-up-2",
          },
          {
            id: "forgot-password-1",
            title: "Forgot Password-1",
            messageId: "sidebar.pages.userPages.forgetPassword1",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/user/forgot-password-1",
          },
          {
            id: "forgot-password-2",
            title: "Forgot Password-2",
            messageId: "sidebar.pages.userPages.forgetPassword2",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/user/forgot-password-2",
          },
          {
            id: "reset-password-1",
            title: "Reset Password-1",
            messageId: "sidebar.pages.userPages.resetPassword1",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/user/reset-password-1",
          },
          {
            id: "reset-password-2",
            title: "Reset Password-2",
            messageId: "sidebar.pages.userPages.resetPassword2",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/user/reset-password-2",
          },
          {
            id: "lock-1",
            title: "Lock Screen-1",
            messageId: "sidebar.pages.userPages.lockScreen1",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/user/lock-1",
          },
          {
            id: "lock-2",
            title: "Lock Screen-2",
            messageId: "sidebar.pages.userPages.lockScreen2",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/user/lock-2",
          },
        ],
      },
      {
        id: "list-type",
        title: "User List",
        messageId: "sidebar.pages.userList",
        type: "collapse",
        icon: <AiOutlineUnorderedList />,
        children: [
          {
            id: "morden",
            title: "Modern",
            messageId: "sidebar.pages.userList.modern",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/list-type/morden",
          },
          {
            id: "standard",
            title: "Standard",
            messageId: "sidebar.pages.userList.standard",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/list-type/standard",
          },
          {
            id: "flat",
            title: "Flat",
            messageId: "sidebar.pages.userList.flat",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/list-type/flat",
          },
        ],
      },
      {
        id: "error-pages",
        title: "Error Pages",
        messageId: "sidebar.pages.errorPages",
        type: "collapse",
        icon: <BiErrorAlt />,
        children: [
          {
            id: "error-401",
            title: "402",
            messageId: "sidebar.pages.errorPages.401",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/error-pages/error-401",
          },
          {
            id: "error-403",
            title: "403",
            messageId: "sidebar.pages.errorPages.403",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/error-pages/error-403",
          },
          {
            id: "error-404",
            title: "404",
            messageId: "sidebar.pages.errorPages.404",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/error-pages/error-404",
          },
          {
            id: "error-500",
            title: "500",
            messageId: "sidebar.pages.errorPages.500",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/error-pages/error-500",
          },
          {
            id: "error-503",
            title: "503",
            messageId: "sidebar.pages.errorPages.503",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/error-pages/error-503",
          },
          {
            id: "maintenance",
            title: "Maintenance",
            messageId: "sidebar.pages.errorPages.maintenance",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/error-pages/maintenance",
          },
          {
            id: "coming-soon",
            title: "Coming Soon",
            messageId: "sidebar.pages.errorPages.comingSoon",
            type: "item",
            permittedRole: [RoutePermittedRole.User],
            url: "/error-pages/coming-soon",
          },
        ],
      },
    ],
  },
];
export default routesConfig;
