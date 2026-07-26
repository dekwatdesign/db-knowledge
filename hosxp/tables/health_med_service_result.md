# `health_med_service_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_service_result_id | int(11) | NO | PRI | 0 |  |  |
| health_med_service_result_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_service_result_name | health_med_service_result_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | health_med_service_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "health_med_service_result_id": 1,
    "health_med_service_result_name": "นัดต่อเนื่อง",
    "hos_guid": null
  },
  {
    "health_med_service_result_id": 2,
    "health_med_service_result_name": "หาย",
    "hos_guid": null
  },
  {
    "health_med_service_result_id": 3,
    "health_med_service_result_name": "ดีขึ้น",
    "hos_guid": null
  },
  {
    "health_med_service_result_id": 4,
    "health_med_service_result_name": "ส่งต่อ",
    "hos_guid": null
  },
  {
    "health_med_service_result_id": 5,
    "health_med_service_result_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
