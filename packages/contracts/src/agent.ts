export interface Agent {
  id: string;
  role: string;
  name: string;
  description: string;
}

export interface AgentRun {
  id: string;
  agentId: string;
  taskId: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  result?: unknown;
  startedAt?: Date;
  completedAt?: Date;
}
