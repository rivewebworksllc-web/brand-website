import { handleConnectPost } from "@/lib/connect-handler";

export async function POST(request: Request) {
  return handleConnectPost(request);
}
