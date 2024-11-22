import { supabase } from "../components/Client";

export async function getCardData(eInternacional, setCardData) {
  try {
    let { data: pacotes, error } = await supabase
      .from("pacotes")
      .select("*")
      .eq("Internacional", eInternacional);

    if (error) throw error;
    setCardData(pacotes || []); // Garante que sempre será um array
  } catch (error) {
    console.error("Erro ao carregar pacotes:", error);
    alert("Erro ao carregar pacotes: " + error.message);
  }
}

export function resetPage() {
  window.location.reload();
}

function sanitizeFileName(fileName) {
  return fileName
    .toLowerCase()
    .replace(/[^a-z0-9.]/g, "_")
    .replace(/_+/g, "_");
}

export async function insertCardData(item) {
  try {
    let imageUrl = item.imagem; // Presume que imagem já seja uma URL ou estará vazia

    // Verifica e faz upload da imagem
    if (item.imagem && item.imagem instanceof File) {
      const sanitizedFileName = sanitizeFileName(
        `${Math.random()
          .toString(36)
          .substring(2, 15)}-${Date.now()}.${item.imagem.name.split(".").pop()}`
      );
      const { error: uploadError } = await supabase.storage
        .from("imagens")
        .upload(`pacotes/${sanitizedFileName}`, item.imagem);

      if (uploadError) {
        console.error("Erro ao fazer upload da imagem:", uploadError);
        throw uploadError;
      }

      // Obtém URL pública
      imageUrl = supabase.storage
        .from("imagens")
        .getPublicUrl(`pacotes/${sanitizedFileName}`).data?.publicUrl;
      console.log(imageUrl);
    }

    // Insere os dados no banco
    const { data, error } = await supabase.from("pacotes").insert([
      {
        Pacote: item.pacote,
        Destino: item.destino,
        Valor: item.valor,
        Internacional: !!item.internacional, // Garante valor booleano
        imagen: imageUrl, // URL da imagem ou vazio
      },
    ]);

    if (error) throw error;

    console.log("Dados inseridos com sucesso:", data);
    // Redirecionando após a inserção bem-sucedida

    return data;
  } catch (error) {
    console.error("Erro na função insertCardData:", error);
    alert("Erro ao inserir dados: " + error.message);
    return null;
  }
}

export async function deleteData(Pacoteid) {
  try {
    const { data, error } = await supabase
      .from("pacotes") // Verifique o nome exato da tabela no Supabase
      .delete()
      .eq("id", Pacoteid);
    resetPage();

    if (error) {
      console.error("Erro ao deletar:", error.message);
      alert("Erro ao deletar pacote.");
      return;
    }

    alert("Pacote deletado com sucesso!");
    console.log("Dados deletados:", data);
  } catch (error) {
    console.error("Erro inesperado:", error);
  }
}
