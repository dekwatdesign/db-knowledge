# `ipt_pregnancy_service_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_pregnancy_service_type_id | int(11) | NO | PRI | 0 |  |  |
| ipt_pregnancy_service_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ipt_pregnancy_service_type_name | ipt_pregnancy_service_type_name | yes | 1 |
| PRIMARY | ipt_pregnancy_service_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipt_pregnancy_service_type_id": 1,
    "ipt_pregnancy_service_type_name": "Service",
    "hos_guid": null
  },
  {
    "ipt_pregnancy_service_type_id": 2,
    "ipt_pregnancy_service_type_name": "Special",
    "hos_guid": null
  },
  {
    "ipt_pregnancy_service_type_id": 3,
    "ipt_pregnancy_service_type_name": "Refer - รพ. พระสังฆราชองค์ที่ 17",
    "hos_guid": null
  },
  {
    "ipt_pregnancy_service_type_id": 4,
    "ipt_pregnancy_service_type_name": "Refer - รพ. บางปลาม้า",
    "hos_guid": null
  },
  {
    "ipt_pregnancy_service_type_id": 5,
    "ipt_pregnancy_service_type_name": "Refer - รพ. อู่ทอง",
    "hos_guid": null
  },
  {
    "ipt_pregnancy_service_type_id": 6,
    "ipt_pregnancy_service_type_name": "Refer - รพ. ดอนเจดีย์",
    "hos_guid": null
  },
  {
    "ipt_pregnancy_service_type_id": 7,
    "ipt_pregnancy_service_type_name": "Refer - รพ. ศรีประจันต์",
    "hos_guid": null
  },
  {
    "ipt_pregnancy_service_type_id": 8,
    "ipt_pregnancy_service_type_name": "Refer - รพ. สามชุก",
    "hos_guid": null
  }
]
```
