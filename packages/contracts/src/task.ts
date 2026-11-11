export interface Task {
  id: string;
  type: string;
  payload: Record<string, unknown>;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  channelId: string;
  createdAt: Date;
  updatedAt: Date;
}
