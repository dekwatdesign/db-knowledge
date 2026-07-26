# `hsk_highcharts`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(10) | NO | PRI | 0 |  |  |
| hname | varchar(100) | YES |  | NULL |  |  |
| cg | varchar(200) | YES |  | NULL |  |  |
| group_name | varchar(3) | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| d_update | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "hname": "4a",
    "cg": "0,0,0,0,0",
    "group_name": "A2",
    "vstdate": "2024-09-26",
    "d_update": "2024-09-26 11:11:55"
  },
  {
    "id": 2,
    "hname": "3a",
    "cg": "0,0,0,0,0",
    "group_name": "A2",
    "vstdate": "2024-09-26",
    "d_update": "2024-09-26 11:11:55"
  },
  {
    "id": 3,
    "hname": "3b",
    "cg": "0,0,0,0,0",
    "group_name": "A2",
    "vstdate": "2024-09-26",
    "d_update": "2024-09-26 11:11:55"
  },
  {
    "id": 4,
    "hname": "2a",
    "cg": "0,0,0,0,0",
    "group_name": "A2",
    "vstdate": "2024-09-26",
    "d_update": "2024-09-26 11:11:55"
  },
  {
    "id": 5,
    "hname": "2b",
    "cg": "0,0,0,0,0",
    "group_name": "A2",
    "vstdate": "2024-09-26",
    "d_update": "2024-09-26 11:11:55"
  },
  {
    "id": 6,
    "hname": "2c",
    "cg": "0,0,0,0,0",
    "group_name": "A2",
    "vstdate": "2024-09-26",
    "d_update": "2024-09-26 11:11:55"
  },
  {
    "id": 7,
    "hname": "1a",
    "cg": "0,0,0,0,0",
    "group_name": "A2",
    "vstdate": "2024-09-26",
    "d_update": "2024-09-26 11:11:55"
  },
  {
    "id": 8,
    "hname": "1b",
    "cg": "0,0,0,0,0",
    "group_name": "A2",
    "vstdate": "2024-09-26",
    "d_update": "2024-09-26 11:11:55"
  }
]
```
