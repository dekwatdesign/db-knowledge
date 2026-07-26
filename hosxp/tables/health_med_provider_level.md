# `health_med_provider_level`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_provider_level_id | int(11) | NO | PRI | 0 |  |  |
| health_med_provider_level_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_provider_level_name | health_med_provider_level_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | health_med_provider_level_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "health_med_provider_level_id": 1,
    "health_med_provider_level_name": "ระดับดีมาก",
    "hos_guid": null
  },
  {
    "health_med_provider_level_id": 2,
    "health_med_provider_level_name": "ระดับดี",
    "hos_guid": null
  },
  {
    "health_med_provider_level_id": 3,
    "health_med_provider_level_name": "ระดับผ่านเกณฑ์",
    "hos_guid": null
  },
  {
    "health_med_provider_level_id": 4,
    "health_med_provider_level_name": "ไม่ผ่านเกณฑ์",
    "hos_guid": null
  },
  {
    "health_med_provider_level_id": 5,
    "health_med_provider_level_name": "ไม่ประเมิน",
    "hos_guid": null
  }
]
```
