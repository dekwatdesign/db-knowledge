# `ipd_nurse_shift`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_shift_id | int(11) | NO | PRI | 0 |  |  |
| ipd_nurse_shift_name | varchar(200) | YES | UNI | NULL |  |  |
| time_min | time | YES |  | NULL |  |  |
| time_max | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_nurse_shift_name | ipd_nurse_shift_name | yes | 1 |
| PRIMARY | ipd_nurse_shift_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ipd_nurse_shift_id": 1,
    "ipd_nurse_shift_name": "เช้า",
    "time_min": null,
    "time_max": null
  },
  {
    "ipd_nurse_shift_id": 2,
    "ipd_nurse_shift_name": "บ่าย",
    "time_min": null,
    "time_max": null
  },
  {
    "ipd_nurse_shift_id": 3,
    "ipd_nurse_shift_name": "ดึก",
    "time_min": null,
    "time_max": null
  }
]
```
