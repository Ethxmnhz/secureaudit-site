export const CATEGORIES: string[] = [
  'Antivirus (AV)',
  'Endpoint Detection & Response (EDR)',
  'Data Loss Prevention (DLP)',
  'Personal Firewall',
  'Disk Encryption (BitLocker, etc.)',
  'Device Control (USB / Peripheral)',
  'Application Control / Whitelisting',
  'Patch / Vulnerability Management',
  'Email Security / Anti-Phishing',
  'Web Security / SWG',
  'Identity & Access / MFA',
  'Privileged Access Management (PAM)',
  'MDM / Endpoint Management',
  'VPN / ZTNA',
  'Cloud Security Agent (CASB / SaaS)',
  'Backup / Ransomware Protection',
];

export const EDGE_POINTS: { title: string; miss: string; ourEdge: string }[] = [
  {
    title: 'Not just configs',
    miss: 'Tools assume protections exist; they scan CVEs and settings only',
    ourEdge: 'We validate enforcement with real behavioral checks',
  },
  {
    title: 'Endpoint-first',
    miss: 'Network-centric visibility misses local control gaps',
    ourEdge: 'Agent proof at the endpoint, where attacks land',
  },
  {
    title: 'Actionable scoring',
    miss: 'No unified resilience score across controls',
    ourEdge: 'Weighted score + clear remediation mapping',
  },
  {
    title: 'Human + machine output',
    miss: 'Hard to digest reports; poor integrations',
    ourEdge: 'Readable HTML/PDF + JSON for SIEM/GRC',
  },
];
