export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  base_price: number;
  digital_download_price: number;
  currency: string;
  image_url: string | null;
  active: boolean;
  sort_order: number;
};

export type Template = {
  id: string;
  product_id: string;
  name: string;
  slug: string;
  canvas_width: number;
  canvas_height: number;
  config: Record<string, unknown>;
  active: boolean;
  sort_order: number;
};

export type DesignInsert = {
  id?: string;
  user_id?: string | null;
  product_id: string;
  template_id?: string | null;
  status?: 'draft' | 'saved' | 'exported' | 'ordered';
  guest_email?: string | null;
  customer_name: string;
  customer_career?: string | null;
  graduation_year?: number | null;
  source_photo_url?: string | null;
  preview_image_url?: string | null;
  export_png_url?: string | null;
  export_pdf_url?: string | null;
  canvas_data?: Record<string, unknown>;
  is_public?: boolean;
};

export type OrderInsert = {
  id?: string;
  order_code?: string;
  user_id?: string | null;
  print_partner_id?: string | null;
  status?: 'draft' | 'pending' | 'confirmed' | 'in_production' | 'ready' | 'delivered' | 'cancelled';
  payment_status?: 'not_required' | 'pending' | 'paid' | 'failed' | 'refunded';
  payment_method?: 'none' | 'cash' | 'transfer' | 'yape' | 'plin' | 'mercadopago' | 'izipay';
  delivery_method?: 'pickup' | 'delivery' | 'digital';
  delivery_amount?: number;
  customer_name: string;
  customer_email: string;
  customer_phone?: string | null;
  delivery_address?: string | null;
  delivery_district?: string | null;
  notes?: string | null;
};

export type OrderItemInsert = {
  id?: string;
  order_id: string;
  design_id: string;
  product_id: string;
  template_id?: string | null;
  quantity: number;
  unit_price: number;
  production_notes?: string | null;
};
