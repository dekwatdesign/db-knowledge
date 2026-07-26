# `labour_deliver_abnormal_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| labour_deliver_abnormal_type | int(11) | NO | PRI | 0 |  |  |
| labour_deliver_abnormal_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| export_code | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_labour_deliver_abnormal_name | labour_deliver_abnormal_name | yes | 1 |
| PRIMARY | labour_deliver_abnormal_type | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "labour_deliver_abnormal_type": 0,
    "labour_deliver_abnormal_name": "ผ่าท้องคลอด",
    "hos_guid": "{190EAE0A-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "export_code": null
  },
  {
    "labour_deliver_abnormal_type": 1,
    "labour_deliver_abnormal_name": "ใช้คีม",
    "hos_guid": "{190EB1AB-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "export_code": null
  },
  {
    "labour_deliver_abnormal_type": 2,
    "labour_deliver_abnormal_name": "ใช้เครื่องสูญญากาศ",
    "hos_guid": "{190EB428-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "export_code": null
  },
  {
    "labour_deliver_abnormal_type": 3,
    "labour_deliver_abnormal_name": "ท่าก้น",
    "hos_guid": "{190EB695-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "export_code": null
  },
  {
    "labour_deliver_abnormal_type": 4,
    "labour_deliver_abnormal_name": "ครรภ์แฝด",
    "hos_guid": "{190EB8E3-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "export_code": null
  }
]
```
