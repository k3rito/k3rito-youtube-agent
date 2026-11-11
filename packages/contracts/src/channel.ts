export interface Channel {
  id: string;
  name: string;
  youtubeId?: string;
  settings: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}
