# `ipd_nurse_shift_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_shift_position_id | int(11) | NO | PRI | 0 |  |  |
| ipd_nurse_shift_position_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_nurse_shift_position_name | ipd_nurse_shift_position_name | yes | 1 |
| PRIMARY | ipd_nurse_shift_position_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "ipd_nurse_shift_position_id": 1,
    "ipd_nurse_shift_position_name": "Charge nurse"
  },
  {
    "ipd_nurse_shift_position_id": 2,
    "ipd_nurse_shift_position_name": "Staff nurse"
  }
]
```
