# `allergy_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| allergy_result_id | int(11) | NO | PRI | 0 |  |  |
| result_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_result_name | result_name | yes | 1 |
| PRIMARY | allergy_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "allergy_result_id": 1,
    "result_name": "หายเป็นปกติ",
    "hos_guid": null
  },
  {
    "allergy_result_id": 2,
    "result_name": "หายโดยมีร่องรอยเดิม",
    "hos_guid": null
  },
  {
    "allergy_result_id": 3,
    "result_name": "ยังมีอาการอยู่",
    "hos_guid": null
  },
  {
    "allergy_result_id": 4,
    "result_name": "เสียชีวิต",
    "hos_guid": null
  },
  {
    "allergy_result_id": 5,
    "result_name": "ไม่สามารถติดตามผลได้",
    "hos_guid": null
  }
]
```
