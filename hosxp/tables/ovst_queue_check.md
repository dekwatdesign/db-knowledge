# `ovst_queue_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_queue_check_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| oqueue | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_date_queue | vstdate | yes | 1 |
| ix_date_queue | oqueue | yes | 2 |
| ix_date_queue_index | oqueue | yes | 1 |
| ix_date_queue_index | vstdate | yes | 2 |
| PRIMARY | ovst_queue_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "ovst_queue_check_id": 1,
    "vn": "661220112115",
    "vstdate": "2023-12-20",
    "oqueue": 275
  }
]
```
