# `opdcard_print_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opdcard_print_log_id | int(11) | NO | PRI | 0 |  |  |
| print_date | date | YES | MUL | NULL |  |  |
| print_time | time | YES |  | NULL |  |  |
| staff | varchar(100) | YES | MUL | NULL |  |  |
| print_reason | varchar(250) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_print_date | print_date | no | 1 |
| ix_staff | staff | no | 1 |
| PRIMARY | opdcard_print_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "opdcard_print_log_id": 3,
    "print_date": "2024-06-18",
    "print_time": "13:34:17",
    "staff": "[MASKED_FULLNAME]",
    "print_reason": "แทน",
    "hn": "530001449"
  }
]
```
