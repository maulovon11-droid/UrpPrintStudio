# Supabase setup

1. Open the Supabase dashboard.
2. Go to SQL Editor.
3. Create a new query.
4. Paste the full content of `supabase/schema.sql`.
5. Run the query.
6. Check Table Editor and confirm these tables exist:
   - `products`
   - `templates`
   - `designs`
   - `orders`
   - `order_items`
   - `payments`
   - `contact_messages`
7. Confirm the `products` table has the six seed products.
8. Apply future updates from `supabase/schema.sql` when the frontend data flow changes, including RPC functions such as `create_guest_order`.
9. In the frontend, use only:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

Never expose the Supabase secret key in the React app.

