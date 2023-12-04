export type ProjectDetails = {
  source: string;
  version: string;
  num_of_records: string;
  descriptions: { URL: string; c_d0_method: string; c_d0: string };
  feeds: Feed[] | [];
};

export type Feed = {
  time: string;
  device_id?: string;
  SiteAddr: string;
  SiteName: string;
  app: string;
  area: string;
  gps_alt: number;
  gps_fix: number;
  gps_lat: number;
  gps_lon: number;
  gps_num: number;
  name: string;
  s_d0: number;
  s_d1: number;
  s_d2: number;
  s_h0: number;
  s_t0: number;
  timestamp: string;
  c_d0: number;
  c_d0_method: number;
};
