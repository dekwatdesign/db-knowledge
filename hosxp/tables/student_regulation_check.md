# `student_regulation_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| student_regulation_check_id | int(11) | NO | PRI | 0 |  |  |
| village_student_screen_id | int(11) | YES | MUL | NULL |  |  |
| student_regulation_id | int(11) | YES |  | NULL |  |  |
| check_pass | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_student_screen_id | village_student_screen_id | no | 1 |
| PRIMARY | student_regulation_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "student_regulation_check_id": 2,
    "village_student_screen_id": 1,
    "student_regulation_id": 1,
    "check_pass": "N",
    "hos_guid": null,
    "hospcode": null
  },
  {
    "student_regulation_check_id": 4,
    "village_student_screen_id": 1,
    "student_regulation_id": 2,
    "check_pass": null,
    "hos_guid": null,
    "hospcode": null
  },
  {
    "student_regulation_check_id": 6,
    "village_student_screen_id": 1,
    "student_regulation_id": 3,
    "check_pass": null,
    "hos_guid": null,
    "hospcode": null
  },
  {
    "student_regulation_check_id": 8,
    "village_student_screen_id": 1,
    "student_regulation_id": 4,
    "check_pass": null,
    "hos_guid": null,
    "hospcode": null
  },
  {
    "student_regulation_check_id": 10,
    "village_student_screen_id": 1,
    "student_regulation_id": 5,
    "check_pass": null,
    "hos_guid": null,
    "hospcode": null
  },
  {
    "student_regulation_check_id": 12,
    "village_student_screen_id": 1,
    "student_regulation_id": 6,
    "check_pass": null,
    "hos_guid": null,
    "hospcode": null
  },
  {
    "student_regulation_check_id": 14,
    "village_student_screen_id": 1,
    "student_regulation_id": 7,
    "check_pass": null,
    "hos_guid": null,
    "hospcode": null
  },
  {
    "student_regulation_check_id": 16,
    "village_student_screen_id": 1,
    "student_regulation_id": 8,
    "check_pass": null,
    "hos_guid": null,
    "hospcode": null
  }
]
```
