# `psychiatric_doctor_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_doctor_screen_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_doctor_screen_date | date | YES |  | NULL |  |  |
| doctor | varchar(6) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| speech | char(1) | YES |  | NULL |  |  |
| speech_ab | char(1) | YES |  | NULL |  |  |
| speech_text | varchar(150) | YES |  | NULL |  |  |
| mood | char(1) | YES |  | NULL |  |  |
| mood_ab | char(1) | YES |  | NULL |  |  |
| mood_text | varchar(150) | YES |  | NULL |  |  |
| thought | char(1) | YES |  | NULL |  |  |
| thought_ab | char(1) | YES |  | NULL |  |  |
| thought_text | varchar(150) | YES |  | NULL |  |  |
| perception | char(1) | YES |  | NULL |  |  |
| perception_ab | char(1) | YES |  | NULL |  |  |
| perception_text | varchar(150) | YES |  | NULL |  |  |
| insight | char(1) | YES |  | NULL |  |  |
| insight_ab | char(1) | YES |  | NULL |  |  |
| insight_text | varchar(150) | YES |  | NULL |  |  |
| sensorium | char(1) | YES |  | NULL |  |  |
| sensorium_ab | char(1) | YES |  | NULL |  |  |
| sensorium_text | varchar(150) | YES |  | NULL |  |  |
| ga_text | varchar(150) | YES |  | NULL |  |  |
| cognition | char(1) | YES |  | NULL |  |  |
| cognition_ab | char(1) | YES |  | NULL |  |  |
| cognition_text | varchar(150) | YES |  | NULL |  |  |
| orientation_time | char(1) | YES |  | NULL |  |  |
| orientation_time_ab | char(1) | YES |  | NULL |  |  |
| orientation_time_text | varchar(150) | YES |  | NULL |  |  |
| orientation_place | char(1) | YES |  | NULL |  |  |
| orientation_place_ab | char(1) | YES |  | NULL |  |  |
| orientation_place_text | varchar(150) | YES |  | NULL |  |  |
| orientation_person | char(1) | YES |  | NULL |  |  |
| orientation_person_ab | char(1) | YES |  | NULL |  |  |
| orientation_person_text | varchar(150) | YES |  | NULL |  |  |
| late_recall | char(1) | YES |  | NULL |  |  |
| late_recall_ab | char(1) | YES |  | NULL |  |  |
| late_recall_text | varchar(150) | YES |  | NULL |  |  |
| recent_memory | char(1) | YES |  | NULL |  |  |
| recent_memory_ab | char(1) | YES |  | NULL |  |  |
| recent_memory_text | varchar(150) | YES |  | NULL |  |  |
| remote_memory | char(1) | YES |  | NULL |  |  |
| remote_memory_ab | char(1) | YES |  | NULL |  |  |
| remote_memory_text | varchar(150) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_doctor_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "psychiatric_doctor_screen_id": 2,
    "psychiatric_doctor_screen_date": "2021-01-18",
    "doctor": "318",
    "hn": "600000700",
    "vn": "640118084815",
    "an": "",
    "speech": "Y",
    "speech_ab": "N",
    "speech_text": null,
    "mood": "Y",
    "mood_ab": "N",
    "mood_text": null,
    "thought": "Y",
    "thought_ab": "N",
    "thought_text": null,
    "perception": "Y",
    "perception_ab": "N",
    "perception_text": null,
    "insight": "Y",
    "insight_ab": "N",
    "insight_text": null,
    "sensorium": "Y",
    "sensorium_ab": "N",
    "sensorium_text": null,
    "ga_text": null,
    "cognition": "Y",
    "cognition_ab": "N",
    "cognition_text": null,
    "orientation_time": "Y",
    "orientation_time_ab": "N",
    "orientation_time_text": null,
    "orientation_place": "Y",
    "orientation_place_ab": "N",
    "orientation_place_text": null,
    "orientation_person": "Y",
    "orientation_person_ab": "N",
    "orientation_person_text": null,
    "late_recall": "Y",
    "late_recall_ab": "N",
    "late_recall_text": null,
    "recent_memory": "Y",
    "recent_memory_ab": "N",
    "recent_memory_text": null,
    "remote_memory": "Y",
    "remote_memory_ab": "N",
    "remote_memory_text": null,
    "hos_guid": null
  },
  {
    "psychiatric_doctor_screen_id": 3,
    "psychiatric_doctor_screen_date": "2021-01-21",
    "doctor": "318",
    "hn": "600001204",
    "vn": "640121090012",
    "an": "",
    "speech": "Y",
    "speech_ab": "N",
    "speech_text": null,
    "mood": "Y",
    "mood_ab": "N",
    "mood_text": null,
    "thought": "Y",
    "thought_ab": "N",
    "thought_text": null,
    "perception": "Y",
    "perception_ab": "N",
    "perception_text": null,
    "insight": "Y",
    "insight_ab": "N",
    "insight_text": null,
    "sensorium": "Y",
    "sensorium_ab": "N",
    "sensorium_text": null,
    "ga_text": "fidget",
    "cognition": "Y",
    "cognition_ab": "N",
    "cognition_text": null,
    "orientation_time": "Y",
    "orientation_time_ab": "N",
    "orientation_time_text": null,
    "orientation_place": "Y",
    "orientation_place_ab": "N",
    "orientation_place_text": null,
    "orientation_person": "Y",
    "orientation_person_ab": "N",
    "orientation_person_text": null,
    "late_recall": "Y",
    "late_recall_ab": "N",
    "late_recall_text": null,
    "recent_memory": "Y",
    "recent_memory_ab": "N",
    "recent_memory_text": null,
    "remote_memory": "Y",
    "remote_memory_ab": "N",
    "remote_memory_text": null,
    "hos_guid": null
  },
  {
    "psychiatric_doctor_screen_id": 4,
    "psychiatric_doctor_screen_date": "2021-08-31",
    "doctor": "318",
    "hn": "640000156",
    "vn": "640831083000",
    "an": "",
    "speech": "Y",
    "speech_ab": "N",
    "speech_text": null,
    "mood": "Y",
    "mood_ab": "N",
    "mood_text": null,
    "thought": "Y",
    "thought_ab": "N",
    "thought_text": null,
    "perception": "Y",
    "perception_ab": "N",
    "perception_text": null,
    "insight": "Y",
    "insight_ab": "N",
    "insight_text": null,
    "sensorium": "Y",
    "sensorium_ab": "N",
    "sensorium_text": null,
    "ga_text": null,
    "cognition": "Y",
    "cognition_ab": "N",
    "cognition_text": null,
    "orientation_time": "Y",
    "orientation_time_ab": "N",
    "orientation_time_text": null,
    "orientation_place": "Y",
    "orientation_place_ab": "N",
    "orientation_place_text": null,
    "orientation_person": "Y",
    "orientation_person_ab": "N",
    "orientation_person_text": null,
    "late_recall": "Y",
    "late_recall_ab": "N",
    "late_recall_text": null,
    "recent_memory": "Y",
    "recent_memory_ab": "N",
    "recent_memory_text": null,
    "remote_memory": "Y",
    "remote_memory_ab": "N",
    "remote_memory_text": null,
    "hos_guid": null
  },
  {
    "psychiatric_doctor_screen_id": 5,
    "psychiatric_doctor_screen_date": "2021-08-31",
    "doctor": "318",
    "hn": "600001116",
    "vn": "640831093001",
    "an": "",
    "speech": "Y",
    "speech_ab": "N",
    "speech_text": null,
    "mood": "Y",
    "mood_ab": "N",
    "mood_text": null,
    "thought": "Y",
    "thought_ab": "N",
    "thought_text": null,
    "perception": "Y",
    "perception_ab": "N",
    "perception_text": null,
    "insight": "Y",
    "insight_ab": "N",
    "insight_text": null,
    "sensorium": "Y",
    "sensorium_ab": "N",
    "sensorium_text": null,
    "ga_text": null,
    "cognition": "Y",
    "cognition_ab": "N",
    "cognition_text": null,
    "orientation_time": "Y",
    "orientation_time_ab": "N",
    "orientation_time_text": null,
    "orientation_place": "Y",
    "orientation_place_ab": "N",
    "orientation_place_text": null,
    "orientation_person": "Y",
    "orientation_person_ab": "N",
    "orientation_person_text": null,
    "late_recall": "Y",
    "late_recall_ab": "N",
    "late_recall_text": null,
    "recent_memory": "Y",
    "recent_memory_ab": "N",
    "recent_memory_text": null,
    "remote_memory": "Y",
    "remote_memory_ab": "N",
    "remote_memory_text": null,
    "hos_guid": null
  },
  {
    "psychiatric_doctor_screen_id": 6,
    "psychiatric_doctor_screen_date": "2021-08-31",
    "doctor": "318",
    "hn": "610000124",
    "vn": "640831093004",
    "an": "",
    "speech": "Y",
    "speech_ab": "N",
    "speech_text": null,
    "mood": "N",
    "mood_ab": "Y",
    "mood_text": "mild depress",
    "thought": "Y",
    "thought_ab": "N",
    "thought_text": null,
    "perception": "Y",
    "perception_ab": "N",
    "perception_text": null,
    "insight": "Y",
    "insight_ab": "N",
    "insight_text": null,
    "sensorium": "Y",
    "sensorium_ab": "N",
    "sensorium_text": null,
    "ga_text": null,
    "cognition": "Y",
    "cognition_ab": "N",
    "cognition_text": null,
    "orientation_time": "Y",
    "orientation_time_ab": "N",
    "orientation_time_text": null,
    "orientation_place": "Y",
    "orientation_place_ab": "N",
    "orientation_place_text": null,
    "orientation_person": "Y",
    "orientation_person_ab": "N",
    "orientation_person_text": null,
    "late_recall": "Y",
    "late_recall_ab": "N",
    "late_recall_text": null,
    "recent_memory": "Y",
    "recent_memory_ab": "N",
    "recent_memory_text": null,
    "remote_memory": "Y",
    "remote_memory_ab": "N",
    "remote_memory_text": null,
    "hos_guid": null
  },
  {
    "psychiatric_doctor_screen_id": 7,
    "psychiatric_doctor_screen_date": "2021-08-31",
    "doctor": "318",
    "hn": "600001508",
    "vn": "640831093005",
    "an": "",
    "speech": "Y",
    "speech_ab": "N",
    "speech_text": null,
    "mood": "Y",
    "mood_ab": "N",
    "mood_text": null,
    "thought": "Y",
    "thought_ab": "N",
    "thought_text": null,
    "perception": "Y",
    "perception_ab": "N",
    "perception_text": null,
    "insight": "Y",
    "insight_ab": "N",
    "insight_text": null,
    "sensorium": "Y",
    "sensorium_ab": "N",
    "sensorium_text": null,
    "ga_text": null,
    "cognition": "Y",
    "cognition_ab": "N",
    "cognition_text": null,
    "orientation_time": "Y",
    "orientation_time_ab": "N",
    "orientation_time_text": null,
    "orientation_place": "Y",
    "orientation_place_ab": "N",
    "orientation_place_text": null,
    "orientation_person": "Y",
    "orientation_person_ab": "N",
    "orientation_person_text": null,
    "late_recall": "Y",
    "late_recall_ab": "N",
    "late_recall_text": null,
    "recent_memory": "Y",
    "recent_memory_ab": "N",
    "recent_memory_text": null,
    "remote_memory": "Y",
    "remote_memory_ab": "N",
    "remote_memory_text": null,
    "hos_guid": null
  },
  {
    "psychiatric_doctor_screen_id": 10,
    "psychiatric_doctor_screen_date": "2022-11-11",
    "doctor": "335",
    "hn": "650005917",
    "vn": "651111093036",
    "an": "",
    "speech": null,
    "speech_ab": null,
    "speech_text": "mute",
    "mood": null,
    "mood_ab": null,
    "mood_text": "euthymia",
    "thought": "Y",
    "thought_ab": "N",
    "thought_text": null,
    "perception": "Y",
    "perception_ab": "N",
    "perception_text": null,
    "insight": "Y",
    "insight_ab": "N",
    "insight_text": null,
    "sensorium": "Y",
    "sensorium_ab": "N",
    "sensorium_text": null,
    "ga_text": "fidgety",
    "cognition": "Y",
    "cognition_ab": "N",
    "cognition_text": null,
    "orientation_time": "Y",
    "orientation_time_ab": "N",
    "orientation_time_text": null,
    "orientation_place": "Y",
    "orientation_place_ab": "N",
    "orientation_place_text": null,
    "orientation_person": "Y",
    "orientation_person_ab": "N",
    "orientation_person_text": null,
    "late_recall": "Y",
    "late_recall_ab": "N",
    "late_recall_text": null,
    "recent_memory": "Y",
    "recent_memory_ab": "N",
    "recent_memory_text": null,
    "remote_memory": "Y",
    "remote_memory_ab": "N",
    "remote_memory_text": null,
    "hos_guid": null
  }
]
```
