# `pq_ipd_rxorder`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | YES | MUL | NULL |  |  |
| order_no | int(11) | NO | PRI | 0 |  |  |
| request_date | date | YES | MUL | NULL |  |  |
| request_time | time | YES | MUL | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| print | char(1) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| ward | char(2) | YES |  | NULL |  |  |
| bedno | varchar(4) | YES |  | NULL |  |  |
| doctor | varchar(6) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | order_no | yes | 1 |
| print | print | no | 1 |
| request_date | request_date | no | 1 |
| request_time | request_time | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "an": "620000890",
    "order_no": 260371,
    "request_date": "2019-09-18",
    "request_time": "12:28:20",
    "staff": "[MASKED_FULLNAME]",
    "print": "Y",
    "hn": "530054147",
    "ward": "04",
    "bedno": "ก503",
    "doctor": "067",
    "hos_guid": null
  },
  {
    "an": "620000886",
    "order_no": 260372,
    "request_date": "2019-09-18",
    "request_time": "12:20:05",
    "staff": "[MASKED_FULLNAME]",
    "print": "Y",
    "hn": "610001728",
    "ward": "04",
    "bedno": "ก502",
    "doctor": "334",
    "hos_guid": null
  },
  {
    "an": "620000871",
    "order_no": 260373,
    "request_date": "2019-09-18",
    "request_time": "12:54:10",
    "staff": "[MASKED_FULLNAME]",
    "print": "Y",
    "hn": "620001263",
    "ward": "04",
    "bedno": "ก507",
    "doctor": "350",
    "hos_guid": null
  },
  {
    "an": "620000967",
    "order_no": 260374,
    "request_date": "2019-09-18",
    "request_time": "13:01:23",
    "staff": "[MASKED_FULLNAME]",
    "print": "N",
    "hn": "620001168",
    "ward": "04",
    "bedno": "ก510",
    "doctor": "351",
    "hos_guid": null
  },
  {
    "an": "620000881",
    "order_no": 260375,
    "request_date": "2019-09-18",
    "request_time": "15:06:12",
    "staff": "[MASKED_FULLNAME]",
    "print": "N",
    "hn": "600001367",
    "ward": "04",
    "bedno": "ก508",
    "doctor": "068",
    "hos_guid": null
  },
  {
    "an": "620000859",
    "order_no": 260378,
    "request_date": "2019-09-18",
    "request_time": "13:14:05",
    "staff": "[MASKED_FULLNAME]",
    "print": "N",
    "hn": "610001420",
    "ward": "04",
    "bedno": "ก504",
    "doctor": "064",
    "hos_guid": null
  },
  {
    "an": "620000529",
    "order_no": 260379,
    "request_date": "2019-09-18",
    "request_time": "14:12:15",
    "staff": "[MASKED_FULLNAME]",
    "print": "N",
    "hn": "530209148",
    "ward": "04",
    "bedno": "ก501",
    "doctor": "063",
    "hos_guid": null
  },
  {
    "an": "620000838",
    "order_no": 260380,
    "request_date": "2019-09-18",
    "request_time": "14:49:22",
    "staff": "[MASKED_FULLNAME]",
    "print": "N",
    "hn": "550001539",
    "ward": "04",
    "bedno": "ก509",
    "doctor": "067",
    "hos_guid": null
  }
]
```
