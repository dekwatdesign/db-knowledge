# `vital_sign_data`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vital_sign_data_id | int(11) | NO | PRI | 0 |  |  |
| vital_sign_id | int(11) | YES |  | NULL |  |  |
| vital_sign_value | varchar(200) | YES |  | NULL |  |  |
| staff | varchar(20) | YES |  | NULL |  |  |
| vital_sign_datetime | datetime | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ix_an | an | no | 1 |
| ix_ix_hn | hn | no | 1 |
| ix_ix_vn | vn | no | 1 |
| PRIMARY | vital_sign_data_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vital_sign_data_id": 2,
    "vital_sign_id": 1,
    "vital_sign_value": "36",
    "staff": "[MASKED_FULLNAME]",
    "vital_sign_datetime": "2011-10-07 10:20:23",
    "hn": "530042350",
    "vn": "541007091920",
    "an": null,
    "hos_guid": null
  },
  {
    "vital_sign_data_id": 3,
    "vital_sign_id": 2,
    "vital_sign_value": "78",
    "staff": "[MASKED_FULLNAME]",
    "vital_sign_datetime": "2011-10-07 10:20:23",
    "hn": "530042350",
    "vn": "541007091920",
    "an": null,
    "hos_guid": null
  },
  {
    "vital_sign_data_id": 4,
    "vital_sign_id": 4,
    "vital_sign_value": "82",
    "staff": "[MASKED_FULLNAME]",
    "vital_sign_datetime": "2011-10-07 10:20:23",
    "hn": "530042350",
    "vn": "541007091920",
    "an": null,
    "hos_guid": null
  },
  {
    "vital_sign_data_id": 5,
    "vital_sign_id": 5,
    "vital_sign_value": "57",
    "staff": "[MASKED_FULLNAME]",
    "vital_sign_datetime": "2011-10-07 10:20:23",
    "hn": "530042350",
    "vn": "541007091920",
    "an": null,
    "hos_guid": null
  },
  {
    "vital_sign_data_id": 6,
    "vital_sign_id": 6,
    "vital_sign_value": "128",
    "staff": "[MASKED_FULLNAME]",
    "vital_sign_datetime": "2011-10-07 10:20:23",
    "hn": "530042350",
    "vn": "541007091920",
    "an": null,
    "hos_guid": null
  },
  {
    "vital_sign_data_id": 7,
    "vital_sign_id": 7,
    "vital_sign_value": "26",
    "staff": "[MASKED_FULLNAME]",
    "vital_sign_datetime": "2011-10-07 10:20:23",
    "hn": "530042350",
    "vn": "541007091920",
    "an": null,
    "hos_guid": null
  },
  {
    "vital_sign_data_id": 8,
    "vital_sign_id": 1,
    "vital_sign_value": "36",
    "staff": "[MASKED_FULLNAME]",
    "vital_sign_datetime": "2011-10-07 10:21:34",
    "hn": "530085254",
    "vn": "541007092153",
    "an": null,
    "hos_guid": null
  },
  {
    "vital_sign_data_id": 9,
    "vital_sign_id": 2,
    "vital_sign_value": "63",
    "staff": "[MASKED_FULLNAME]",
    "vital_sign_datetime": "2011-10-07 10:21:34",
    "hn": "530085254",
    "vn": "541007092153",
    "an": null,
    "hos_guid": null
  }
]
```
