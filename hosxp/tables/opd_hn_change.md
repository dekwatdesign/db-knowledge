# `opd_hn_change`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_guid | varchar(38) | NO | PRI |  |  |  |
| old_hn | varchar(9) | YES |  | NULL |  |  |
| new_hn | varchar(9) | YES |  | NULL |  |  |
| change_date | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| change_type | varchar(10) | YES |  | NULL |  |  |
| opd_hn_change_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_id | opd_hn_change_id | no | 1 |
| PRIMARY | hos_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hos_guid": "",
    "old_hn": "540001679",
    "new_hn": "540001679",
    "change_date": "2011-10-06 09:41:33",
    "staff": "[MASKED_FULLNAME]",
    "change_type": "CHANGE",
    "opd_hn_change_id": 1,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{0017180C-85D1-44F5-A555-A5D7073F19FD}",
    "old_hn": "530030650",
    "new_hn": "600000436",
    "change_date": "2017-04-25 08:45:59",
    "staff": "[MASKED_FULLNAME]",
    "change_type": "CHANGE",
    "opd_hn_change_id": null,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{001C0A3C-7278-4AB8-8C6D-A3C442EFDE20}",
    "old_hn": "530172444",
    "new_hn": "580000538",
    "change_date": "2015-03-30 10:10:40",
    "staff": "[MASKED_FULLNAME]",
    "change_type": "CHANGE",
    "opd_hn_change_id": null,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{0049AABF-3F41-4253-A650-20F577016C9F}",
    "old_hn": "530068745",
    "new_hn": "600000869",
    "change_date": "2017-06-22 19:33:10",
    "staff": "[MASKED_FULLNAME]",
    "change_type": "CHANGE",
    "opd_hn_change_id": null,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{005DEE0D-1CA4-42BC-ACCD-5040F47A3B4F}",
    "old_hn": "530083724",
    "new_hn": "530178642",
    "change_date": "2017-06-08 10:07:41",
    "staff": "[MASKED_FULLNAME]",
    "change_type": "MERGE",
    "opd_hn_change_id": null,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{0079AFD7-5847-4089-BCF5-F2E8879A05BA}",
    "old_hn": "540002099",
    "new_hn": "530155354",
    "change_date": "2011-12-13 10:38:39",
    "staff": "[MASKED_FULLNAME]",
    "change_type": "CHANGE",
    "opd_hn_change_id": null,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{007A3CB5-8CB0-41EB-A6FB-EF8E9ECE004B}",
    "old_hn": "530087625",
    "new_hn": "530108053",
    "change_date": "2020-03-25 12:55:51",
    "staff": "[MASKED_FULLNAME]",
    "change_type": "MERGE",
    "opd_hn_change_id": null,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{007D870A-B1B7-4925-8AD5-89B6CCCC0084}",
    "old_hn": "530017245",
    "new_hn": "560001594",
    "change_date": "2013-09-24 09:23:11",
    "staff": "[MASKED_FULLNAME]",
    "change_type": "CHANGE",
    "opd_hn_change_id": null,
    "hos_guid_ext": null
  }
]
```
