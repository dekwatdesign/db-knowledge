# `provis_urgency`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(2) | NO | PRI |  |  |  |
| name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "code": "1",
    "name": "life threatening"
  },
  {
    "code": "2",
    "name": "emergency"
  },
  {
    "code": "3",
    "name": "urgent"
  },
  {
    "code": "4",
    "name": "acute"
  },
  {
    "code": "5",
    "name": "non acute"
  },
  {
    "code": "6",
    "name": "ไม่แน่ใจ"
  }
]
```
