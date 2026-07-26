# `angina`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| angina_id | varchar(5) | NO | PRI |  |  |  |
| angina_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | angina_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "angina_id": "02",
    "angina_name": "Atypical angina"
  },
  {
    "angina_id": "01",
    "angina_name": "No"
  },
  {
    "angina_id": "03",
    "angina_name": "Classical angina"
  },
  {
    "angina_id": "04",
    "angina_name": "Unknow"
  }
]
```
