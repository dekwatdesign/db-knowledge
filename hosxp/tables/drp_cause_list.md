# `drp_cause_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drp_cause_list_id | int(11) | NO | PRI | 0 |  |  |
| drp_regist_id | int(11) | YES |  | NULL |  |  |
| drp_cause_type_id | int(11) | YES |  | NULL |  |  |
| drp_cause_note | longtext | YES |  | NULL |  |  |
| drp_problem_list_id | int(11) | YES |  | NULL |  |  |
| drp_cause_id | int(11) | YES |  | NULL |  |  |
| drp_cause_text | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | drp_cause_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "drp_cause_list_id": 1,
    "drp_regist_id": null,
    "drp_cause_type_id": null,
    "drp_cause_note": null,
    "drp_problem_list_id": 11,
    "drp_cause_id": 33,
    "drp_cause_text": "C7.1 : ผู้ป่วย (Patient) : ผู้ป่วยใช้ยา น้อยกว่าที่สั่ง หรือไม่ใช้ยา"
  }
]
```
