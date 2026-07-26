# `elder_exercise_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| elder_exercise_type_id | int(11) | NO | PRI | 0 |  |  |
| elder_exercise_type_name | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | elder_exercise_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "elder_exercise_type_id": 1,
    "elder_exercise_type_name": "ไม่ออก",
    "hos_guid": null
  },
  {
    "elder_exercise_type_id": 2,
    "elder_exercise_type_name": "ทำงาน",
    "hos_guid": null
  },
  {
    "elder_exercise_type_id": 3,
    "elder_exercise_type_name": "เดิน",
    "hos_guid": null
  },
  {
    "elder_exercise_type_id": 4,
    "elder_exercise_type_name": "วิ่ง",
    "hos_guid": null
  },
  {
    "elder_exercise_type_id": 5,
    "elder_exercise_type_name": "แอโรบิค",
    "hos_guid": null
  },
  {
    "elder_exercise_type_id": 6,
    "elder_exercise_type_name": "สมาธิ",
    "hos_guid": null
  },
  {
    "elder_exercise_type_id": 7,
    "elder_exercise_type_name": "ยืดเหยียด",
    "hos_guid": null
  },
  {
    "elder_exercise_type_id": 8,
    "elder_exercise_type_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
