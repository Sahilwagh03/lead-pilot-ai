
import type { ReactNode } from "react";

import {
  BadgeCheck,
  Clock3,
  Flame,
  Phone,
  PhoneCall,
  ShieldAlert,
  TrendingUp,
  User,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { data } from "@/constants/dashboard";


type Props = {
  params: {
    id: string;
  };
};

export default async function CampaignDetailsPage({ params }: Props) {
  const { id } = await params;

  const campaign = data[0];

  return (
    <div className="min-h-screen bg-zinc-950 text-white space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Campaign Details
          </h1>
          <p className="text-zinc-400 text-sm mt-1">Campaign ID: {id}</p>
        </div>

        <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-4 py-1 text-sm">
          {campaign.qualification.classification}
        </Badge>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          title="Lead"
          value={campaign.lead.name}
          icon={<User className="w-5 h-5" />}
          subtitle={campaign.lead.phone}
        />

        <StatCard
          title="Call Outcome"
          value={campaign.outcome.result_value}
          icon={<BadgeCheck className="w-5 h-5" />}
          subtitle="Signup Completed"
        />

        <StatCard
          title="Qualification Score"
          value={`${campaign.qualification.score}/100`}
          icon={<Flame className="w-5 h-5" />}
          subtitle="High Intent Lead"
        />

        <StatCard
          title="Language"
          value={campaign.language.used}
          icon={<PhoneCall className="w-5 h-5" />}
          subtitle={`Detected: ${campaign.language.detected}`}
        />
      </div>

      {/* Summary Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left */}
        <div className="xl:col-span-2 space-y-6">
          {/* Conversation */}
          <Card className="bg-zinc-900 border-zinc-800 text-white rounded-3xl">
            <CardHeader>
              <CardTitle>Conversation Transcript</CardTitle>
            </CardHeader>

            <CardContent>
              <ScrollArea className="h-[500px] pr-4">
                <div className="space-y-4">
                  {campaign.conversation.map((msg) => (
                    <div
                      key={msg.turn}
                      className={`flex ${
                        msg.speaker === "agent"
                          ? "justify-start"
                          : "justify-end"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                          msg.speaker === "agent"
                            ? "bg-zinc-800 text-zinc-100"
                            : "bg-indigo-500 text-white"
                        }`}
                      >
                        <div className="text-[11px] uppercase tracking-wide opacity-70 mb-1">
                          {msg.speaker}
                        </div>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card className="bg-zinc-900 border-zinc-800 text-white rounded-3xl">
            <CardHeader>
              <CardTitle>Score Timeline</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                {campaign.score_timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-sm font-semibold text-indigo-300">
                        {item.score}
                      </div>

                      {index !== campaign.score_timeline.length - 1 && (
                        <div className="w-px flex-1 bg-zinc-700 mt-2" />
                      )}
                    </div>

                    <div className="pb-6">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="capitalize">
                          {item.phase}
                        </Badge>

                        <Badge
                          className={`capitalize ${
                            item.signal === "positive"
                              ? "bg-emerald-500/20 text-emerald-400"
                              : "bg-zinc-700 text-zinc-200"
                          }`}
                        >
                          {item.signal}
                        </Badge>
                      </div>

                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {item.text_preview}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right */}
        <div className="space-y-6">
          {/* Qualification */}
          <Card className="bg-zinc-900 border-zinc-800 text-white rounded-3xl">
            <CardHeader>
              <CardTitle>Qualification Signals</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 text-sm">
              <InfoRow
                label="Verbal Interest"
                value={campaign.qualification.signals.verbal_interest}
              />
              <InfoRow
                label="Readiness"
                value={campaign.qualification.signals.readiness}
              />
              <InfoRow
                label="Sentiment"
                value={campaign.qualification.signals.sentiment_end_of_call}
              />
              <InfoRow
                label="Asked Questions"
                value={campaign.qualification.signals.asked_followup_questions ? "Yes" : "No"}
              />
              <InfoRow
                label="Signup Intent"
                value={campaign.qualification.signals.signup_intent_stated ? "Yes" : "No"}
              />
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="bg-zinc-900 border-zinc-800 text-white rounded-3xl">
            <CardHeader>
              <CardTitle>Benefits Covered</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-wrap gap-2">
              {Object.entries(campaign.benefits_covered).map(([key, value]) =>
                value ? (
                  <Badge
                    key={key}
                    className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 capitalize"
                  >
                    {key.replaceAll("_", " ")}
                  </Badge>
                ) : null
              )}
            </CardContent>
          </Card>

          {/* Objections */}
          <Card className="bg-zinc-900 border-zinc-800 text-white rounded-3xl">
            <CardHeader>
              <CardTitle>Objections</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              {campaign.objections.map((obj, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="capitalize bg-red-500/20 text-red-400 border-red-500/30">
                      {obj.type.replaceAll("_", " ")}
                    </Badge>

                    <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                      Resolved
                    </Badge>
                  </div>

                  <p className="text-sm text-zinc-300 italic">
                    “{obj.lead_text}”
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* RM Handoff */}
      <Card className="bg-zinc-900 border-zinc-800 text-white rounded-3xl">
        <CardHeader>
          <CardTitle>RM Handoff Summary</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-5 text-sm text-zinc-300 leading-relaxed">
            {campaign.rm_handoff.summary}
          </div>

          <Separator className="bg-zinc-800" />

          <div>
            <h3 className="text-sm font-medium mb-3 text-zinc-200">
              Do Not Repitch
            </h3>

            <div className="flex flex-wrap gap-2">
              {campaign.rm_handoff.do_not_repitch.map((item, idx) => (
                <Badge
                  key={idx}
                  className="bg-orange-500/20 text-orange-300 border border-orange-500/30 capitalize"
                >
                  {item.replaceAll("_", " ")}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Post Call Summary */}
      <Card className="bg-zinc-900 border-zinc-800 text-white rounded-3xl">
        <CardHeader>
          <CardTitle>Post Call Summary</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-zinc-300 leading-relaxed text-sm">
            {campaign.post_call_summary}
          </p>
        </CardContent>
      </Card>

      {/* Metadata */}
      <Card className="bg-zinc-900 border-zinc-800 text-white rounded-3xl">
        <CardHeader>
          <CardTitle>Campaign Metadata</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-zinc-800 hover:bg-transparent">
                <TableHead className="text-zinc-400">Field</TableHead>
                <TableHead className="text-zinc-400">Value</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <MetaRow label="Call ID" value={campaign.call_id} />
              <MetaRow
                label="Timestamp End"
                value={campaign.timestamp_end}
              />
              <MetaRow
                label="Partner Type"
                value={campaign.lead.partner_type}
              />
              <MetaRow
                label="CTA Accepted"
                value={campaign.outcome.cta_accepted ? "Yes" : "No"}
              />
              <MetaRow
                label="Lead Language"
                value={campaign.rm_handoff.lead_language}
              />
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function StatCard({
  title,
  value,
  subtitle,
  icon,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
}) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white rounded-3xl">
      <CardContent className="p-6 flex items-start justify-between">
        <div>
          <p className="text-zinc-400 text-sm">{title}</p>
          <h3 className="text-2xl font-semibold mt-2">{value}</h3>
          <p className="text-zinc-500 text-xs mt-1">{subtitle}</p>
        </div>

        <div className="w-11 h-11 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-zinc-400">{label}</span>
      <span className="font-medium capitalize">{value}</span>
    </div>
  );
}

function MetaRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <TableRow className="border-zinc-800 hover:bg-zinc-900/50">
      <TableCell className="font-medium text-zinc-300">{label}</TableCell>
      <TableCell className="text-zinc-400">{value}</TableCell>
    </TableRow>
  );
}
