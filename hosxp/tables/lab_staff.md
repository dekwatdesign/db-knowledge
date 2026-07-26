# `lab_staff`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_staff_id | int(11) | NO | PRI | 0 |  |  |
| loginname | varchar(100) | YES | UNI | NULL |  |  |
| can_report | char(1) | YES |  | NULL |  |  |
| can_approve | char(1) | YES |  | NULL |  |  |
| allow_other_report | char(1) | YES |  | NULL |  |  |
| allow_other_approve | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_loginname | loginname | yes | 1 |
| PRIMARY | lab_staff_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "lab_staff_id": 1,
    "loginname": "yuwa029",
    "can_report": "Y",
    "can_approve": "Y",
    "allow_other_report": "Y",
    "allow_other_approve": "Y"
  },
  {
    "lab_staff_id": 2,
    "loginname": "yuwa290",
    "can_report": "Y",
    "can_approve": "Y",
    "allow_other_report": "Y",
    "allow_other_approve": "Y"
  },
  {
    "lab_staff_id": 3,
    "loginname": "yuwa322",
    "can_report": "Y",
    "can_approve": "Y",
    "allow_other_report": "Y",
    "allow_other_approve": "Y"
  }
]
```
