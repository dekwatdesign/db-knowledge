# `cancer_person_live_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_person_live_status_id | int(11) | NO | PRI | 0 |  |  |
| cancer_person_live_status_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cancer_person_live_status_name | cancer_person_live_status_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_person_live_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "cancer_person_live_status_id": 1,
    "cancer_person_live_status_name": "ยังมีชีวิต",
    "hos_guid": null
  },
  {
    "cancer_person_live_status_id": 2,
    "cancer_person_live_status_name": "เสียชีวิต",
    "hos_guid": null
  },
  {
    "cancer_person_live_status_id": 9,
    "cancer_person_live_status_name": "ไม่ระบุ",
    "hos_guid": null
  }
]
```
