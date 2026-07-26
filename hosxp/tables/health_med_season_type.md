# `health_med_season_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_season_type_id | int(11) | NO | PRI | 0 |  |  |
| health_med_season_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_season_type_name | health_med_season_type_name | yes | 1 |
| PRIMARY | health_med_season_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "health_med_season_type_id": 1,
    "health_med_season_type_name": "คิมหันตฤดู"
  },
  {
    "health_med_season_type_id": 2,
    "health_med_season_type_name": "วสันตฤดู"
  },
  {
    "health_med_season_type_id": 3,
    "health_med_season_type_name": "วัสสานฤดู"
  },
  {
    "health_med_season_type_id": 4,
    "health_med_season_type_name": "สะระทะฤดู"
  },
  {
    "health_med_season_type_id": 5,
    "health_med_season_type_name": "เหมันตฤดู"
  },
  {
    "health_med_season_type_id": 6,
    "health_med_season_type_name": "ศิริรฤดู"
  }
]
```
