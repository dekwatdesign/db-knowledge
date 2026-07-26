# `disposition`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| disposition_id | varchar(50) | YES |  | NULL |  |  |
| disposition_name | varchar(50) | YES |  | NULL |  |  |
| disposition_order | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "disposition_id": "01",
    "disposition_name": "Admit",
    "disposition_order": "01"
  },
  {
    "disposition_id": "02",
    "disposition_name": "Discharge",
    "disposition_order": "02"
  },
  {
    "disposition_id": "03",
    "disposition_name": "Refer",
    "disposition_order": "03"
  },
  {
    "disposition_id": "04",
    "disposition_name": "Observe",
    "disposition_order": "04"
  },
  {
    "disposition_id": "05",
    "disposition_name": "เสียชีวิต",
    "disposition_order": "05"
  }
]
```
