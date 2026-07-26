# `operation_screen_act`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_screen_act_id | int(11) | NO | PRI | 0 |  |  |
| operation_screen_act_name | varchar(200) | YES | UNI | NULL |  |  |
| score | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_operation_screen_act_name | operation_screen_act_name | yes | 1 |
| PRIMARY | operation_screen_act_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "operation_screen_act_id": 1,
    "operation_screen_act_name": "สามารถเคลื่อนไหวได้ 4 ระยางค์",
    "score": 2
  },
  {
    "operation_screen_act_id": 2,
    "operation_screen_act_name": "สามารถเคลื่อนไหวได้ 2 ระยางค์",
    "score": 1
  },
  {
    "operation_screen_act_id": 3,
    "operation_screen_act_name": "ไม่สามารถเคลื่อนไหวได้เลย",
    "score": 0
  }
]
```
