exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const SCRIPT_URL = 'https://script.google.com/a/macros/brasilbitcoin.com.br/s/AKfycbzJbmbnX0b6qfAkaiD4b21_iC_9JJv-y44D1Rh65lTz8w_rI6hCGgAfaDxh4WOKXguJHg/exec';

  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: event.body,
      redirect: 'follow'
    });

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ status: 'ok' })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: 'erro', msg: err.message })
    };
  }
};
