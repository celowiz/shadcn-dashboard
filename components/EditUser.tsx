"use client"

import {
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";

export default function EditUser() {
  return (
		<SheetContent>
			<SheetHeader>
				<SheetTitle className="mb-4">
					Are you absolutely sure?
				</SheetTitle>
				<SheetDescription>
					This action cannot be undone. This will permanently delete your
					account and remove your data from our servers.
				</SheetDescription>
			</SheetHeader>
		</SheetContent>
  );
};