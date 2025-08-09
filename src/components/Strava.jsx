import React, { useEffect, useState } from 'react';
import './Strava.css';

export default function StravaCard() {
  const [profile, setProfile] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const profileRes = await fetch('/strava/profile');
        const profileData = await profileRes.json();

        const statsRes = await fetch('/strava/stats');
        const statsData = await statsRes.json();

        setProfile(profileData);
        setStats(statsData);
      } catch (error) {
        console.error('Error fetching Strava data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div className="preview-card strava">Loading...</div>;
  if (!profile || !stats) return <div className="preview-card strava">No data available</div>;

  const metersToMiles = (meters) => (meters / 1609.344).toFixed(1);
  const metersToFeet = (meters) => (meters * 3.28084).toFixed(0);
  const secondsToHoursMinutes = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    return `${h}h ${m}m`;
  };

  return (
    <div className="preview-card strava">
      <h3 className="strava-title">Strava</h3>
      <p>Have a Strava profile? Connect with me below.</p>
      <div className="strava-widget">
        <img
          src={profile.profile_medium}
          alt={`${profile.firstname} ${profile.lastname}`}
          className="strava-profile-pic"
        />

        <div className="strava-name">
            <a
                href={`https://www.strava.com/athletes/56725176`}
                target="_blank"
                rel="noopener noreferrer"
                className="strava-name-link"
            >
                {profile.firstname} {profile.lastname}
            </a>
        </div>

        <div className="strava-username">@{profile.username}</div>

        <div className="strava-stats">
          <div className="stat-item">
            <div className="stat-number">{stats.ytd_ride_totals.count}</div>
            <div className="stat-label">Rides</div>
            <div className="stat-distance">{metersToMiles(stats.ytd_ride_totals.distance)} mi</div>
            <div className="stat-extra">Time: {secondsToHoursMinutes(stats.ytd_ride_totals.moving_time)}</div>
            <div className="stat-extra">Elev: {metersToFeet(stats.ytd_ride_totals.elevation_gain)} ft</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">{stats.ytd_run_totals.count}</div>
            <div className="stat-label">Runs</div>
            <div className="stat-distance">{metersToMiles(stats.ytd_run_totals.distance)} mi</div>
            <div className="stat-extra">Time: {secondsToHoursMinutes(stats.ytd_run_totals.moving_time)}</div>
            <div className="stat-extra">Elev: {metersToFeet(stats.ytd_run_totals.elevation_gain)} ft</div>
          </div>

        </div>
      </div>

      <a
        href={`https://www.strava.com/athletes/56725176`}
        target="_blank"
        rel="noopener noreferrer"
        className="preview-link strava"
      >
        View on Strava
      </a>
    </div>
  );
}
