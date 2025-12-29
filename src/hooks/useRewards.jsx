import { useEffect, useState, useCallback } from "react";
import { supabase } from "../lib/supabase";

export const useRewards = (userId) => {
  const [rewards, setRewards] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchRewards = useCallback(async () => {
    if (!userId) return;

    setLoading(true);

    const { data, error } = await supabase
      .from("profiles")
      .select("daily_streak, points")
      .eq("id", userId)
      .single();

    if (!error) setRewards(data);

    setLoading(false);
  }, [userId]);

  useEffect(() => {
    fetchRewards();
  }, [fetchRewards]);

  return { rewards, loading, refreshRewards: fetchRewards };
};
