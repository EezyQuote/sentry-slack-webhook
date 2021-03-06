declare interface SentryPayload {
  id?: string;
  project?: string;
  project_name?: string;
  project_slug?: string;
  logger?: null;
  level?: string;
  culprit?: string;
  message?: string;
  url?: string;
  triggering_rules?: any[];
  event?: {
    event_id?: string;
    level?: string;
    version?: string;
    type?: string;
    logentry?: any;
    logger?: string;
    modules?: any;
    platform?: string;
    timestamp?: number;
    received?: number;
    environment?: string;
    user?: any;
    request?: any;
    contexts?: any;
    stacktrace?: any;
    tags?: any;
    extra?: any;
    fingerprint?: any;
    hashes?: any;
    metadata?: any;
    title?: string;
    location?: null;
    culprit?: string;
    _ref?: number;
    _ref_version?: number;
    _metrics?: any;
    id?: string;
  };
}
