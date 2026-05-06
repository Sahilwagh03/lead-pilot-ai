"use client";

import CreateCampaignModal from "@/components/dashboard/campaign-modal";
import CampaignTable from "@/components/dashboard/campaign-table";
import { SectionHeader } from "@/components/dashboard/section-header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4">
      <div className="mb-2 flex lg:items-center flex-col lg:flex-row justify-between gap-2">
        <SectionHeader
          title="Welcome to Dashboard"
          description="Convert leads in real-time with our comprehensive dashboard."
        />
        <CreateCampaignModal>
          <Button className="cursor-pointer">
            New Campaign
            <Plus />
          </Button>
        </CreateCampaignModal>
      </div>
      <CampaignTable />
    </div>
  );
};

export default DashboardPage;
