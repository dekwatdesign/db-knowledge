# `er_cpr_result_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_cpr_result_type_id | int(11) | NO | PRI | 0 |  |  |
| er_cpr_result_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_er_cpr_result_type_name | er_cpr_result_type_name | yes | 1 |
| PRIMARY | er_cpr_result_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "er_cpr_result_type_id": 1,
    "er_cpr_result_type_name": "ไม่มี ROSC*"
  },
  {
    "er_cpr_result_type_id": 2,
    "er_cpr_result_type_name": "Persist < 20 นาที"
  },
  {
    "er_cpr_result_type_id": 3,
    "er_cpr_result_type_name": "Persist 20 นาที ถึง 24 ชั่วโมง"
  },
  {
    "er_cpr_result_type_id": 4,
    "er_cpr_result_type_name": "Persist > 24 ชั่วโมง"
  }
]
```
