# `vaccine_screen_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vaccine_screen_type_id | int(11) | NO | PRI | 0 |  |  |
| vaccine_screen_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vaccine_screen_type_name | vaccine_screen_type_name | yes | 1 |
| PRIMARY | vaccine_screen_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "vaccine_screen_type_id": 1,
    "vaccine_screen_type_name": "ตามเกณฑ์"
  },
  {
    "vaccine_screen_type_id": 2,
    "vaccine_screen_type_name": "ไม่ตามเกณฑ์"
  }
]
```
