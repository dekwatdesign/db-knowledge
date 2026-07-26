# `tb_api_triggers_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| api_triggers_check_date | date | NO | PRI | 0000-00-00 |  |  |
| api_triggers_check_status | char(2) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| api_triggers_check_status | api_triggers_check_status | no | 1 |
| PRIMARY | api_triggers_check_date | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "api_triggers_check_date": "2020-02-19",
    "api_triggers_check_status": "Y"
  },
  {
    "api_triggers_check_date": "2020-02-20",
    "api_triggers_check_status": "Y"
  },
  {
    "api_triggers_check_date": "2020-03-03",
    "api_triggers_check_status": "Y"
  },
  {
    "api_triggers_check_date": "2020-03-07",
    "api_triggers_check_status": "Y"
  },
  {
    "api_triggers_check_date": "2020-03-19",
    "api_triggers_check_status": "Y"
  },
  {
    "api_triggers_check_date": "2020-04-29",
    "api_triggers_check_status": "Y"
  },
  {
    "api_triggers_check_date": "2020-04-30",
    "api_triggers_check_status": "Y"
  },
  {
    "api_triggers_check_date": "2020-05-20",
    "api_triggers_check_status": "Y"
  }
]
```
