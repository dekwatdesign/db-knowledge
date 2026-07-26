# `ipt_accident_place`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_accident_place_id | int(11) | NO | PRI | 0 |  |  |
| ipt_accident_place_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipt_accident_place_name | ipt_accident_place_name | yes | 1 |
| PRIMARY | ipt_accident_place_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "ipt_accident_place_id": 2,
    "ipt_accident_place_name": "นอกจังหวัด"
  },
  {
    "ipt_accident_place_id": 1,
    "ipt_accident_place_name": "ในจังหวัด"
  }
]
```
