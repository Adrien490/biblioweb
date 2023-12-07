import Navbar from "@/app/(users)/_components/navbar"

const UsersLayout = ({children}: {children: React.ReactNode}) =>{
  return (
    <div className="h-full flex flex-col">
      <Navbar />
      {children}
    </div>
  )
}

export default UsersLayout