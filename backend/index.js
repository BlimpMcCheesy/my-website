require('dotenv').config();
const express = require('express');
const app = express();

const {
  STRAVA_CLIENT_ID,
  STRAVA_CLIENT_SECRET,
  STRAVA_REFRESH_TOKEN,
  PORT = 5001,
} = process.env;

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('API server running');
});

async function refreshAccessToken() {
  const response = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: STRAVA_CLIENT_ID,
      client_secret: STRAVA_CLIENT_SECRET,
      grant_type: 'refresh_token',
      refresh_token: STRAVA_REFRESH_TOKEN,
    }),
  });
  const data = await response.json();
  return data.access_token;
}

app.get('/strava/profile', async (req, res) => {
  try {
    const accessToken = await refreshAccessToken();
    console.log('Access Token:', accessToken);

    const profileRes = await fetch('https://www.strava.com/api/v3/athlete', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    console.log('Profile response status:', profileRes.status);

    if (!profileRes.ok) {
      const errorText = await profileRes.text();
      console.error('Strava API error:', profileRes.status, errorText);
      return res.status(profileRes.status).json({ error: errorText });
    }

    const profile = await profileRes.json();
    console.log('Profile:', profile);
    res.json(profile);
  } catch (error) {
    console.error('Error fetching Strava profile:', error);
    res.status(500).json({ error: 'Failed to fetch Strava profile' });
  }
});

app.get('/strava/stats', async (req, res) => {
  try {
    const accessToken = await refreshAccessToken();

    // First get the athlete profile to retrieve athlete ID
    const profileRes = await fetch('https://www.strava.com/api/v3/athlete', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!profileRes.ok) {
      const errorText = await profileRes.text();
      console.error('Error fetching profile for stats:', errorText);
      return res.status(profileRes.status).json({ error: errorText });
    }
    const profile = await profileRes.json();

    const statsRes = await fetch(`https://www.strava.com/api/v3/athletes/${profile.id}/stats`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!statsRes.ok) {
      const errorText = await statsRes.text();
      console.error('Strava API error (stats):', statsRes.status, errorText);
      return res.status(statsRes.status).json({ error: errorText });
    }

    const stats = await statsRes.json();
    res.json(stats);
  } catch (error) {
    console.error('Error fetching Strava stats:', error);
    res.status(500).json({ error: 'Failed to fetch Strava stats' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
