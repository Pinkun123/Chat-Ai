"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { Thread } from "@/components/assistant-ui/thread";
import { ThreadList } from "@/components/assistant-ui/thread-list";

export const Assistant = () => {
  const runtime = useChatRuntime({
    api: "/api/chat",
  });

  return (
  <AssistantRuntimeProvider runtime={runtime}>
      <div className="grid h-dvh grid-cols-1 md:grid-cols-[200px_1fr] gap-4 px-2 md:px-4 py-2 md:py-4">
      <div className="md:block">
        <ThreadList />
      </div>
      <div className="flex-1">
        <Thread />
      </div>
      </div>
    </AssistantRuntimeProvider>
  );
};
