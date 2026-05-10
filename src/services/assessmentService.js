import { supabase } from "../lib/supabase";

export const saveAssessment = async (
  payload
) => {
  const { data, error } = await supabase
    .from("assessments")
    .insert([payload]);

  if (error) {
    throw error;
  }

  return data;
};