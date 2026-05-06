"use client";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import Link from "next/link";

type Campaign = {
  id: string;
  name: string;
  status: "active" | "paused" | "completed";
};

const campaigns: Campaign[] = [
  { id: "1", name: "Diwali Sales Campaign", status: "active" },
  { id: "2", name: "Loan Recovery Drive", status: "paused" },
  { id: "3", name: "Customer Follow-up", status: "completed" },
];

export default function CampaignTable() {
  const getStatusStyles = (status: Campaign["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700 border-green-200";
      case "paused":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "completed":
        return "bg-gray-100 text-gray-700 border-gray-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="rounded-lg border shadow-sm">
      <Table>
        <TableHeader className="bg-accent">
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Campaign Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {campaigns.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell>{campaign.id}</TableCell>

              <TableCell className="font-medium">{campaign.name}</TableCell>

              <TableCell>
                <Badge
                  className={`capitalize border ${getStatusStyles(campaign.status)}`}
                >
                  {campaign.status}
                </Badge>
              </TableCell>

              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="size-8 inline-flex items-center justify-center rounded-md text-muted-foreground hover:bg-muted">
                      <MoreVertical className="h-5 w-5" />
                    </div>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end">
                    <Link href={`/dashboard/campaign/${campaign.id}`}>
                      <DropdownMenuItem>View</DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem className="text-red-500">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
