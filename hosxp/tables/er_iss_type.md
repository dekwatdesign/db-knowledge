# `er_iss_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | int(11) | NO | PRI | 0 |  |  |
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
    "code": 1,
    "name": "HEAD/NECK"
  },
  {
    "code": 2,
    "name": "FACE"
  },
  {
    "code": 3,
    "name": "THORAX"
  },
  {
    "code": 4,
    "name": "ABDOMEN/PELVIC CONTENTS"
  },
  {
    "code": 5,
    "name": "EXTREMITIES/PELVIC GIRDLE"
  },
  {
    "code": 6,
    "name": "EXTERNAL"
  }
]
```
