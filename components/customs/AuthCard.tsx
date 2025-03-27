"use client"

import {
  signInWithEmail,
  signInWithGithub,
  signInWithGoogle,
  signUp,
} from "@/app/login/action"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChromeIcon, GitHubIcon } from "@/components/utils/Icons"
import { SubmitButton } from "@/components/utils/SubmitButton"

export const AuthCard = () => {
  const handleGitHubSignIn = async () => {
    await signInWithGithub()
  }

  const handleGoogleSignIn = async () => {
    await signInWithGoogle()
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>Sign in to your account to continue</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <button type="submit" onClick={handleGitHubSignIn}>
            <GitHubIcon className="mr-2 h-4 w-4" />
            GitHub
          </button>
          <button type="submit" onClick={handleGoogleSignIn}>
            <ChromeIcon className="mr-2 h-4 w-4" />
            Google
          </button>
        </div>
        <div className="relative py-5">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center uppercase">
            <span className="px-2 text-muted-foreground">or continue with</span>
          </div>
        </div>
        <form className="px-10 animate-in flex-1 flex flex-col gap-2 text-foreground">
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="email"
            placeholder="you@example.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <SubmitButton
            formAction={signInWithEmail}
            className="bg-gray-950 text-white rounded-md px-4 py-3 text-foreground mb-2 hover:opacity-90 hover:bg-gray-900 focus:ring-2 focus:ring-gray-800 focus:outline-none"
            pendingText="Signing In..."
          >
            Sign In
          </SubmitButton>
          <SubmitButton
            formAction={signUp}
            className="border border-foreground/20 rounded-md px-4 py-2.5 text-foreground mb-2 hover:bg-foreground/5 focus:ring-2 focus:ring-foreground focus:outline-none"
            pendingText="Signing Up..."
          >
            Sign Up
          </SubmitButton>
        </form>
      </CardContent>
    </Card>
  )
}
