import { supabase } from "@/lib/supabase";
import { TABLES, throwIfError } from "./tables";
import type { Tarea, TareaFormData } from "@/types/entities";

const TABLE_NAME = TABLES.tareas;

// Tareas

export const getTareas = async (): Promise<Tarea[]> => {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("*")
    .order("id");

  throwIfError(error);
  return data as Tarea[];
};

export const getTarea = async (id: number): Promise<Tarea> => {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("*")
    .eq("id", id)
    .single();

  throwIfError(error);
  return data as Tarea;
};

export const createTarea = async (
  tarea: TareaFormData
): Promise<Tarea> => {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .insert([tarea])
    .select()
    .single();

  throwIfError(error);
  return data as Tarea;
};

export const updateTarea = async (
  id: number,
  tarea: TareaFormData
): Promise<Tarea> => {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update(tarea)
    .eq("id", id)
    .select()
    .single();

  throwIfError(error);
  return data as Tarea;
};

export const deleteTarea = async (
  id: number
): Promise<void> => {
  const { error } = await supabase
    .from(TABLE_NAME)
    .delete()
    .eq("id", id);

  throwIfError(error);
};
