import { supabase } from '@/lib/supabase';
import {
  buildServiceErrorMessage,
  createTraceId,
  reportServiceError,
} from '@/lib/service-utils';

export type CreateGuestOrderPayload = {
  productId: string;
  templateId?: string | null;
  customerName: string;
  customerEmail: string;
  customerPhone?: string | null;
  customerCareer?: string | null;
  graduationYear?: number | null;
  quantity?: number;
  notes?: string | null;
  canvasData?: Record<string, unknown>;
};

export type CreateGuestOrderResult = {
  design_id: string;
  order_id: string;
  order_item_id: string;
  order_code: string;
  subtotal: number;
  total_amount: number;
  trace_id: string;
};

export async function createGuestOrder(
  payload: CreateGuestOrderPayload,
): Promise<CreateGuestOrderResult> {
  const traceId = createTraceId('guest-order');

  const { data, error } = await supabase
    .rpc('create_guest_order', {
      input_product_id: payload.productId,
      input_template_id: payload.templateId ?? null,
      input_customer_name: payload.customerName,
      input_customer_email: payload.customerEmail,
      input_customer_phone: payload.customerPhone ?? null,
      input_customer_career: payload.customerCareer ?? null,
      input_graduation_year: payload.graduationYear ?? null,
      input_quantity: payload.quantity ?? 1,
      input_delivery_method: 'pickup',
      input_notes: payload.notes ?? null,
      input_canvas_data: payload.canvasData ?? {},
      input_source_photo_url: null,
      input_preview_image_url: null,
      input_trace_id: traceId,
    })
    .single();

  if (error) {
    reportServiceError('create_guest_order', error, {
      traceId,
      productId: payload.productId,
      templateId: payload.templateId ?? null,
    });
    throw new Error(buildServiceErrorMessage('crear el pedido', traceId));
  }

  return data as CreateGuestOrderResult;
}
