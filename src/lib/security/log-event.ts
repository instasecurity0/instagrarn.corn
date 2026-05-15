// src/lib/security/log-event.ts
import { supabaseAdmin } from "@/lib/supabase/server";
import type { SecurityEvent } from "@/types/security";

interface LogSecurityEventParams {
  sessionId: string;

  eventType: string;

  ipAddress?: string | null;
  userAgent?: string | null;

  country?: string | null;
  city?: string | null;

  browser?: string | null;
  os?: string | null;
  deviceType?: string | null;

  payload?: Record<string, unknown>;
}

export async function logSecurityEvent({
  sessionId,
  eventType,

  ipAddress = null,
  userAgent = null,

  country = null,
  city = null,

  browser = null,
  os = null,
  deviceType = null,

  payload = {},
}: LogSecurityEventParams) {

  const eventData: Omit<SecurityEvent, "id" | "created_at"> = {
    session_id: sessionId,
    event_type: eventType,

    ip_address: ipAddress,
    user_agent: userAgent,

    country,
    city,

    browser,
    os,
    device_type: deviceType,

    payload,
  };

  const { error } = await supabaseAdmin
    .from("events_audit")
    .insert([eventData]);

  if (error) {
    console.error("[Security Event Error]", error);
  }
}