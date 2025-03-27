import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { StarIcon } from "@/components/utils/Icons"

export function ReviewForm() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Write a Review</CardTitle>
        <CardDescription>
          Share your thoughts on the movie and help others decide what to watch.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="movie-title">Movie Title</Label>
          <Input id="movie-title" placeholder="Enter the movie title" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="review-content">Review</Label>
          <Textarea
            id="review-content"
            placeholder="Share your thoughts on the movie..."
            className="min-h-[150px]"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="rating">Rating</Label>
            <div className="flex items-center gap-2">
              <StarIcon className="w-6 h-6 fill-primary" />
              <StarIcon className="w-6 h-6 fill-primary" />
              <StarIcon className="w-6 h-6 fill-primary" />
              <StarIcon className="w-6 h-6 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-6 h-6 fill-muted stroke-muted-foreground" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="public">Make Public</Label>
            <div className="flex items-center gap-2">
              <Switch id="public" aria-label="Make review public" />
              <span className="text-sm">
                Make this review visible to other users
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="ghost">Cancel</Button>
        <Button>Submit Review</Button>
      </CardFooter>
    </Card>
  )
}
