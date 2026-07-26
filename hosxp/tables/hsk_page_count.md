# `hsk_page_count`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(10) | NO | PRI | 0 |  |  |
| page_name | varchar(200) | NO | PRI |  |  |  |
| page_log | text | YES |  | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| staff | varchar(20) | YES | MUL | NULL |  |  |
| ip | varchar(50) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| id | id | yes | 1 |
| ip | ip | no | 1 |
| page_name | page_name | no | 1 |
| PRIMARY | id | yes | 1 |
| PRIMARY | page_name | yes | 2 |
| staff | staff | no | 1 |
| vstdate | vstdate | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1071892,
    "page_name": "/hsk/web_ipd.php",
    "page_log": "/hsk/web_ipd.php",
    "vstdate": "2024-08-20",
    "vsttime": "17:43:04",
    "staff": "[MASKED_FULLNAME]",
    "ip": "192.168.10.1"
  },
  {
    "id": 1071893,
    "page_name": "/hsk/web_ipd.php",
    "page_log": "/hsk/web_ipd.php",
    "vstdate": "2024-08-20",
    "vsttime": "17:43:26",
    "staff": "[MASKED_FULLNAME]",
    "ip": "192.168.10.1"
  },
  {
    "id": 1071894,
    "page_name": "/hsk/web_ipd.php",
    "page_log": "/hsk/web_ipd.php",
    "vstdate": "2024-08-20",
    "vsttime": "17:43:42",
    "staff": "[MASKED_FULLNAME]",
    "ip": "192.168.10.1"
  },
  {
    "id": 1071895,
    "page_name": "/hsk/web_ipd.php",
    "page_log": "/hsk/web_ipd.php?w=01&an=",
    "vstdate": "2024-08-20",
    "vsttime": "17:44:02",
    "staff": "[MASKED_FULLNAME]",
    "ip": "192.168.10.1"
  },
  {
    "id": 1071896,
    "page_name": "/hsk/web_ipd.php",
    "page_log": "/hsk/web_ipd.php?w=01&an=",
    "vstdate": "2024-08-20",
    "vsttime": "17:48:41",
    "staff": "[MASKED_FULLNAME]",
    "ip": "192.168.10.1"
  },
  {
    "id": 1071897,
    "page_name": "/hsk/web_ipd.php",
    "page_log": "/hsk/web_ipd.php?w=01&an=",
    "vstdate": "2024-08-20",
    "vsttime": "17:48:41",
    "staff": "[MASKED_FULLNAME]",
    "ip": "192.168.10.1"
  },
  {
    "id": 1071898,
    "page_name": "/hsk/web_ipd.php",
    "page_log": "/hsk/web_ipd.php?w=01&an=",
    "vstdate": "2024-08-20",
    "vsttime": "17:48:45",
    "staff": "[MASKED_FULLNAME]",
    "ip": "192.168.10.1"
  },
  {
    "id": 1071899,
    "page_name": "/hsk/web_ipd.php",
    "page_log": "/hsk/web_ipd.php?w=01&an=",
    "vstdate": "2024-08-20",
    "vsttime": "17:48:45",
    "staff": "[MASKED_FULLNAME]",
    "ip": "192.168.10.1"
  }
]
```
