const url = window.location.href;

function getAuthToken() {
  const objUrl = new URL(url);
  return objUrl.searchParams.get("code");
}

async function sendAuthToken(code) {
  const apiUrl = "https://localhost:8000/api/youtube-callback";
  const data = JSON.stringify({ code });

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    console.log("Success:", responseData);
  } catch (error) {
    console.error("Error:", error);
  }
}

const code = getAuthToken();

if (code) {
  sendAuthToken(code);
} else {
  console.log("No auth token found in URL");
}
