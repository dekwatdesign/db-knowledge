# `pttype_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| new_pttype | char(2) | YES |  | NULL |  |  |
| change_date_time | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |
| staff | varchar(25) | YES | MUL | NULL |  |  |
| new_pttypeno | varchar(50) | YES |  | NULL |  |  |
| station | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| PRIMARY | hn | yes | 1 |
| PRIMARY | change_date_time | yes | 2 |
| staff | staff | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hn": "600000671",
    "new_pttype": "02",
    "change_date_time": "2022-12-09 07:33:23",
    "staff": "[MASKED_FULLNAME]",
    "new_pttypeno": "",
    "station": "A63-0018"
  },
  {
    "hn": "650006003",
    "new_pttype": "10",
    "change_date_time": "2022-12-09 07:58:29",
    "staff": "[MASKED_FULLNAME]",
    "new_pttypeno": "",
    "station": "A63-0018"
  },
  {
    "hn": "650006004",
    "new_pttype": "10",
    "change_date_time": "2022-12-09 08:09:41",
    "staff": "[MASKED_FULLNAME]",
    "new_pttypeno": "",
    "station": "A63-0018"
  },
  {
    "hn": "560000010",
    "new_pttype": "74",
    "change_date_time": "2022-12-09 08:16:18",
    "staff": "[MASKED_FULLNAME]",
    "new_pttypeno": "ท7433244849",
    "station": "A63-0018"
  },
  {
    "hn": "650000891",
    "new_pttype": "10",
    "change_date_time": "2022-12-09 08:19:13",
    "staff": "[MASKED_FULLNAME]",
    "new_pttypeno": "",
    "station": "A63-0018"
  },
  {
    "hn": "650006005",
    "new_pttype": "10",
    "change_date_time": "2022-12-09 08:26:12",
    "staff": "[MASKED_FULLNAME]",
    "new_pttypeno": "",
    "station": "A63-0018"
  },
  {
    "hn": "580000919",
    "new_pttype": "74",
    "change_date_time": "2022-12-09 08:37:18",
    "staff": "[MASKED_FULLNAME]",
    "new_pttypeno": "B74100001263467",
    "station": "A63-0018"
  },
  {
    "hn": "620000914",
    "new_pttype": "11",
    "change_date_time": "2022-12-09 08:42:33",
    "staff": "[MASKED_FULLNAME]",
    "new_pttypeno": "ท7164171584",
    "station": "A63-0018"
  }
]
```
