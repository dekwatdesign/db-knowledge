# `cm_vt_eval_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cm_vt_eval_type_id | int(11) | NO | PRI | 0 |  |  |
| cm_vt_eval_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cm_vt_eval_type_name | cm_vt_eval_type_name | yes | 1 |
| PRIMARY | cm_vt_eval_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "cm_vt_eval_type_id": 1,
    "cm_vt_eval_type_name": "ภาวะโรคสงบ"
  },
  {
    "cm_vt_eval_type_id": 2,
    "cm_vt_eval_type_name": "ควบคุมโรคได้ดี"
  },
  {
    "cm_vt_eval_type_id": 3,
    "cm_vt_eval_type_name": "ควบคุมโรคได้ไม่ดี"
  },
  {
    "cm_vt_eval_type_id": 4,
    "cm_vt_eval_type_name": "ไม่สามารถควบคุมโรคได้"
  }
]
```
