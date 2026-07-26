# `ipt_accident`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| ac_date | date | YES |  | NULL |  |  |
| ac_time | time | YES |  | NULL |  |  |
| ac_place | tinyint(4) | YES |  | NULL |  |  |
| ac_type | char(1) | YES |  | NULL |  |  |
| claim_code | varchar(20) | YES |  | NULL |  |  |
| ac_ae | char(1) | YES |  | NULL |  |  |
| ac_emtype | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | an | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "an": "540000856",
    "ac_date": "2011-10-17",
    "ac_time": "15:15:00",
    "ac_place": 0,
    "ac_type": "",
    "claim_code": "",
    "ac_ae": "E",
    "ac_emtype": "1",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000857",
    "ac_date": "2011-10-18",
    "ac_time": "12:45:00",
    "ac_place": 0,
    "ac_type": "V",
    "claim_code": "",
    "ac_ae": "E",
    "ac_emtype": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000985",
    "ac_date": "2011-11-18",
    "ac_time": "12:00:00",
    "ac_place": 2,
    "ac_type": "C",
    "claim_code": "",
    "ac_ae": "E",
    "ac_emtype": "1",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
