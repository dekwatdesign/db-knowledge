# `village_school_shift`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_school_shift_id | int(11) | NO | PRI | 0 |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| shift_datetime | datetime | YES |  | NULL |  |  |
| shift_type | int(11) | YES |  | NULL |  |  |
| old_student_delta | longtext | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | village_school_shift_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "village_school_shift_id": 1,
    "staff": "[MASKED_FULLNAME]",
    "shift_datetime": "2023-06-15 13:46:39",
    "shift_type": null,
    "old_student_delta": "[MASKED_FULLNAME]",
    "hos_guid": null
  }
]
```
