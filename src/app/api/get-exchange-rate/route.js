export async function GET(req, res) {
  if (req.method !== "GET") {
    return;
  }

  try {
    const response = await fetch(
      "http://api.nbp.pl/api/exchangerates/rates/A/usd/"
    );
    const currency = await response.json();

    return Response.json(currency);
  } catch (error) {
    console.log(error);
    return Response.error({ message: "Ups, something went wrong" });
  }
}
