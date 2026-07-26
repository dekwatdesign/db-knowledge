# `moph_phr_transfer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vnan | varchar(12) | NO | PRI |  |  |  |
| transfer_status | char(1) | YES | MUL | NULL |  |  |
| transfer_warning | text | YES |  | NULL |  |  |
| transfer_datetime | datetime | YES | MUL | NULL |  |  |
| cid | char(13) | YES |  | NULL |  |  |
| message_code | int(11) | YES |  | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| response_message | varchar(3000) | YES |  | NULL |  |  |
| phr_ok | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_transfer_datetime | transfer_datetime | no | 1 |
| ix_transfer_status | transfer_status | no | 1 |
| ix_vn_status | transfer_status | no | 1 |
| ix_vn_status | vnan | no | 2 |
| ix_vstdate | vstdate | no | 1 |
| PRIMARY | vnan | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vnan": "680000737",
    "transfer_status": "Y",
    "transfer_warning": "OK",
    "transfer_datetime": "2026-07-25 15:02:19",
    "cid": "1xxxxxxxxxxxx",
    "message_code": 200,
    "vstdate": "2025-06-18",
    "response_message": "{\"result\":{},\"MessageCode\":200,\"Message\":\"OK\",\"RequestTime\":\"2026-07-25T15:02:19.323Z\",\"EndpointIP\":\"\",\"EndpointPort\":17039,\"profiler\":[{\"running_task\":23},{\"patient.names\":5},{\"patient.telecoms\":192},{\"patient.addresses\":22},{\"patient.contacts\":3},{\"patient\":231},{\"check encounter\":101},{\"encounter_conditions_12251:680000737\":\"times : 159 count (new,old) : 0 / 1\"},{\"medications_12251:680000737\":3},{\"observations_12251:680000737\":2},{\"appointments_12251:680000737\":37},{\"patient.summarize.encounter_count\":0},{\"patient.summarize.encounter_distinct_count\":0},{\"patient.summarize.observation_count\":0},{\"patient.summarize\":0},{\"hospital_stat.update\":3}],\"processing_warning\":[],\"note\":\"Normal processing\",\"processing_time_ms\":625}",
    "phr_ok": "N"
  },
  {
    "vnan": "680000774",
    "transfer_status": "Y",
    "transfer_warning": "OK",
    "transfer_datetime": "2026-07-25 15:02:25",
    "cid": "1xxxxxxxxxxxx",
    "message_code": 200,
    "vstdate": "2025-06-18",
    "response_message": "{\"result\":{},\"MessageCode\":200,\"Message\":\"OK\",\"RequestTime\":\"2026-07-25T15:02:25.518Z\",\"EndpointIP\":\"\",\"EndpointPort\":17038,\"profiler\":[{\"running_task\":8},{\"patient.names\":2},{\"patient.telecoms\":4},{\"patient.addresses\":2},{\"patient.contacts\":1},{\"patient\":13},{\"check encounter\":2},{\"encounter_conditions_12251:680000774\":\"times : 107 count (new,old) : 0 / 1\"},{\"medications_12251:680000774\":1},{\"observations_12251:680000774\":1},{\"appointments_12251:680000774\":3},{\"patient.summarize.encounter_count\":0},{\"patient.summarize.encounter_distinct_count\":0},{\"patient.summarize.observation_count\":0},{\"patient.summarize\":0},{\"hospital_stat.update\":5}],\"processing_warning\":[],\"note\":\"Normal processing\",\"processing_time_ms\":167}",
    "phr_ok": "N"
  },
  {
    "vnan": "680000777",
    "transfer_status": "Y",
    "transfer_warning": "OK",
    "transfer_datetime": "2026-07-25 15:02:37",
    "cid": "1xxxxxxxxxxxx",
    "message_code": 200,
    "vstdate": "2025-06-18",
    "response_message": "{\"result\":{},\"MessageCode\":200,\"Message\":\"OK\",\"RequestTime\":\"2026-07-25T15:02:37.554Z\",\"EndpointIP\":\"\",\"EndpointPort\":17022,\"profiler\":[{\"running_task\":8},{\"patient.names\":2},{\"patient.telecoms\":4},{\"patient.addresses\":2},{\"patient.contacts\":2},{\"patient\":20},{\"check encounter\":313},{\"encounter_conditions_12251:680000777\":\"times : 104 count (new,old) : 0 / 1\"},{\"medications_12251:680000777\":1},{\"observations_12251:680000777\":1},{\"appointments_12251:680000777\":2},{\"patient.summarize.encounter_count\":0},{\"patient.summarize.encounter_distinct_count\":0},{\"patient.summarize.observation_count\":0},{\"patient.summarize\":0},{\"hospital_stat.update\":4}],\"processing_warning\":[],\"note\":\"Normal processing\",\"processing_time_ms\":476}",
    "phr_ok": "N"
  },
  {
    "vnan": "680000619",
    "transfer_status": "Y",
    "transfer_warning": "OK",
    "transfer_datetime": "2026-07-25 15:01:44",
    "cid": "1xxxxxxxxxxxx",
    "message_code": 200,
    "vstdate": "2025-06-16",
    "response_message": "{\"result\":{},\"MessageCode\":200,\"Message\":\"OK\",\"RequestTime\":\"2026-07-25T15:01:39.673Z\",\"EndpointIP\":\"\",\"EndpointPort\":17040,\"profiler\":[{\"running_task\":23},{\"patient.names\":1050},{\"patient.telecoms\":350},{\"patient.addresses\":976},{\"patient.contacts\":1},{\"patient\":2595},{\"check encounter\":5},{\"encounter_conditions_12251:680000619\":\"times : 610 count (new,old) : 0 / 2\"},{\"medications_12251:680000619\":256},{\"observations_12251:680000619\":211},{\"appointments_12251:680000619\":3},{\"patient.summarize.encounter_count\":0},{\"patient.summarize.encounter_distinct_count\":0},{\"patient.summarize.observation_count\":0},{\"patient.summarize\":0},{\"hospital_stat.update\":3}],\"processing_warning\":[],\"note\":\"Normal processing\",\"processing_time_ms\":4621}",
    "phr_ok": "N"
  },
  {
    "vnan": "680000730",
    "transfer_status": "Y",
    "transfer_warning": "OK",
    "transfer_datetime": "2026-07-25 15:02:13",
    "cid": "1xxxxxxxxxxxx",
    "message_code": 200,
    "vstdate": "2025-06-16",
    "response_message": "{\"result\":{},\"MessageCode\":200,\"Message\":\"OK\",\"RequestTime\":\"2026-07-25T15:02:12.626Z\",\"EndpointIP\":\"\",\"EndpointPort\":17015,\"profiler\":[{\"running_task\":14},{\"patient.names\":4},{\"patient.telecoms\":4},{\"patient.addresses\":6},{\"patient.contacts\":2},{\"patient\":20},{\"check encounter\":222},{\"encounter_conditions_12251:680000730\":\"times : 380 count (new,old) : 0 / 1\"},{\"medications_12251:680000730\":1},{\"observations_12251:680000730\":1},{\"appointments_12251:680000730\":3},{\"patient.summarize.encounter_count\":0},{\"patient.summarize.encounter_distinct_count\":0},{\"patient.summarize.observation_count\":0},{\"patient.summarize\":0},{\"hospital_stat.update\":3}],\"processing_warning\":[],\"note\":\"Normal processing\",\"processing_time_ms\":973}",
    "phr_ok": "N"
  },
  {
    "vnan": "680000732",
    "transfer_status": "Y",
    "transfer_warning": "OK",
    "transfer_datetime": "2026-07-25 15:02:56",
    "cid": "1xxxxxxxxxxxx",
    "message_code": 200,
    "vstdate": "2025-06-16",
    "response_message": "{\"result\":{},\"MessageCode\":200,\"Message\":\"OK\",\"RequestTime\":\"2026-07-25T15:02:54.374Z\",\"EndpointIP\":\"\",\"EndpointPort\":17020,\"profiler\":[{\"running_task\":16},{\"patient.names\":8},{\"patient.telecoms\":5},{\"patient.addresses\":3},{\"patient.contacts\":2},{\"patient\":237},{\"check encounter\":281},{\"encounter_conditions_12251:680000732\":\"times : 444 count (new,old) : 0 / 1\"},{\"medications_12251:680000732\":1},{\"observations_12251:680000732\":1},{\"appointments_12251:680000732\":121},{\"patient.summarize.encounter_count\":0},{\"patient.summarize.encounter_distinct_count\":0},{\"patient.summarize.observation_count\":0},{\"patient.summarize\":0},{\"hospital_stat.update\":4}],\"processing_warning\":[],\"note\":\"Normal processing\",\"processing_time_ms\":1912}",
    "phr_ok": "N"
  },
  {
    "vnan": "680000752",
    "transfer_status": "Y",
    "transfer_warning": "OK",
    "transfer_datetime": "2026-07-25 15:03:09",
    "cid": "1xxxxxxxxxxxx",
    "message_code": 200,
    "vstdate": "2025-06-16",
    "response_message": "{\"result\":{},\"MessageCode\":200,\"Message\":\"OK\",\"RequestTime\":\"2026-07-25T15:03:08.901Z\",\"EndpointIP\":\"\",\"EndpointPort\":17044,\"profiler\":[{\"running_task\":9},{\"patient.names\":3},{\"patient.telecoms\":4},{\"patient.addresses\":3},{\"patient.contacts\":1},{\"patient\":15},{\"check encounter\":420},{\"encounter_conditions_12251:680000752\":\"times : 186 count (new,old) : 0 / 1\"},{\"medications_12251:680000752\":250},{\"observations_12251:680000752\":1},{\"appointments_12251:680000752\":3},{\"patient.summarize.encounter_count\":0},{\"patient.summarize.encounter_distinct_count\":0},{\"patient.summarize.observation_count\":0},{\"patient.summarize\":0},{\"hospital_stat.update\":4}],\"processing_warning\":[],\"note\":\"Normal processing\",\"processing_time_ms\":1264}",
    "phr_ok": "N"
  },
  {
    "vnan": "680000792",
    "transfer_status": "Y",
    "transfer_warning": "OK",
    "transfer_datetime": "2026-07-25 15:03:16",
    "cid": "1xxxxxxxxxxxx",
    "message_code": 200,
    "vstdate": "2025-06-16",
    "response_message": "{\"result\":{},\"MessageCode\":200,\"Message\":\"OK\",\"RequestTime\":\"2026-07-25T15:03:16.045Z\",\"EndpointIP\":\"\",\"EndpointPort\":17008,\"profiler\":[{\"running_task\":8},{\"patient.names\":3},{\"patient.telecoms\":5},{\"patient.addresses\":3},{\"patient.contacts\":1},{\"patient\":15},{\"check encounter\":143},{\"encounter_conditions_12251:680000792\":\"times : 166 count (new,old) : 0 / 1\"},{\"medications_12251:680000792\":1},{\"observations_12251:680000792\":1},{\"appointments_12251:680000792\":251},{\"patient.summarize.encounter_count\":0},{\"patient.summarize.encounter_distinct_count\":0},{\"patient.summarize.observation_count\":0},{\"patient.summarize\":0},{\"hospital_stat.update\":3}],\"processing_warning\":[],\"note\":\"Normal processing\",\"processing_time_ms\":677}",
    "phr_ok": "N"
  }
]
```
