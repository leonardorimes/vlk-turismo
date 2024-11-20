import { supabase } from "../components/Client";

export async function getCardData(eInternacional, setCardData) {
  try {
    let { data: pacotes, error } = await supabase
      .from("pacotes")
      .select("*")
      .eq("Internacional", eInternacional);
    console.log(pacotes);
    if (error) throw error;
    setCardData(pacotes || []); // Garante que sempre será um array
  } catch (error) {
    alert("Erro ao carregar pacotes: " + error.message);
  }
}
