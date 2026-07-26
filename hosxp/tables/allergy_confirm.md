# `allergy_confirm`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| confirm_id | int(11) | NO | PRI | 0 |  |  |
| confirm_date_time | datetime | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| agent | varchar(150) | YES |  | NULL |  |  |
| doctor | varchar(15) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| confirm_type | varchar(10) | YES |  | NULL |  |  |
| remark | text | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| opi_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_datetime | confirm_date_time | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_opiguid | opi_guid | no | 1 |
| ix_vn | vn | no | 1 |
| ix_vn_opiguid | vn | no | 1 |
| ix_vn_opiguid | opi_guid | no | 2 |
| ix_vn_opiguid_index | opi_guid | no | 1 |
| ix_vn_opiguid_index | vn | no | 2 |
| PRIMARY | confirm_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "confirm_id": 1,
    "confirm_date_time": "2013-08-06 08:48:13",
    "hn": "560000666",
    "agent": "Risperidone",
    "doctor": "067",
    "staff": "[MASKED_FULLNAME]",
    "confirm_type": "CONFIRM",
    "remark": null,
    "hos_guid": null,
    "vn": null,
    "opi_guid": null
  },
  {
    "confirm_id": 2,
    "confirm_date_time": "2013-08-06 08:52:11",
    "hn": "560000666",
    "agent": "Risperidone",
    "doctor": "087",
    "staff": "[MASKED_FULLNAME]",
    "confirm_type": "CONFIRM",
    "remark": null,
    "hos_guid": null,
    "vn": null,
    "opi_guid": null
  },
  {
    "confirm_id": 3,
    "confirm_date_time": "2013-12-11 09:31:22",
    "hn": "560000666",
    "agent": "Risperidone",
    "doctor": "085",
    "staff": "[MASKED_FULLNAME]",
    "confirm_type": "CONFIRM",
    "remark": null,
    "hos_guid": null,
    "vn": null,
    "opi_guid": null
  },
  {
    "confirm_id": 4,
    "confirm_date_time": "2014-02-12 09:15:17",
    "hn": "560000666",
    "agent": "Risperidone",
    "doctor": "067",
    "staff": "[MASKED_FULLNAME]",
    "confirm_type": "CONFIRM",
    "remark": null,
    "hos_guid": null,
    "vn": null,
    "opi_guid": null
  },
  {
    "confirm_id": 5,
    "confirm_date_time": "2014-02-12 09:19:49",
    "hn": "560000666",
    "agent": "Risperidone",
    "doctor": "085",
    "staff": "[MASKED_FULLNAME]",
    "confirm_type": "CONFIRM",
    "remark": null,
    "hos_guid": null,
    "vn": null,
    "opi_guid": null
  },
  {
    "confirm_id": 6,
    "confirm_date_time": "2014-06-20 09:18:54",
    "hn": "560000666",
    "agent": "Risperidone",
    "doctor": "086",
    "staff": "[MASKED_FULLNAME]",
    "confirm_type": "CONFIRM",
    "remark": null,
    "hos_guid": null,
    "vn": null,
    "opi_guid": null
  },
  {
    "confirm_id": 7,
    "confirm_date_time": "2014-09-15 14:32:12",
    "hn": "530092654",
    "agent": "Aripiprazole",
    "doctor": "063",
    "staff": "[MASKED_FULLNAME]",
    "confirm_type": "CONFIRM",
    "remark": null,
    "hos_guid": null,
    "vn": null,
    "opi_guid": null
  },
  {
    "confirm_id": 8,
    "confirm_date_time": "2015-02-02 14:38:32",
    "hn": "530092654",
    "agent": "Aripiprazole",
    "doctor": "063",
    "staff": "[MASKED_FULLNAME]",
    "confirm_type": "CONFIRM",
    "remark": null,
    "hos_guid": null,
    "vn": null,
    "opi_guid": null
  }
]
```
