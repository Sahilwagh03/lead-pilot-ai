// app/dashboard/campaign/[id]/page.tsx

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CampaignDetailsPage({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      <h1 className="text-2xl font-semibold">Campaign Details</h1>
      
    </div>
  );
}