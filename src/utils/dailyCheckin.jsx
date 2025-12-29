import { supabase } from "../lib/supabase";
// import { useAuth } from "../context/AuthContext";


export const handleDailyCheckin = async (userId) => {


  if (!userId || typeof userId !== "string") {
    return { success: false, reason: "Invalid userId" };
  }

  try {
    const today = new Date().toISOString().split("T")[0];

    const { data: profile, error } = await supabase
      .from("profiles")
      .select("last_checkin, daily_streak, points")
      .eq("id", userId)
      .single(); // ⬅ MUST exist

    if (error) {
      return { success: false, reason: "Profile fetch failed", error };
    }

    if (profile.last_checkin === today) {
      return { success: true, status: "already_checked_in" };
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    const newStreak =
      profile.last_checkin === yesterdayStr
        ? profile.daily_streak + 1
        : 1;

    const { error: updateError } = await supabase
      .from("profiles")
      .update({
        last_checkin: today,
        daily_streak: newStreak,
        points: profile.points + 5,
      })
      .eq("id", userId);

    if (updateError) {
      return { success: false, reason: "Update failed", updateError };
    }

    return {
      success: true,
      status: "checked_in",
      points: 5,
      streak: newStreak,
    };
  } catch (err) {
    return { success: false, reason: "Unexpected error", err };
  }
};
