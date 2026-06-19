import { supabase } from "@/lib/supabase";
import { TABLES, throwIfError } from "./tables";
import type { Apunte, ApunteFormData } from "@/types/entities";

const TABLE_NAME = TABLES.apuntes;

// Apuntes

export const getApuntes = async (): Promise<Apunte[]> => {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("*")
    .order("id");

  throwIfError(error);
  return data as Apunte[];
};

export const getApunte = async (
  id: number
): Promise<Apunte> => {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("*")
    .eq("id", id)
    .single();

  throwIfError(error);
  return data as Apunte;
};

export const createApunte = async (
  apunte: ApunteFormData
): Promise<Apunte> => {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .insert([apunte])
    .select()
    .single();

  throwIfError(error);
  return data as Apunte;
};

export const updateApunte = async (
  id: number,
  apunte: ApunteFormData
): Promise<Apunte> => {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update(apunte)
    .eq("id", id)
    .select()
    .single();

  throwIfError(error);
  return data as Apunte;
};

export const deleteApunte = async (
  id: number
): Promise<void> => {
  const { error } = await supabase
    .from(TABLE_NAME)
    .delete()
    .eq("id", id);

  throwIfError(error);
};
