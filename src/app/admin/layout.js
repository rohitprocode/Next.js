import AdminHeader from "@/components/AdminHeader";

export default function AdminLayout({ children }) {
  return (
    <div>
      <AdminHeader />
      <h1>Ye hai Admin Layout</h1>
      {children}
    </div>
  )
}