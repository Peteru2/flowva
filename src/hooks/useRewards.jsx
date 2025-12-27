import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
export const useRewards = (userId) => {
  const [rewards, setRewards] = useState(null);

  useEffect(() => {
    if (!userId) return;

    supabase
      .from("profiles")
      .select("points, daily_streak, last_checkin")
      .eq("id", userId)
      .single()
      .then(({ data }) => setRewards(data));
  }, [userId]);

  return rewards;
};
