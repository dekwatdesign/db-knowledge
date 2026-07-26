# `operation_circulation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_circulation_id | int(11) | NO | PRI | 0 |  |  |
| operation_circulation_name | varchar(200) | YES | UNI | NULL |  |  |
| score | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_operation_circulation_name | operation_circulation_name | yes | 1 |
| PRIMARY | operation_circulation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "operation_circulation_id": 1,
    "operation_circulation_name": "ความดันเลือดระหว่าง +20 mmHg ของค่าพื้นฐาน",
    "score": 2
  },
  {
    "operation_circulation_id": 2,
    "operation_circulation_name": "ความดันเลือดระหว่าง +20-50 mmHg ของค่าพื้นฐาน",
    "score": 1
  },
  {
    "operation_circulation_id": 3,
    "operation_circulation_name": "ความดันเลือดระหว่าง +50 mmHg ของค่าพื้นฐาน",
    "score": 0
  }
]
```
