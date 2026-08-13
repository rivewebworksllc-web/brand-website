import { NextResponse } from "next/server";
import { isConnectDeliveryEnabled } from "@/lib/connect-availability";
import { validateConnectPayload } from "@/lib/connect";
import { deliverConnectEnquiry } from "@/lib/connect-delivery";

type Deliver = typeof deliverConnectEnquiry;

export async function handleConnectPost(
  request: Request,
  deliver: Deliver = deliverConnectEnquiry,
  deliveryEnabled = isConnectDeliveryEnabled(),
) {
  if (!deliveryEnabled) {
    return NextResponse.json(
      { ok: false, formError: "Online enquiries are not available yet." },
      { status: 503 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, formError: "We could not read this enquiry. Please review the form and try again." },
      { status: 400 },
    );
  }

  const validation = validateConnectPayload(payload);
  if (!validation.ok) return NextResponse.json(validation, { status: 400 });

  if (validation.data.website) {
    return NextResponse.json({ ok: false, formError: "We could not accept this enquiry." }, { status: 400 });
  }

  const delivery = await deliver(validation.data);
  if (delivery.ok) return NextResponse.json({ ok: true });

  console.error("Connect delivery failed", { category: delivery.reason });
  return NextResponse.json(
    { ok: false, formError: "Your enquiry was not sent. Please try again." },
    { status: 503 },
  );
}
