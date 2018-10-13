This app is made to display information from the public SpaceX API.

https://api.spacexdata.com/v3/dragons/dragon1

https://documenter.getpostman.com/view/2025350/RWaEzAiG#4376c913-2589-4afd-a5f2-80ab8adc3fd0

https://api.spacexdata.com/v3/launches

{
  "flight_number": 68,
  "mission_name": "Telstar 18V",
  "mission_id": [
    "F4F83DE"
  ],
  "launch_year": "2018",
  "launch_date_unix": 1536554700,
  "launch_date_utc": "2018-09-10T04:45:00.000Z",
  "launch_date_local": "2018-09-10T00:45:00-04:00",
  "is_tentative": false,
  "tentative_max_precision": "hour",
  "rocket": {
    "rocket_id": "falcon9",
    "rocket_name": "Falcon 9",
    "rocket_type": "FT",
    "first_stage": {
      "cores": [
        {
          "core_serial": "B1049",
          "flight": 1,
          "block": 5,
          "reused": false,
          "land_success": true,
          "landing_intent": true,
          "landing_type": "ASDS",
          "landing_vehicle": "OCISLY"
        }
      ]
    },
    "second_stage": {
      "block": 5,
      "payloads": [
        {
          "payload_id": "Telstar 18V",
          "norad_id": [
            43611
          ],
          "reused": false,
          "customers": [
            "Telesat"
          ],
          "nationality": "Canada",
          "manufacturer": "SSL",
          "payload_type": "Satellite",
          "payload_mass_kg": 7060,
          "payload_mass_lbs": 15564.64,
          "orbit": "GTO",
          "orbit_params": {
            "reference_system": "geocentric",
            "regime": "geostationary",
            "longitude": 138,
            "semi_major_axis_km": 7226.647,
            "eccentricity": 0.0013608,
            "periapsis_km": 838.677,
            "apoapsis_km": 858.346,
            "inclination_deg": 98.8086,
            "period_min": 101.897,
            "lifespan_years": 15,
            "epoch": "2018-09-07T06:29:40.000Z",
            "mean_motion": 14.13180055,
            "raan": 322.194,
            "arg_of_pericenter": 130.3173,
            "mean_anomaly": 328.1487
          }
        }
      ]
    },
    "fairings": {
      "reused": false,
      "recovery_attempt": false,
      "recovered": false,
      "ship": null
    }
  },
  "ships": [
    "OCISLY",
    "HAWK",
    "GOQUEST"
  ],
  "telemetry": {
    "flight_club": "https://www.flightclub.io/result/2d?code=T18V"
  },
  "launch_site": {
    "site_id": "ccafs_slc_40",
    "site_name": "CCAFS SLC 40",
    "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
  },
  "launch_success": true,
  "links": {
    "mission_patch": "https://images2.imgbox.com/ba/db/3plcm5IB_o.png",
    "mission_patch_small": "https://images2.imgbox.com/2d/d2/jStsqeLC_o.png",
    "reddit_campaign": "https://www.reddit.com/r/spacex/comments/95cte4/telstar_18v_apstar_5c_launch_campaign_thread/",
    "reddit_launch": "https://www.reddit.com/r/spacex/comments/9e7bmq/rspacex_telstar_18v_official_launch_discussion/",
    "reddit_recovery": "https://www.reddit.com/r/spacex/comments/9erxlh/telstar_18_vantage_recovery_thread/",
    "reddit_media": "https://www.reddit.com/r/spacex/comments/9ebkqw/rspacex_telstar_18v_media_thread_videos_images/",
    "presskit": "https://www.spacex.com/sites/spacex/files/telstar18vantagepresskit.pdf",
    "article_link": "https://spaceflightnow.com/2018/09/10/spacex-telesat-achieve-repeat-success-with-midnight-hour-launch/",
    "wikipedia": "https://en.wikipedia.org/wiki/Telstar_18V",
    "video_link": "https://www.youtube.com/watch?v=Apw3xqwsG1U",
    "flickr_images": [
      "https://farm2.staticflickr.com/1878/43690848045_492ef182dd_o.jpg",
      "https://farm2.staticflickr.com/1856/43881229604_6d42e838b6_o.jpg",
      "https://farm2.staticflickr.com/1852/43881223704_93777e34af_o.jpg",
      "https://farm2.staticflickr.com/1841/43881217094_558b7b214e_o.jpg",
      "https://farm2.staticflickr.com/1869/43881193934_423eff8c86_o.jpg"
    ]
  },
  "details": "SpaceX's sixteenth flight of 2018 launched the Telstar 18v GEO communication satellite for Telesat, the second launch for the canadian company in a few months. The first stage was a new Falcon 9 V1.2 Block 5 which was successfully recovered on OCISLY.",
  "upcoming": false,
  "static_fire_date_utc": "2018-09-05T07:21:00.000Z",
  "static_fire_date_unix": 1536132060
}

Bootstrapped using CRA.
