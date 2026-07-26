# `ipt_doctor_scan_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_doctor_scan_type_id | int(11) | NO | PRI | 0 |  |  |
| ipt_doctor_scan_type_name | varchar(150) | YES | UNI | NULL |  |  |
| display_color | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipt_doctor_scan_type_name | ipt_doctor_scan_type_name | yes | 1 |
| PRIMARY | ipt_doctor_scan_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "ipt_doctor_scan_type_id": 1,
    "ipt_doctor_scan_type_name": "Doctor order sheet",
    "display_color": null
  },
  {
    "ipt_doctor_scan_type_id": 2,
    "ipt_doctor_scan_type_name": "ใบสั่งยา",
    "display_color": null
  }
]
```
