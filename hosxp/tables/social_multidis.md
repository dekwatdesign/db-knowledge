# `social_multidis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| social_multidis_id | int(11) | NO | PRI | 0 |  |  |
| social_multidis_name | varchar(250) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_social_multidis_social_multidis_name | social_multidis_name | no | 1 |
| PRIMARY | social_multidis_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "social_multidis_id": 1,
    "social_multidis_name": "แพทย์"
  },
  {
    "social_multidis_id": 2,
    "social_multidis_name": "พยาบาล"
  },
  {
    "social_multidis_id": 3,
    "social_multidis_name": "จิตเวช"
  }
]
```
