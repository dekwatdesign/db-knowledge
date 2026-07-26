# `elder_health_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| elder_health_service_id | int(11) | NO | PRI | 0 |  |  |
| elder_health_service_name | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | elder_health_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "elder_health_service_id": 1,
    "elder_health_service_name": "โรงพยาบาลของรัฐ",
    "hos_guid": null
  },
  {
    "elder_health_service_id": 2,
    "elder_health_service_name": "รพสต./สอ.",
    "hos_guid": null
  },
  {
    "elder_health_service_id": 3,
    "elder_health_service_name": "ศูนย์สุขภาพชุมชน",
    "hos_guid": null
  },
  {
    "elder_health_service_id": 4,
    "elder_health_service_name": "คลินิกโรงพยาบาลเอกชน",
    "hos_guid": null
  },
  {
    "elder_health_service_id": 5,
    "elder_health_service_name": "ซื้อยากินเอง เพราะเดินทางลำบาก",
    "hos_guid": null
  },
  {
    "elder_health_service_id": 6,
    "elder_health_service_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
