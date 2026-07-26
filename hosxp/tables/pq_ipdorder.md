# `pq_ipdorder`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| order_no | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| staff | varchar(20) | YES |  | NULL |  |  |
| print | char(1) | YES |  | NULL |  |  |
| order_date_time | datetime | YES |  | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| ward | varchar(4) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | order_no | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "order_no": 1821,
    "an": "540000786",
    "staff": "[MASKED_FULLNAME]",
    "print": "N",
    "order_date_time": "2011-10-13 13:29:04",
    "doctor": "066",
    "ward": "03",
    "hos_guid": null
  },
  {
    "order_no": 1823,
    "an": "540000787",
    "staff": "[MASKED_FULLNAME]",
    "print": "N",
    "order_date_time": "2011-10-14 14:22:01",
    "doctor": "063",
    "ward": "03",
    "hos_guid": null
  },
  {
    "order_no": 1824,
    "an": "540000788",
    "staff": "[MASKED_FULLNAME]",
    "print": "N",
    "order_date_time": "2011-10-13 15:12:21",
    "doctor": "064",
    "ward": "03",
    "hos_guid": null
  },
  {
    "order_no": 1836,
    "an": "540000786",
    "staff": "[MASKED_FULLNAME]",
    "print": "N",
    "order_date_time": "2011-10-13 13:26:37",
    "doctor": "066",
    "ward": "03",
    "hos_guid": null
  },
  {
    "order_no": 1839,
    "an": "540000786",
    "staff": "[MASKED_FULLNAME]",
    "print": "N",
    "order_date_time": "2011-10-13 13:28:14",
    "doctor": "066",
    "ward": "03",
    "hos_guid": null
  },
  {
    "order_no": 1841,
    "an": "540000801",
    "staff": "[MASKED_FULLNAME]",
    "print": "N",
    "order_date_time": "2011-10-31 12:02:32",
    "doctor": "063",
    "ward": "02",
    "hos_guid": null
  },
  {
    "order_no": 1844,
    "an": "540000801",
    "staff": "[MASKED_FULLNAME]",
    "print": "N",
    "order_date_time": "2011-11-01 09:52:04",
    "doctor": "063",
    "ward": "02",
    "hos_guid": null
  },
  {
    "order_no": 1845,
    "an": "540000788",
    "staff": "[MASKED_FULLNAME]",
    "print": "N",
    "order_date_time": "2011-10-13 15:10:51",
    "doctor": "064",
    "ward": "03",
    "hos_guid": null
  }
]
```
