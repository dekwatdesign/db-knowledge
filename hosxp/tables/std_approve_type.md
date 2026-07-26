# `std_approve_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| std_approve_type_id | int(11) | NO | PRI | 0 |  |  |
| std_approve_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_std_approve_type_name | std_approve_type_name | yes | 1 |
| PRIMARY | std_approve_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "std_approve_type_id": 3,
    "std_approve_type_name": "วินิจฉัย"
  },
  {
    "std_approve_type_id": 2,
    "std_approve_type_name": "หัตถการ"
  },
  {
    "std_approve_type_id": 4,
    "std_approve_type_name": "ยา"
  },
  {
    "std_approve_type_id": 5,
    "std_approve_type_name": "Lab"
  },
  {
    "std_approve_type_id": 6,
    "std_approve_type_name": "X-Ray"
  },
  {
    "std_approve_type_id": 1,
    "std_approve_type_name": "Treatment Plan"
  }
]
```
