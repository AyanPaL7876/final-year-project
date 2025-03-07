import React, { useContext } from "react";
import { ProfileContext } from "@/hooks/ProfileContext";
import Profile from "./Profile";
import ActionButton from "./ActionButton";
import { ChartNoAxesGantt, Plus, User } from "lucide-react";
import Tasks from "./Tasks";

const adminButtons = [
  { href: "/create/user", icon: Plus, label: "Create new User" },
  { href: "/create/school", icon: Plus, label: "Create new School" },
  { href: "/create/dept", icon: Plus, label: "Edit School or add Dept" },
  { href: "/#", icon: ChartNoAxesGantt, label: "Change user Role" },
  { href: "/#", icon: User, label: "Edit User" },
  // { href: "/create/questionpaper", icon: Plus, label: "Create Question paper" },
  // { href: "/visit/questionpaper", icon: ChartNoAxesGantt, label: "View Question paper" },
];

const coeButtons = [
  // { href: "/#", icon: Plus, label: "Create Question paper" },
  { href: "/#", icon: ChartNoAxesGantt, label: "View current Question" },
  { href: "/#", icon: Plus, label: "View Question Status" },
  { href: "/#", icon: User, label: "View Previous year Paper" },
];

const hodButtons = [
  { href: "/#", icon: Plus, label: "Assing Teacher" },
  { href: "/#", icon: Plus, label: "Create new Subject" },
  { href: "/#", icon: ChartNoAxesGantt, label: "View Question Paper" },
  { href: "/#", icon: Plus, label: "Approve Question Paper" },
  { href: "/#", icon: User, label: "Select Final Paper" },
];

const teacherButtons = [
  { href: "/create/questionpaper", icon: Plus, label: "Create Question paper" },
  { href: "/visit/questionpaper", icon: ChartNoAxesGantt, label: "View Question paper" },
  { href: "/#", icon: ChartNoAxesGantt, label: "View Question Status" },
  { href: "/#", icon: ChartNoAxesGantt, label: "View Previous year Paper" },
];

function Dashboard() {
  const { profileData } = useContext(ProfileContext);
  return (
    <div className="min-h-[90vh] bg-slate-950 pb-20">
      <Profile />
      {profileData.role === "admin" && <ActionButton buttons={adminButtons} />}
      {profileData.role === "coe" && <ActionButton buttons={coeButtons} />}
      {profileData.role === "hod" && <ActionButton buttons={hodButtons} />}
      {profileData.role === "teacher" && <ActionButton buttons={teacherButtons} />}
    </div>
  );
}

export default Dashboard;
