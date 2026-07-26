# `social_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| social_position_id | int(11) | NO | PRI | 0 |  |  |
| social_position_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | social_position_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "social_position_id": 1,
    "social_position_name": "นักสังคมสงเคราะห์"
  },
  {
    "social_position_id": 2,
    "social_position_name": "ผู้ช่วย"
  }
]
```
