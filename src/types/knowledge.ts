export interface KnowledgeFile {
  id: string;
  file_name: string;
  size?: number;
  status?: string;
  content_type?: string;
  created_at?: number;
}

export interface KnowledgeWebsite {
  id: string;
  url: string;
  status?: string;
  last_crawled_at?: number;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
  metadata?: Record<string, string>;
}

export interface AllowlistEntry {
  id: string;
  consumer_phone_number: string;
}
