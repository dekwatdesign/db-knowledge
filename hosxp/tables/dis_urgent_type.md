# `dis_urgent_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dis_urgent_type_id | int(11) | NO | PRI | 0 |  |  |
| dis_urgent_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dis_urgent_type_name | dis_urgent_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dis_urgent_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "dis_urgent_type_id": 1,
    "dis_urgent_type_name": "ทันที (ภายใน 10 นาที)",
    "hos_guid": null
  },
  {
    "dis_urgent_type_id": 2,
    "dis_urgent_type_name": "ภายใน 1 วัน",
    "hos_guid": null
  },
  {
    "dis_urgent_type_id": 3,
    "dis_urgent_type_name": "ภายใน 1 สัปดาห์",
    "hos_guid": null
  },
  {
    "dis_urgent_type_id": 4,
    "dis_urgent_type_name": "ภายใน 1 เดือน",
    "hos_guid": null
  }
]
```
