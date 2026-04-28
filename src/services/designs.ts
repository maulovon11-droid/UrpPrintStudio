import { supabase } from '@/lib/supabase';
import type { DesignInsert } from '@/types/database';

export async function createDesign(payload: DesignInsert) {
  const { error } = await supabase
    .from('designs')
    .insert(payload);

  if (error) {
    throw error;
  }
}
