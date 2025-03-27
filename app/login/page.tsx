import { AuthCard } from "@/components/customs/AuthCard"

export default function Login() {
  return (
    <div className="flex items-center justify-center pt-20">
      <div className="flex-1 flex items-center justify-center">
        <AuthCard />
      </div>
    </div>
  )
}

export const metadata = {
  title: "Login",
}
