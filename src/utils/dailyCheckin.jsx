import { supabase } from "../lib/supabase";

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
      .maybeSingle();

    if (error) {
      return { success: false, reason: "Failed to fetch profile", error };
    }

    if (!profile) {
      const { error: insertError } = await supabase.from("profiles").insert({
        id: userId,
        last_checkin: today,
        daily_streak: 1,
        points: 5,
      });

      if (insertError) {
        return { success: false, reason: "Profile creation failed", insertError };
      }

      return { success: true, status: "first_checkin", points: 5 };
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
