# `hsk_dental_time`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(30) | NO | PRI |  |  |  |
| hn | varchar(9) | NO | PRI |  |  |  |
| vstdate | date | YES |  | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| t1 | time | YES |  | NULL |  |  |
| t2 | time | YES |  | NULL |  |  |
| t3 | time | YES |  | NULL |  |  |
| t4 | time | YES |  | NULL |  |  |
| t5 | time | YES |  | NULL |  |  |
| doctor | varchar(255) | YES |  | NULL |  |  |
| d_update | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| PRIMARY | vn | yes | 1 |
| PRIMARY | hn | yes | 2 |
| vn | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "vn": "670913070710",
    "hn": "580000886",
    "vstdate": "2024-09-13",
    "vsttime": "7:07:10",
    "t1": "11:43:00",
    "t2": "11:43:00",
    "t3": "11:43:00",
    "t4": "11:43:00",
    "t5": "11:43:00",
    "doctor": "306",
    "d_update": "2024-09-13 11:17:15"
  }
]
```
