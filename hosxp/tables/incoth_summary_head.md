# `incoth_summary_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inch_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| summary_date_time | datetime | YES |  | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| finance_lock | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | inch_id | yes | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "inch_id": 1,
    "vn": "541019084423",
    "staff": "[MASKED_FULLNAME]",
    "summary_date_time": "2011-10-19 08:47:18",
    "department": null,
    "finance_lock": null,
    "hos_guid": null
  },
  {
    "inch_id": 2,
    "vn": "550106134539",
    "staff": "[MASKED_FULLNAME]",
    "summary_date_time": "2012-01-06 15:05:14",
    "department": null,
    "finance_lock": null,
    "hos_guid": null
  },
  {
    "inch_id": 3,
    "vn": "550919103050",
    "staff": "[MASKED_FULLNAME]",
    "summary_date_time": "2012-09-19 09:36:41",
    "department": null,
    "finance_lock": null,
    "hos_guid": null
  },
  {
    "inch_id": 4,
    "vn": "550919083106",
    "staff": "[MASKED_FULLNAME]",
    "summary_date_time": "2012-09-19 09:39:00",
    "department": null,
    "finance_lock": null,
    "hos_guid": null
  },
  {
    "inch_id": 5,
    "vn": "550919103039",
    "staff": "[MASKED_FULLNAME]",
    "summary_date_time": "2012-09-19 12:09:18",
    "department": null,
    "finance_lock": null,
    "hos_guid": null
  },
  {
    "inch_id": 6,
    "vn": "550920083038",
    "staff": "[MASKED_FULLNAME]",
    "summary_date_time": "2012-09-20 08:45:56",
    "department": null,
    "finance_lock": null,
    "hos_guid": null
  },
  {
    "inch_id": 7,
    "vn": "550924103106",
    "staff": "[MASKED_FULLNAME]",
    "summary_date_time": "2012-09-24 09:31:40",
    "department": null,
    "finance_lock": null,
    "hos_guid": null
  },
  {
    "inch_id": 8,
    "vn": "551011081330",
    "staff": "[MASKED_FULLNAME]",
    "summary_date_time": "2012-10-11 08:15:07",
    "department": null,
    "finance_lock": null,
    "hos_guid": null
  }
]
```
