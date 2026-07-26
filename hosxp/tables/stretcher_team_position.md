# `stretcher_team_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stretcher_team_position_id | int(11) | NO | PRI | 0 |  |  |
| stretcher_team_position_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stretcher_team_position_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "stretcher_team_position_id": 1,
    "stretcher_team_position_name": "พนักงานประจำ"
  },
  {
    "stretcher_team_position_id": 2,
    "stretcher_team_position_name": "ลูกจ้างชั่วคราว"
  },
  {
    "stretcher_team_position_id": 3,
    "stretcher_team_position_name": "บริษัทเอกชน"
  }
]
```
