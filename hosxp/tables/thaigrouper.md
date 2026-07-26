# `thaigrouper`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| Tgrp | varchar(20) | NO | PRI | NULL |  |  |
| Date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | Tgrp | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "Tgrp": "6203",
    "Date": "2018-01-01"
  },
  {
    "Tgrp": "6205",
    "Date": "2019-02-01"
  },
  {
    "Tgrp": "6303",
    "Date": "2021-01-01"
  },
  {
    "Tgrp": "6305",
    "Date": "2021-10-01"
  }
]
```
