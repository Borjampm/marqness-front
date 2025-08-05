import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface TimeEntry {
  id: string;
  entry_id: string;
  name: string;
  description?: string;
  category?: string; // Legacy field for backwards compatibility
  category_id?: string; // Foreign key to hobby_categories.id
  start_time: string;
  end_time?: string;
  elapsed_time?: number;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface HobbyCategory {
  id: string;
  user_id: string;
  name: string;
  color?: string;
  created_at: string;
  updated_at: string;
}

export interface UserExpenseCategory {
  id: string;
  user_id: string;
  name: string;
  emoji: string;
  color?: string;
  is_default?: boolean; // Indicates if this was created as a default category
  created_at: string;
  updated_at: string;
}

export interface Transaction {
  id: string;
  transaction_id: string;
  user_id: string;
  type: 'income' | 'expense';
  amount: number;
  currency: string;
  category?: string; // Legacy field for backwards compatibility
  category_id?: string; // Foreign key to user_expense_categories.id
  account?: string; // Legacy field for backwards compatibility
  account_id?: string; // Foreign key to user_accounts.id
  title: string;
  description?: string;
  transaction_date: string;
  created_at: string;
  updated_at: string;
}

export interface UserAccount {
  id: string;
  user_id: string;
  name: string;
  type: 'bank' | 'cash' | 'credit_card' | 'investment' | 'other';
  color?: string;
  description?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// ExpenseCategory interface removed - all expense categories are now user-specific
// Use UserExpenseCategory instead 