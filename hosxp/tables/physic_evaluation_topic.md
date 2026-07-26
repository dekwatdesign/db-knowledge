# `physic_evaluation_topic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_evaluation_topic_id | int(11) | NO | PRI | 0 |  |  |
| physic_evaluation_topic_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_evaluation_topic_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "physic_evaluation_topic_id": 1,
    "physic_evaluation_topic_name": "Pre - Test"
  },
  {
    "physic_evaluation_topic_id": 2,
    "physic_evaluation_topic_name": "Post - Test"
  }
]
```
