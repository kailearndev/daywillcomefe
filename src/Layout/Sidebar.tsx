import {
  PowerIcon,
  PresentationChartBarIcon,
  UserCircleIcon
} from "@heroicons/react/24/solid";
import {
  Avatar,
  Card,
  List,
  ListItem,
  ListItemPrefix,

} from "@material-tailwind/react";
import { FC } from "react";

interface SidebarAppProps {
  children: React.ReactNode
}

const SidebarApp: FC<SidebarAppProps> = (props) => {
  const { children } = props;
  return (
    <div className="flex">
      <Card shadow={true} className=" h-[100vh] w-[20wh]  shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4 flex justify-center">
          <Avatar size='xxl' height={'120px'} width={'120px'} src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/353653355_3498485260364880_8655791167211807130_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=e3f864&_nc_ohc=MfLxYvc8PrQAX9-CJJ_&_nc_oc=AQmv311iTxS60rG4tphTiGcttQbPmdFi-MoAVNa_803YO2xCfPR9971bMpuGPrSgkpJos8jMprdpXvtNvjJrx93h&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfB6ZcQTFxYFBR4sRYdA1KEvFWsMhJXejbgTf4wQF7q8qw&oe=64B4129C" alt="" />
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>

          {/* <ListItem>
      <ListItemPrefix>
        <InboxIcon className="h-5 w-5" />
      </ListItemPrefix>
      Inbox
      <ListItemSuffix>
        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
      </ListItemSuffix>
    </ListItem> */}
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          {/* <ListItem>
      <ListItemPrefix>
        <Cog6ToothIcon className="h-5 w-5" />
      </ListItemPrefix>
      Settings
    </ListItem> */}
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
      <div className="ml-10 w-[80wh]" >
        <div className="">
          {children}
        </div>
      </div>
    </div>
  );
}
export default SidebarApp