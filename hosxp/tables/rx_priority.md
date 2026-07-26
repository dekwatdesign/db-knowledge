# `rx_priority`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rx_priority_id | int(11) | NO | PRI | 0 |  |  |
| rx_priority_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_rx_priority_name | rx_priority_name | yes | 1 |
| PRIMARY | rx_priority_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "rx_priority_id": 1,
    "rx_priority_name": "ปกติ"
  },
  {
    "rx_priority_id": 2,
    "rx_priority_name": "ด่วน"
  }
]
```
