# `referout_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| referout_type_id | int(11) | NO | PRI | 0 |  |  |
| referout_type_name | varchar(200) | YES | UNI | NULL |  |  |
| export_code | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_referout_type_name | referout_type_name | yes | 1 |
| PRIMARY | referout_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "referout_type_id": 1,
    "referout_type_name": "ผู้ป่วยทั่วไป",
    "export_code": "1"
  },
  {
    "referout_type_id": 2,
    "referout_type_name": "ผู้ป่วยอุบัติเหตุ",
    "export_code": "2"
  },
  {
    "referout_type_id": 3,
    "referout_type_name": "ผู้ป่วยฉุกเฉิน(ยกเว้นอุบัติเหตุ)",
    "export_code": "3"
  }
]
```
