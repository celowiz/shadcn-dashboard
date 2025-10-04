"use client"

import {
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
  username: z.string().min(2, {message: "Username must be at least 2 characters"}).max(50, {message: "Username must be less than 50 characters"}),
  email: z.email({message: "Invalid email address"}),
  phone: z.string().min(10, {message: "Phone number must be at least 10 characters"}).max(15, {message: "Phone number must be less than 15 characters"}),
  location: z.string().min(2, {message: "Location must be at least 2 characters"}).max(50, {message: "Location must be less than 50 characters"}),
  role: z.enum(["admin", "user"], {message: "Invalid role"}),
})

type FormSchema = z.infer<typeof formSchema>

export default function EditUser() {

	// 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "john.doe",
			email: "john.doe@example.com",
			phone: "1234567890",
			location: "New York, NY",
			role: "admin",
    },
  })

  return (
		<SheetContent>
			<SheetHeader>
				<SheetTitle className="mb-4">
					Are you absolutely sure?
				</SheetTitle>
				<SheetDescription asChild>
					<Form {...form}>
						<form className="space-y-8">
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Username</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormDescription>
											This is your public display name.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      Only admin can see your email.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      Only admin can see your phone number.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the public location.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="user">User</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      Only verified users can be admin.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
							<Button type="submit">Submit</Button>
						</form>
					</Form>
				</SheetDescription>
			</SheetHeader>
		</SheetContent>
  );
};