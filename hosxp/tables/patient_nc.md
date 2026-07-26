# `patient_nc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | YES | MUL | NULL |  |  |
| cdate | date | YES |  | NULL |  |  |
| ctime | time | YES |  | NULL |  |  |
| old_fname | varchar(50) | YES |  | NULL |  |  |
| old_lname | varchar(50) | YES |  | NULL |  |  |
| old_address | varchar(250) | YES |  | NULL |  |  |
| staff | varchar(50) | YES | MUL | NULL |  |  |
| new_fname | varchar(50) | YES |  | NULL |  |  |
| new_lname | varchar(50) | YES |  | NULL |  |  |
| new_address | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| staff | staff | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hn": "530024853",
    "cdate": "2011-10-09",
    "ctime": "16:26:41",
    "old_fname": "[MASKED_FNAME]",
    "old_lname": "[MASKED_LNAME]",
    "old_address": "",
    "staff": "[MASKED_FULLNAME]",
    "new_fname": "[MASKED_FNAME]",
    "new_lname": "[MASKED_LNAME]",
    "new_address": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530028854",
    "cdate": "2011-10-10",
    "ctime": "9:17:30",
    "old_fname": "[MASKED_FNAME]",
    "old_lname": "[MASKED_LNAME]",
    "old_address": "132/293 2 01 06 11",
    "staff": "[MASKED_FULLNAME]",
    "new_fname": "[MASKED_FNAME]",
    "new_lname": "[MASKED_LNAME]",
    "new_address": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "540001702",
    "cdate": "2011-10-10",
    "ctime": "10:59:05",
    "old_fname": "[MASKED_FNAME]",
    "old_lname": "[MASKED_LNAME]",
    "old_address": "409/187 2 10 01 11",
    "staff": "[MASKED_FULLNAME]",
    "new_fname": "[MASKED_FNAME]",
    "new_lname": "[MASKED_LNAME]",
    "new_address": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530019554",
    "cdate": "2011-10-10",
    "ctime": "11:21:06",
    "old_fname": "[MASKED_FNAME]",
    "old_lname": "[MASKED_LNAME]",
    "old_address": "102/90 8 07 01 13",
    "staff": "[MASKED_FULLNAME]",
    "new_fname": "[MASKED_FNAME]",
    "new_lname": "[MASKED_LNAME]",
    "new_address": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530160554",
    "cdate": "2011-10-11",
    "ctime": "10:24:00",
    "old_fname": "[MASKED_FNAME]",
    "old_lname": "[MASKED_LNAME]",
    "old_address": "44 15 05 04 11",
    "staff": "[MASKED_FULLNAME]",
    "new_fname": "[MASKED_FNAME]",
    "new_lname": "[MASKED_LNAME]",
    "new_address": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530197946",
    "cdate": "2011-10-11",
    "ctime": "11:04:35",
    "old_fname": "[MASKED_FNAME]",
    "old_lname": "[MASKED_LNAME]",
    "old_address": "103/176 ม.11  03 03 11",
    "staff": "[MASKED_FULLNAME]",
    "new_fname": "[MASKED_FNAME]",
    "new_lname": "[MASKED_LNAME]",
    "new_address": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "610001140",
    "cdate": "2011-10-12",
    "ctime": "8:40:23",
    "old_fname": "[MASKED_FNAME]",
    "old_lname": "[MASKED_LNAME]",
    "old_address": "734 ม.10 ซ.รสทิพย์ ถ.สุขุมวิท  08 01 11",
    "staff": "[MASKED_FULLNAME]",
    "new_fname": "[MASKED_FNAME]",
    "new_lname": "[MASKED_LNAME]",
    "new_address": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530098053",
    "cdate": "2011-10-12",
    "ctime": "14:23:51",
    "old_fname": "[MASKED_FNAME]",
    "old_lname": "[MASKED_LNAME]",
    "old_address": "228  01 01 11",
    "staff": "[MASKED_FULLNAME]",
    "new_fname": "[MASKED_FNAME]",
    "new_lname": "[MASKED_LNAME]",
    "new_address": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
