# `cancer_visit_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_visit_type_id | int(11) | NO | PRI | 0 |  |  |
| cancer_visit_type_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_visit_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cancer_visit_type_id": 1,
    "cancer_visit_type_name": "ผู้ป่วยรายใหม่ WARD",
    "hos_guid": null
  },
  {
    "cancer_visit_type_id": 2,
    "cancer_visit_type_name": "ผู้ป่วยรายใหม่ OPD",
    "hos_guid": null
  },
  {
    "cancer_visit_type_id": 3,
    "cancer_visit_type_name": "ผู้ป่วยเก่ากลับมาฉายแสง WARD",
    "hos_guid": null
  },
  {
    "cancer_visit_type_id": 4,
    "cancer_visit_type_name": "ผู้ป่วยเก่ากลับมาฉายแสดง OPD",
    "hos_guid": null
  },
  {
    "cancer_visit_type_id": 5,
    "cancer_visit_type_name": "ผู้ป่วย F/U ระหว่างฉาย WARD",
    "hos_guid": null
  },
  {
    "cancer_visit_type_id": 6,
    "cancer_visit_type_name": "ผู้ป่วย F/U ระหว่างฉาย OPD",
    "hos_guid": null
  },
  {
    "cancer_visit_type_id": 7,
    "cancer_visit_type_name": "ผู้ป่วย F/U หลังจบการรักษาด้วยรังสี",
    "hos_guid": null
  },
  {
    "cancer_visit_type_id": 8,
    "cancer_visit_type_name": "ผู้ป่วยฉายแสง WARD",
    "hos_guid": null
  }
]
```
