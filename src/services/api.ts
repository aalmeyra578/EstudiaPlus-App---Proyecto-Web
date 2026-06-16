import { supabase } from "@/lib/supabase";
import type {
  Apunte,
  ApunteFormData,
  Tarea,
  TareaFormData,
} from "@/types/entities";

// TAREAS
export const getTareas = async (): Promise<Tarea[]> => {
  const { data, error } = await supabase
    .from("tareas")
    .select("*")
    .order("id");

  if (error) throw error;

  return data as Tarea[];
};

export const getTarea = async (id: number): Promise<Tarea> => {
  const { data, error } = await supabase
    .from("tareas")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data as Tarea;
};

export const createTarea = async (
  tarea: TareaFormData
): Promise<Tarea> => {
  const { data, error } = await supabase
    .from("tareas")
    .insert([tarea])
    .select()
    .single();

  if (error) throw error;

  return data as Tarea;
};

export const updateTarea = async (
  id: number,
  tarea: TareaFormData
): Promise<Tarea> => {
  const { data, error } = await supabase
    .from("tareas")
    .update(tarea)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data as Tarea;
};

export const deleteTarea = async (
  id: number
): Promise<void> => {
  const { error } = await supabase
    .from("tareas")
    .delete()
    .eq("id", id);

  if (error) throw error;
};

// APUNTES

export const getApuntes = async (): Promise<Apunte[]> => {
  const { data, error } = await supabase
    .from("apuntes")
    .select("*")
    .order("id");

  if (error) throw error;

  return data as Apunte[];
};

export const getApunte = async (
  id: number
): Promise<Apunte> => {
  const { data, error } = await supabase
    .from("apuntes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data as Apunte;
};

export const createApunte = async (
  apunte: ApunteFormData
): Promise<Apunte> => {
  const { data, error } = await supabase
    .from("apuntes")
    .insert([apunte])
    .select()
    .single();

  if (error) throw error;

  return data as Apunte;
};

export const updateApunte = async (
  id: number,
  apunte: ApunteFormData
): Promise<Apunte> => {
  const { data, error } = await supabase
    .from("apuntes")
    .update(apunte)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data as Apunte;
};

export const deleteApunte = async (
  id: number
): Promise<void> => {
  const { error } = await supabase
    .from("apuntes")
    .delete()
    .eq("id", id);

  if (error) throw error;
};
