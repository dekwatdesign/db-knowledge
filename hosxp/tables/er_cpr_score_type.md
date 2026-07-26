# `er_cpr_score_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_cpr_score_type_id | int(11) | NO | PRI | 0 |  |  |
| er_cpr_score_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_er_cpr_score_type_name | er_cpr_score_type_name | yes | 1 |
| PRIMARY | er_cpr_score_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "er_cpr_score_type_id": 1,
    "er_cpr_score_type_name": "รู้ตัวดี (Good)"
  },
  {
    "er_cpr_score_type_id": 2,
    "er_cpr_score_type_name": "พอรู้ตัว (Moderate)"
  },
  {
    "er_cpr_score_type_id": 3,
    "er_cpr_score_type_name": "รู้ตัวน้อยมาก (Severe)"
  },
  {
    "er_cpr_score_type_id": 4,
    "er_cpr_score_type_name": "ไม่รู้ตัวเลย (Comatose)"
  },
  {
    "er_cpr_score_type_id": 5,
    "er_cpr_score_type_name": "สมองตาย (Brain Dead)"
  }
]
```
