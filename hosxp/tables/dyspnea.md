# `dyspnea`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dyspnea_id | varchar(5) | NO | PRI |  |  |  |
| dyspnea_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dyspnea_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "dyspnea_id": "01",
    "dyspnea_name": "No"
  },
  {
    "dyspnea_id": "02",
    "dyspnea_name": "DOE"
  },
  {
    "dyspnea_id": "03",
    "dyspnea_name": "Orthopnea"
  },
  {
    "dyspnea_id": "04",
    "dyspnea_name": "PND"
  }
]
```
