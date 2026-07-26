# `ptnote_view`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ptnote_view_id | int(11) | NO | PRI | 0 |  |  |
| ptnote_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| computer_name | varchar(50) | YES |  | NULL |  |  |
| view_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ptnote_id | ptnote_id | no | 1 |
| PRIMARY | ptnote_view_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ptnote_view_id": 1,
    "ptnote_id": 792,
    "staff": "[MASKED_FULLNAME]",
    "computer_name": "S08000201-00053",
    "view_datetime": "2024-07-03 15:32:57"
  },
  {
    "ptnote_view_id": 2,
    "ptnote_id": 792,
    "staff": "[MASKED_FULLNAME]",
    "computer_name": "RC04-YUWA",
    "view_datetime": "2024-09-30 15:36:15"
  },
  {
    "ptnote_view_id": 3,
    "ptnote_id": 2789,
    "staff": "[MASKED_FULLNAME]",
    "computer_name": "S08000201-00052",
    "view_datetime": "2024-10-04 09:29:45"
  },
  {
    "ptnote_view_id": 4,
    "ptnote_id": 3908,
    "staff": "[MASKED_FULLNAME]",
    "computer_name": "S08000201-00052",
    "view_datetime": "2024-10-10 08:58:48"
  },
  {
    "ptnote_view_id": 5,
    "ptnote_id": 4080,
    "staff": "[MASKED_FULLNAME]",
    "computer_name": "S08000201-00052",
    "view_datetime": "2024-10-10 09:56:29"
  },
  {
    "ptnote_view_id": 6,
    "ptnote_id": 4080,
    "staff": "[MASKED_FULLNAME]",
    "computer_name": "S08000201-00052",
    "view_datetime": "2024-10-10 09:57:02"
  },
  {
    "ptnote_view_id": 7,
    "ptnote_id": 3574,
    "staff": "[MASKED_FULLNAME]",
    "computer_name": "S08000201-00052",
    "view_datetime": "2024-10-10 11:50:42"
  },
  {
    "ptnote_view_id": 8,
    "ptnote_id": 2789,
    "staff": "[MASKED_FULLNAME]",
    "computer_name": "S08000201-00052",
    "view_datetime": "2024-10-28 09:06:43"
  }
]
```
