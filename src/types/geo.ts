export interface GeoIPResponse {
  continent?: string | null;
  country?: string | null;
  countryCode?: string | null;

  regionName?: string | null;
  city?: string | null;

  zip?: string | null;
  timezone?: string | null;

  isp?: string | null;
  org?: string | null;
  asname?: string | null;

  mobile?: boolean | null;
  proxy?: boolean | null;
  hosting?: boolean | null;

  lat?: number | null;
  lon?: number | null;
}