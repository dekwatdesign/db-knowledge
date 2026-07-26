# `ipt_severe_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_severe_type_id | int(11) | NO | PRI | 0 |  |  |
| ipt_severe_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipt_severe_type_name | ipt_severe_type_name | yes | 1 |
| PRIMARY | ipt_severe_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "ipt_severe_type_id": 1,
    "ipt_severe_type_name": "\tระดับ 1"
  },
  {
    "ipt_severe_type_id": 2,
    "ipt_severe_type_name": "ระดับ 2"
  },
  {
    "ipt_severe_type_id": 3,
    "ipt_severe_type_name": "ระดับ 3"
  },
  {
    "ipt_severe_type_id": 4,
    "ipt_severe_type_name": "ระดับ 4"
  }
]
```
