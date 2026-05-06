import { LayoutDashboard, Target, PlayCircle } from "lucide-react";

export const SidebarData = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Demo",
    url: "/dashboard/demo",
    icon: PlayCircle,
  },
];

export const data = [
  {
    call_id: "uuid-v4",
    lead_id: "string — from batch upload",
    timestamp_start: "ISO 8601 e.g. 2025-01-13T09:14:32+05:30",
    timestamp_end: "ISO 8601",
    duration_seconds: 194,
    lead: {
      name: "string",
      phone: "+91XXXXXXXXXX",
      city: "string",
      partner_type:
        "MFD | insurance_agent | financial_advisor | influencer | unknown",
    },
    language: {
      detected: "hi | en | hinglish | mr | ta | te | gu | bn",
      used: "hi",
      switched_mid_call: false,
      switched_to: null,
    },
    conversation: [
      {
        turn: 1,
        speaker: "agent",
        text: "Namaste! Main Rupeezy ki taraf se baat kar raha hoon...",
        timestamp_offset_seconds: 0,
      },
      {
        turn: 2,
        speaker: "lead",
        text: "Haan boliye",
        timestamp_offset_seconds: 8,
      },
      {
        turn: 3,
        speaker: "agent",
        text: "Aapko Rupeezy ke AP program ke baare mein batana tha...",
        timestamp_offset_seconds: 10,
      },
    ],
    benefits_covered: {
      zero_joining_fee: true,
      hundred_percent_brokerage: true,
      daily_payouts: true,
      rise_portal: false,
    },
    objections: [
      {
        type: "already_with_broker | not_enough_contacts | support_concern | trustworthiness | think_about_it",
        value: "already_with_broker",
        lead_text: "Main already Zerodha ke saath hoon",
        resolved: true,
      },
    ],
    qualification: {
      score: 68,
      classification: "Hot | Warm | Cold",
      classification_value: "Warm",
      signals: {
        verbal_interest: "high | medium | low",
        readiness: "immediate | days | weeks | none",
        sentiment_end_of_call: "positive | neutral | negative",
        asked_followup_questions: true,
        signup_intent_stated: false,
      },
    },
    outcome: {
      result:
        "interested | signed_up | not_interested | callback_requested | no_response",
      result_value: "interested",
      cta_given: "whatsapp_link | rm_transfer | none",
      cta_given_value: "whatsapp_link",
      cta_accepted: true,
      callback_time_requested: null,
    },
    rm_handoff: {
      triggered: false,
      summary:
        "MFD with ~85 clients. Currently Zerodha AP. Interested in 100% brokerage — compare INR impact directly. Concern about client support raised and addressed. Wants RISE portal demo before deciding.",
      unresolved_objections: [],
      do_not_repitch: ["zero_joining_fee"],
      lead_language: "hi",
    },
    post_call_summary:
      "Lead is an established MFD interested in switching but needs reassurance on support quality. Classify Warm. Send WhatsApp link immediately. RM to follow up with RISE portal demo within 48 hours.",
  },
];
