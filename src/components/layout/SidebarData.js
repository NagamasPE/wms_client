import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import FaceIcon from "@material-ui/icons/Face";
import CategoryIcon from "@material-ui/icons/Category";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import GolfCourseIcon from "@material-ui/icons/GolfCourse";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import DashboardIcon from "@material-ui/icons/Dashboard";
import StorageIcon from "@material-ui/icons/Storage";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SendIcon from "@material-ui/icons/Send";
import WorkIcon from "@material-ui/icons/Work";
import DriveEtaIcon from "@material-ui/icons/DriveEta";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    link: "/main",
  },
  {
    title: "Master",
    icon: StorageIcon,
    arrow: <KeyboardArrowDownIcon />,
    link: "#",
    childrens: [
      {
        title: "Operator",
        icon: <AssignmentIndIcon />,
        link: "/master/operator",
      },
      {
        title: "Product",
        icon: <GolfCourseIcon />,
        link: "/master/produk",
      },
      {
        title: "Material",
        icon: <LocalGroceryStoreIcon />,
        link: "/master/material",
      },
      {
        title: "Recipe",
        icon: <DonutSmallIcon />,
        link: "/master/recipe",
      },
      {
        title: "Group",
        icon: <CategoryIcon />,
        link: "/master/grup",
      },
    ],
  },
  {
    title: "Transaction",
    icon: ImportExportIcon,
    arrow: <KeyboardArrowDownIcon />,
    link: "#",
    childrens: [
      {
        title: "Planning",
        icon: <TrackChangesIcon />,
        link: "/master/planning",
      },
      {
        title: "Incoming Material",
        icon: <AddShoppingCart />,
        link: "/master/material_masuk",
      },
      {
        title: "Weighing",
        icon: <EqualizerIcon />,
        link: "/master/penimbangan_to",
      },
    ],
  },
  {
    title: "Production",
    icon: WorkIcon,
    link: "/production",
  },
  {
    title: "Delivery",
    icon: SendIcon,
    link: "/delivery",
  },
  {
    title: "Inspection",
    icon: DriveEtaIcon,
    link: "/inspection",
  },
];
