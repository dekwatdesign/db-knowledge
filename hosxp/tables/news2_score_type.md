# `news2_score_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| news2_score_type_id | int(11) | NO | PRI | 0 |  |  |
| news2_score_type_name | varchar(200) | YES | UNI | NULL |  |  |
| min_value | int(11) | YES |  | NULL |  |  |
| max_value | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_news2_score_type_name | news2_score_type_name | yes | 1 |
| PRIMARY | news2_score_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "news2_score_type_id": 1,
    "news2_score_type_name": "Low risk; routine monitoring is usually sufficient",
    "min_value": 0,
    "max_value": 4
  },
  {
    "news2_score_type_id": 2,
    "news2_score_type_name": "Medium risk; increased frequency of monitoring and possible intervention.",
    "min_value": 5,
    "max_value": 6
  },
  {
    "news2_score_type_id": 3,
    "news2_score_type_name": "High risk; requires urgent clinical review and potential intervention.",
    "min_value": 7,
    "max_value": 999
  }
]
```
