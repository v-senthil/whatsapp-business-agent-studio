"use client";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/client/fetcher";
import { qk } from "@/lib/client/query-keys";

export interface Waba { id: string; name?: string; }
export interface PhoneNumber {
  id: string;
  display_phone_number?: string;
  verified_name?: string;
  quality_rating?: string;
  whatsapp_business_account?: { id: string; name?: string };
}

export function useWabas(businessId: string | undefined) {
  return useQuery({
    queryKey: qk.discovery.wabas(businessId ?? ""),
    queryFn: () => fetcher<{ data: Waba[] }>(`/api/graph/wabas?business_id=${encodeURIComponent(businessId!)}`),
    enabled: !!businessId,
    retry: false,
  });
}

export function usePhones(wabaId: string | undefined) {
  return useQuery({
    queryKey: qk.discovery.phones(wabaId ?? ""),
    queryFn: () => fetcher<{ data: PhoneNumber[] }>(`/api/graph/phones?waba_id=${encodeURIComponent(wabaId!)}`),
    enabled: !!wabaId,
    retry: false,
  });
}

export function usePhoneDetails(phoneNumberId: string | undefined) {
  return useQuery({
    queryKey: ["discovery", "phone", phoneNumberId ?? ""],
    queryFn: () => fetcher<PhoneNumber>(`/api/graph/phone?phone_number_id=${encodeURIComponent(phoneNumberId!)}`),
    enabled: !!phoneNumberId,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
}
