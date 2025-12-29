import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rewards, setRewards] = useState(null);


  
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data?.session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();

   
  }, []);

const fetchRewards = async (userId) => {
  if (!userId) return;

  const { data } = await supabase
    .from("profiles")
    .select("points, daily_streak")
    .eq("id", userId)
    .single();

  setRewards(data);
};

useEffect(() => {
  if (user?.id) {
    fetchRewards(user.id);
  }
}, [user?.id]);



  const logout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    setUser(null);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ 
                                    user, 
                                    loading, 
                                    rewards,
                                    refreshRewards: () => fetchRewards(user?.id),
                                    logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
