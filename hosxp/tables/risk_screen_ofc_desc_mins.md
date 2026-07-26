# `risk_screen_ofc_desc_mins`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| mins_sid | decimal(10,0) | YES |  | NULL |  |  |
| mins_id | char(2) | YES |  | NULL |  |  |
| mins_desc | varchar(254) | YES |  | NULL |  |  |
| last_statu | char(1) | YES |  | NULL |  |  |
| last_updat | varchar(12) | YES |  | NULL |  |  |
| curr | char(1) | YES |  | NULL |  |  |
| user_sid | decimal(10,0) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "mins_sid": "1",
    "mins_id": "01",
    "mins_desc": "[MASKED_FULLNAME]",
    "last_statu": "I",
    "last_updat": "254809010800",
    "curr": "Y",
    "user_sid": "0",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "mins_sid": "2",
    "mins_id": "02",
    "mins_desc": "กระทรวงกลาโหม",
    "last_statu": "I",
    "last_updat": "254809010800",
    "curr": "Y",
    "user_sid": "0",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "mins_sid": "3",
    "mins_id": "03",
    "mins_desc": "กระทรวงการคลัง",
    "last_statu": "I",
    "last_updat": "254809010800",
    "curr": "Y",
    "user_sid": "0",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "mins_sid": "4",
    "mins_id": "04",
    "mins_desc": "กระทรวงการต่างประเทศ",
    "last_statu": "I",
    "last_updat": "254809010800",
    "curr": "Y",
    "user_sid": "0",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "mins_sid": "5",
    "mins_id": "05",
    "mins_desc": "กระทรวงการท่องเที่ยวและกีฬา",
    "last_statu": "I",
    "last_updat": "254809010800",
    "curr": "Y",
    "user_sid": "0",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "mins_sid": "6",
    "mins_id": "06",
    "mins_desc": "กระทรวงการพัฒนาสังคม และความมั่นคงของมนุษย์",
    "last_statu": "I",
    "last_updat": "254809010800",
    "curr": "Y",
    "user_sid": "0",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "mins_sid": "7",
    "mins_id": "07",
    "mins_desc": "กระทรวงเกษตรและสหกรณ์",
    "last_statu": "I",
    "last_updat": "254809010800",
    "curr": "Y",
    "user_sid": "0",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "mins_sid": "8",
    "mins_id": "08",
    "mins_desc": "กระทรวงคมนาคม",
    "last_statu": "I",
    "last_updat": "254809010800",
    "curr": "Y",
    "user_sid": "0",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
