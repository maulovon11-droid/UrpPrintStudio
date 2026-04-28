import { supabase } from '@/lib/supabase';
import type { OrderInsert, OrderItemInsert } from '@/types/database';

export async function createOrder(payload: OrderInsert) {
  const { error } = await supabase
    .from('orders')
    .insert(payload);

  if (error) {
    throw error;
  }
}

export async function createOrderItem(payload: OrderItemInsert) {
  const { error } = await supabase
    .from('order_items')
    .insert(payload);

  if (error) {
    throw error;
  }
}
